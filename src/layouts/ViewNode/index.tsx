import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SimpleIcon, Styles } from '@components/interface'
import gun, { namespace } from '@api/gun'
import { useNavigate } from 'react-router-dom'
import { WallieNode } from '@type/WallieNode'
import { TimeAgo } from '@components/TimeAgo'
import { HeadLink, Title, ViewNodeStyled } from './index.styled'

import { db } from '@api/gun'
import { ViewCount } from './ViewCount'
import useKeyboard from '@hooks/useKeyboard'
import useViewCount from '@hooks/useViewCount'

type ViewNodeProps = {
    node: WallieNode
    onNodeRemoved: (nodeKey: string | undefined) => void
}

export const ViewNode: FC<ViewNodeProps> = ({ node, onNodeRemoved }) => {
    const navigate = useNavigate()
    const head = node.head && db.node.listenOne(node.head, 'node')
    const [isShowAdvanced, showAdvanced] = useState<boolean>(false)
    //@todo possibly investigate if ID is always available?
    //i don't want to open too many cans of worms during the initial refactor phase

    //@ts-expect-error - node.key needs better typing
    const [views] = useViewCount(node.key)
    const keypressed = useKeyboard(['v'])

    const derefNode = () => {
        if (!node.key) {
            return
        }
        gun.get(namespace + '/node')
            .get(node.key)
            .put(null, (_awk) => {
                onNodeRemoved(node.key)
            })
    }

    //we use effects here to draw the logic of responding to key inputs into a previously
    //defined hook. aka, it's hard to mix event based state based hooks w/ one another
    useEffect(() => {
        if (keypressed === 'v') {
            showAdvanced((isShowAdvanced) => !isShowAdvanced)
        }
    }, [keypressed])

    // @todo - this is unused
    //there are a few different cases to handle for when clicking on a node
    const onPostClicked = (event: MouseEvent) => {
        //checks to see if it was only a single click for which we do nothing
        if (event.detail <= 1) {
            return
        }
        // if there's a url, let's open it!
        if (node.url) {
            return window.open(node.url, '_blank')
        }
        return navigate(`/node/${node.key}`)
    }

    // @todo - this is unused
    //we want to remove any formatting from the header/title text
    function stripHtml(input: string) {
        let doc = new DOMParser().parseFromString(input, 'text/html')
        return doc.body.textContent || ''
    }

    // @todo - this is unused
    //shortens the string if it's longer than the suggested length
    //and adds dot dot dot after but only if longer
    const trimWithEllip = (input: string = '', length: number) => {
        return input.length > length
            ? input.substring(0, length) + '...'
            : input
    }

    return (
        <div className="mt-4 max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
            <div className="font-bold text-xl mb-2">{node.directionText}</div>
            <p className="text-gray-700 text-base">
                <div
                    className="message"
                    dangerouslySetInnerHTML={{
                        __html: node.message || '',
                    }}
                ></div>
            </p>
            <div className="pt-4 flex items-center">
                <span className="text-sm text-gray-600">@{node.user}</span>
                <span className="ml-auto text-sm text-gray-600">
                    <TimeAgo date={node.date}></TimeAgo>
                </span>
                <span className="text-sm text-gray-600 ml-4">
                    <ViewCount count={views} />
                </span>
            </div>

            {/** head && (
                <HeadLink to={`/node/${node.head}`}>
                    re: {trimWithEllip(stripHtml(head.message), 20)}
                </HeadLink>
            ) **/}

            {/* <div className="menu">
                {node.url && (
                    <div className="ogLink">
                        <a href={node.url} target="_blank">
                            og-link
                        </a>
                    </div>
                )}
                */}

            {/* <div className="nodeLink">
                    <Link to={'/node/' + node.key}>node-link</Link>
                </div> */}

            {/* isShowAdvanced && (
                    <SimpleIcon
                        content="[ ␡ ]"
                        hoverContent={'[ ␡ ]'}
                        activityStyle={Styles.warning}
                        className="simpleIcon"
                        onClick={() => derefNode()}
                    />
                ) */}
        </div>
    )
}
