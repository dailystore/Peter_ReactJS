export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    let token = JSON.parse(localStorage.getItem('user-token'));
    if (user && token) {
        return { 'auth-token': token };
    } else {
        return {};
    }
}