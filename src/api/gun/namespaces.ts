import GUN from 'gun'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const subDomain = window.location.host.split('.')[0]
const defaultNamespace = urlParams.get('namespace') || subDomain || `wallie2.0`
export let namespace: string = defaultNamespace

export function init(gun?: GUN, _namespace?: string) {
    if (_namespace) {
        namespace = _namespace
        console.log(`namespace updated: namespace`)
    }
}

console.log(namespace)
