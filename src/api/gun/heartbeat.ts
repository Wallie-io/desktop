import { IGunInstance } from 'gun'

export function init(gun: IGunInstance, namespace: string) {
    // every 15 minutes send an update to make sure we're still connected
    setInterval(() => {
        gun.get(`${namespace}/heartbeat`).put(
            { time: new Date().getTime() },
            (ack) => {
                console.log(ack)
                console.log(`heartbeat performed`)
            }
        )
    }, 10 * 60 * 1000)
}
