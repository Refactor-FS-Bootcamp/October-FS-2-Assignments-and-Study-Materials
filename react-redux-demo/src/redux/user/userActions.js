import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

export const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        fetch('https://jsonplaceholder.typicode.com/userz')
            .then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    throw Error(response.statusText);
                }
            })
            .then(data => {
                dispatch(fetchUsersSuccess(data))
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}