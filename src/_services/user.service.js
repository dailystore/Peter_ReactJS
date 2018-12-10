import { authHeader } from '../_helpers';

export const userService = {
    getById
};

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`https://api.github.com/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
            debugger;
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}