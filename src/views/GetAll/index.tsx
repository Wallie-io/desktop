import { useEffect, useState } from 'react'
import gun, { namespace } from '@api/gun'
import { ViewNode } from '@layouts/ViewNode'
import LoadingWheel from '@components/LoadingWheel'
import { isNull, isString, random } from 'lodash'
import {
    SearchActions,
    SearchHighlights,
    useSearchReducer,
} from './SearchState'
import { WallieNode } from '@type/WallieNode'
import { fillWithFun } from './utils/fillWithFun'
import { GetAllStyled, ListNodesWrapper, NoContent } from './index.styled'

const GetAll = () => {
    const [nodes, setNodes] = useState<WallieNode[] | any[]>([])
    const [longLoad, setLongLoad] = useState<boolean>(false)
    const [searchState, dispatch] = useSearchReducer()

    // when we delete something, we remove it from the local state
    const onNodeRemoved = (nodeKey: string | undefined) => {
        setNodes((nodes) => nodes.filter((node) => node.key !== nodeKey))
    }

    // a quick async wrapper to get us a simple state tied fetching mechanism
    const getNodes = (): Promise<WallieNode[]> => {
        return new Promise((resolve) => {
            setNodes((nodes) => {
                resolve(nodes)
                return nodes
            })
        })
    }

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
        }, random(5000, 60000))
    }, [])

    // Get reddit posts to start filling in some content
    // @todo - i think it would be good to pull this into a hook as well
    // but the interesting challenge is how tied it is to hook-based local state
    useEffect(() => {
        setTimeout(async () => {
            const nodes = await getNodes()
            if (!nodes?.length) {
                console.log(`we're filled with fun!`)
                return fillWithFun()
            }
            console.log(`we did not fill with fun`)
        }, 3000) // time until we'd like to fill it
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
            {/* this is the first thing that we'll see if there's nothing here
            yet but it hasn't been long enough to consider it a 404 issue */}
            {!nodes.length && !longLoad && (
                <LoadingWheel className="loadingwheel" />
            )}
            {/* long load will change to true after a random amount of time has passed */}
            {!nodes.length && longLoad && (
                <NoContent>
                    It doesn't look like there's anything here... yet
                </NoContent>
            )}
            <ListNodesWrapper>
                <div>
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
                </div>
            </ListNodesWrapper>
        </GetAllStyled>
    )
}

export default GetAll
