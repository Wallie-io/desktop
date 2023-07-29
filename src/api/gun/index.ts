import GUN, { IGunInstance } from 'gun'
export { namespace } from './namespaces'
import { init as startHeartbeat } from './heartbeat'
import { namespace } from './namespaces'
const peers = []

if (window.location.hostname === 'localhost') {
    // peers.push('{{YOUR LOCAL PEERS HERE}}')
} else {
    peers.push('https://peer.wallie.io/gun')
}

const gun: IGunInstance = GUN({
    localStorage: true,
    peers,
})

startHeartbeat(gun, namespace)

export default gun

declare global {
    interface Window {
        gun: any
    }
}
window.gun = gun
