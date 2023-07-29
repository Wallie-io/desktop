import GUN from 'gun'
import './namespaces'

const peers = []

if (window.location.hostname === 'localhost') {
    // peers.push('{{YOUR LOCAL PEERS HERE}}')
} else {
    peers.push('https://peer.wallie.io/gun')
}

const gun = GUN({
    localStorage: true,
    peers,
})

export default gun

declare global {
    interface Window {
        gun: any
    }
}
window.gun = gun
