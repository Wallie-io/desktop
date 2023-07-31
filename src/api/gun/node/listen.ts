import { useEffect, useState } from 'react'
import gun, { namespace } from '..'
import { WallieNode } from '@type/WallieNode'

export const listen = (query: string, model: string = 'node'): WallieNode[] => {
    const [nodes, setNodes] = useState<WallieNode[]>([])

    const setNodesCallback = (newNode: WallieNode, key: string) => {
        //if the item doesn't exist, we want to make
        setNodes((nodes) => {
            const filteredNodes = nodes.filter((node) => node.key !== key)
            if (!newNode) {
                return filteredNodes
            }
            return [...filteredNodes, { ...newNode, key }]
        })
    }

    //watch for query changes, initialize to empty array
    useEffect(() => {
        setNodes([])
        const chain = gun
            .get(`${namespace}/${model}`)
            .get(query)
            // @ts-ignore
            .on(setNodesCallback)

        return () => {
            chain.off()
        }
    }, [query])

    return nodes
}
