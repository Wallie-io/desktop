import { useEffect, useRef, useState } from 'react'
import gun, { namespace } from '@api/gun'
import { random } from 'lodash'
import { WallieNode } from '@type/WallieNode'

export default function useViewCount(nodeId: string) {
    const [views, setViews] = useState(1)
    const [intervalLength, _setIntervalLength] = useState(random(2500, 10000))
    const lastUpdateSent = useRef(new Date())

    useEffect(() => {
        const chain = onViews((newViews: any) => {
            if (newViews < views) return
            if (!newViews) return
            setViews(newViews)
        })

        return () => {
            //i'm not sure I like how these gun responses are typed
            //so i think it's best to just ignore it for now
            //@ts-ignore
            chain.off()
        }
    }, [nodeId, intervalLength])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newLastUpdateSent = new Date()
            const newViewTime =
                newLastUpdateSent.getTime() - lastUpdateSent.current.getTime()
            const newViewCount = views + newViewTime
            sendViewsRequest(nodeId, newViewCount)
            setViews(newViewCount)
            lastUpdateSent.current = newLastUpdateSent
        }, intervalLength)

        return () => clearInterval(intervalId)
    }, [nodeId, views, intervalLength])

    const sendViewsRequest = (nodeId: string, views: number) => {
        if (typeof views === 'undefined') return
        return gun
            .get(namespace + '/views')
            .get(nodeId)
            .put(views, (awk) => {
                console.log(`updated viewTime: `, awk)
            })
    }

    const onViews = (callback: (data: WallieNode) => void) => {
        if (!nodeId) {
            return () => {}
        }
        return gun
            .get(namespace + '/views')
            .get(nodeId)
            .on((data) => {
                callback(data)
            })
    }

    return [views]
}
