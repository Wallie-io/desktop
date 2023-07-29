import { deleteNode } from '@api/gun/node/delete'
import { WallieNode } from '@type/WallieNode'
import { DateTime } from 'luxon'
import { useEffect } from 'react'

export function useNuclearEvent(getNodes: () => WallieNode[]) {
    // handle Nuclear event codes
    useEffect(() => {
        async function downHandler({ key }: KeyboardEvent) {
            if (key !== 'N') {
                return
            }
            const nodes = await getNodes()
            const threeDaysAgo = DateTime.now().minus({ days: 3 })
            for (const node of nodes) {
                const isOld = DateTime.fromMillis(node.date) < threeDaysAgo
                const isReservedKey = ['wrfrn32', 'clock'].includes(key)
                if (isOld && !isReservedKey) {
                    node.key && (await deleteNode(node.key))
                }
            }
        }
        window.addEventListener('keydown', downHandler)
        return () => {
            window.removeEventListener('keydown', downHandler)
        }
    }, [getNodes])
}
