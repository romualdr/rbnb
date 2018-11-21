import { formValueSelector, reset } from 'redux-form'

export const HOUSING_LIST_NEW = 'HOUSING_LIST_NEW'
export const HOUSING_LIST_COMPLETE = 'HOUSING_LIST_COMPLETE'
export const HOUSING_DETAILS_COMPLETE = 'HOUSING_DETAILS_COMPLETE'
export const HOUSING_STATUS_UPDATE = 'HOUSING_STATUS_UPDATE'

export const HOUSING_STATUS_LOADING = 'IS_LOADING'
export const HOUSING_STATUS_LOADED = 'LOADED'
export const HOUSING_STATUS_NO_HOUSES = 'NO_HOUSES'
export const HOUSING_STATUS_NO_CONNECTION = 'NO_CONNECTION'

export function startLoading() {
    return function (dispatch, getState) {
        return dispatch({ type: HOUSING_STATUS_UPDATE, status: HOUSING_STATUS_LOADING })
    }
}

export function getPageTitle(state) {
    const selector = formValueSelector('search')
    const city = selector( state, 'city' )

    return city ? `${city}` : 'Partout'
}

export function fetchHousings() {
    return function( dispatch, getState ) {
        const selector = formValueSelector('search')
        const city = selector( getState(), 'city' )
        const minDate = selector( getState(), 'minDate' )
        const maxDate = selector( getState(), 'maxDate' )

        if (getState().housings.status !== HOUSING_STATUS_LOADING)
            dispatch(startLoading())

        return fetch('https://www.airbnb.fr/api/v2/explore_tabs?key=d306zoyjsyarp7ifhu67rjxn52tv0t20&currency=EUR&locale=fr&refinement_paths%5B%5D=%2Fhomes&is_guided_search=true&location=' + city + '&checkin=' + ( minDate && minDate.toISOString() ) + '&checkout=' + ( maxDate && maxDate.toISOString() ) )
        .then(response => response.json())
        .then(responseJson => {
            const housings = (responseJson.explore_tabs[0].sections.find((section) => section.listings && section.listings.length) || {}).listings || []
            // Lorsque le webservice répond, on dispatche l'action en fournissant les logements récupérés
            dispatch({
                type: HOUSING_LIST_COMPLETE,
                status: housings.length ? HOUSING_STATUS_LOADED : HOUSING_STATUS_NO_HOUSES,
                city: city,
                housings
            });
        }).catch(() => dispatch({
            type: HOUSING_STATUS_UPDATE,
            status: HOUSING_STATUS_NO_CONNECTION
        }))
    }
}

export function cleanSearch() {
    return function (dispatch, getState) {
        dispatch(reset('search'))
        dispatch(fetchHousings())
    }
}

export function fetchHousing(id) {
    return function( dispatch, getState ) {
        dispatch({
            type: HOUSING_DETAILS_COMPLETE,
            // On récupère les données du logement dans le state
            housing: getState().housings.list.find( housing => housing.listing.id == id )
        });
    };
}