import gun, { namespace } from '@api/gun'

export const removeByKey = (
    key: string,
    callback?: (key: string) => void
): Promise<void> => {
    return new Promise((resolve) => {
        gun.get(namespace + '/node')
            .get(key)
            .put(null, (awk) => {
                console.log(`deleted node at key ${key} awk:`, awk)
                callback && callback(key)
                resolve()
            })
    })
}
