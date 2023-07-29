import { useEffect, useState } from 'react'
import gun, { namespace } from 'GunApi/gun'
import styled from 'styled-components'
import { ViewNode } from './ViewNode'
import LoadingWheel from '@components/LoadingWheel'
import moment from 'moment'
import { isNull, isString, random } from 'lodash'
import {
    SearchActions,
    SearchHighlights,
    useSearchReducer,
} from './SearchState'
import { WallieNode } from '@type/WallieNode'

const GetAll = () => {
    const [nodes, setNodes] = useState<WallieNode[] | any[]>([])
    const [longLoad, setLongLoad] = useState<boolean>(false)
    const [searchState, dispatch] = useSearchReducer()
    const onNodeRemoved = (nodeKey: string | undefined) => {
        setNodes((nodes) => nodes.filter((node) => node.key !== nodeKey))
    }

    const getNodes = (): Promise<WallieNode[]> => {
        return new Promise((resolve) => {
            setNodes((nodes) => {
                resolve(nodes)
                return nodes
            })
        })
    }

    // init the page title
    useEffect(() => {
        document.title = `
         Wallie, a front [page,]
      `
    }, [])

    // Wait 3 seconds and if there still aren't any nodes
    // update the component state to show the 404-ish state
    useEffect(() => {
        setTimeout(() => {
            setNodes((nodes: any) => {
                if (!nodes || !nodes.length) {
                    setLongLoad(true)
                }
                return nodes
            })
        }, random(5000, 600000))
    }, [])

    // Get reddit posts to start filling in some content
    useEffect(() => {
        type RedditPost = {
            author: string //maps to user
            distinguished: string
            thumbnail: string
            title: string //maps to node.directionText
            url: string
            selftext: string //maps to node.message
            created_utc: Number
        }

        type RedditPostResponse = {
            data: {
                children: [{ data: RedditPost }]
            }
        }
        const fillWithFun = async () => {
            const channel = [
                'CrazyIdeas',
                'MorbidReality',
                'TalesFromRetail',
                'AskReddit',
            ][random(0, 2)]
            const res = await fetch(
                `https://www.reddit.com/r/${channel}/new.json`
            )
            const {
                data: { children: redditPosts },
            } = (await res.json()) as RedditPostResponse
            const {
                author: user,
                thumbnail,
                title: directionText,
                selftext: message,
                url,
                created_utc: date,
            }: RedditPost = redditPosts[random(0, redditPosts?.length - 1)]
                ?.data
            const post: any = {
                user,
                thumbnail,
                url,
                date: Date.now(),
                directionText,
                message,
                redditDate: date,
            }
            gun.get(namespace + `/node`)
                .get(user)
                .put(post, (awk: string) => console.log(awk))
        }
        setTimeout(async () => {
            const nodes = await getNodes()
            if (!nodes?.length) {
                console.log(`we're filled with fun!`)
                return fillWithFun()
            }
            console.log(`we did not fill with fun`)
        }, 3000) // time until we'd like to fill it
    }, [])

    const deleteNode = (key: string): Promise<void> => {
        return new Promise((resolve) => {
            gun.get(namespace + '/node')
                .get(key)
                .put(null, (awk: string) => {
                    console.log(`deleted ${key} awk:`, awk)
                    onNodeRemoved(key)
                    resolve()
                })
        })
    }

    // handle Nuclear event codes
    useEffect(() => {
        async function downHandler({ key }: KeyboardEvent) {
            if (key !== 'N') {
                return
            }
            const nodes = await getNodes()
            for (const node of nodes) {
                const isOld = moment(node.date).isBefore(
                    moment(new Date()).subtract(3, 'days')
                )
                const isReservedKey = ['wrfrn32', 'clock'].includes(key)
                if (isOld && !isReservedKey) {
                    await deleteNode(node.key)
                }
            }
        }
        window.addEventListener('keydown', downHandler)
        return () => {
            window.removeEventListener('keydown', downHandler)
        }
    }, [])

    // get all of the nodes
    useEffect(() => {
        const allNodesQuery = gun
            .get(namespace + '/node')
            .map()
            .on((newNode: WallieNode | any = {}, key: string) => {
                const immutableNode =
                    typeof newNode === 'object'
                        ? { ...newNode, key }
                        : { message: newNode, key }
                setNodes((nodes) => {
                    dispatch({ type: SearchActions.INCREMENT_TICKS })
                    const filtered = nodes.filter(
                        // if there's NOT already an item by this key
                        // and the node actually exists
                        // and there is a message
                        (node) =>
                            node.key !== key && !!node && isString(node.message)
                    )
                    // if the new node is null ignore it
                    // if the new node's message has nothing on it, ignore it
                    if (
                        isNull(immutableNode) ||
                        !isString(immutableNode.message)
                    ) {
                        return filtered
                    }
                    return [...filtered, immutableNode].sort(
                        (node, nodeB) => nodeB.date - node.date
                    )
                })
            })
        return () => {
            allNodesQuery.off()
            setNodes([])
        }
    }, [])

    return (
        <GetAllStyled>
            {!nodes.length && !longLoad && (
                <LoadingWheel className="loadingwheel" />
            )}
            {!nodes.length && longLoad && (
                <NoContent>
                    It doesn't look like there's anything here... yet
                </NoContent>
            )}
            <ListNodesWrapper>
                <ListNodes>
                    {nodes.length && (
                        <SearchHighlights
                            {...searchState}
                            numNodes={nodes.length}
                        />
                    )}
                    {nodes.map((node) => (
                        <ViewNode
                            node={node}
                            key={node.key}
                            onNodeRemoved={onNodeRemoved}
                        />
                    ))}
                </ListNodes>
            </ListNodesWrapper>
        </GetAllStyled>
    )
}

export default GetAll
