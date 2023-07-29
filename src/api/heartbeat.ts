import GUN from 'gun'

export function init(gun: GUN, namespace: string) {
    // every 15 minutes send an update to make sure we're still connected
    setInterval(() => {
        gun.get(`${namespace}/heartbeat`).put(
            { time: new Date().getTime() },
            (awk: string) => {
                console.log(awk)
                console.log(`heartbeat performed`)
            }
        )
    }, 10 * 60 * 1000)
}
