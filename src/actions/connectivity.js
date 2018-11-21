import { NetInfo } from 'react-native'

export const CONNECTIVITY_UPDATE = 'CONNECTIVITY_UPDATE'

export const CONNECTIVITY_STATUS_UNKNOWN = 'CONNECTIVITY_ACTION_UNKNOWN'
export const CONNECTIVITY_STATUS_CONNECTED = 'CONNECTIVITY_ACTION_CONNECTED'
export const CONNECTIVITY_STATUS_DISCONNECTED = 'CONNECTIVITY_ACTION_DISCONNECTED'

export function update(status)  {
    return { type: CONNECTIVITY_UPDATE, status }
}

export function attach(handler) {
    NetInfo.isConnected.addEventListener('connectionChange', handler)
}

export function detach(handler) {
    NetInfo.isConnected.removeEventListener('connectionChange', handler)
}

export function isConnected() {
    return NetInfo.isConnected.fetch()
}
