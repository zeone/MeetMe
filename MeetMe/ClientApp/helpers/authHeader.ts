import * as React from 'react';

export const authHeader = (requestOptions: RequestInit) => {



    // return authorization header with jwt token
    let storedUser = localStorage.getItem('user');
    let user: any;
    if (storedUser)
        user = JSON.parse(storedUser);

    let myHeaders: Headers = new Headers();
    if (requestOptions.headers)
        myHeaders = requestOptions.headers as Headers;
    if (user && user.access_token) {
        {
            myHeaders.append('Authorization', 'Bearer ' + user.access_token);
            requestOptions.headers = myHeaders;
        }
        // return { 'Authorization': 'Bearer ' + user.access_token };
    }
    // return header;
}
