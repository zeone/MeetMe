import * as React from 'react';

export const authHeader = (requestOptions: RequestInit) => {



    // return authorization header with jwt token
    let storedUser = localStorage.getItem('user');
    let user: any;
    if (storedUser)
        user = JSON.parse(storedUser);

    if (user && user.access_token) {
        requestOptions.headers = { 'Authorization': 'Bearer ' + user.access_token };
        // return { 'Authorization': 'Bearer ' + user.access_token };
    }
    // return header;
}
