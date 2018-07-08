export const authHeader = () => {
    // return authorization header with jwt token
    let storedUser = localStorage.getItem('user');
    let user;
    if (storedUser)
        user = JSON.parse(storedUser);

    if (user && user.access_token) {
        return { 'Authorization': 'Bearer ' + user.access_token };
    } else {
        return {};
    }
}
