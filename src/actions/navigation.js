export const GO_TO_LIST = 'GO_TO_LIST'
export const GO_TO_DETAIL = 'GO_TO_DETAILS'

export function goToList() {
    return { type: GO_TO_LIST }
}

export function goToDetail(screenParams) {
    return { type: GO_TO_DETAIL, screenParams }
}