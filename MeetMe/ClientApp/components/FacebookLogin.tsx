﻿import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import { RouteComponentProps } from 'react-router';


const registerUser = (response: any, info: any) => {
    fetch('api/Account/ExternalLoginConfirmation', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "CustomUserInfo": {
                "email": response.email,
                "facebookId": response.userID,
                "userLogo": response.picture.data.url
            },
            "SysUserInfo": info
        }),
    }).then((resp) => {
        let t = resp;
    }).then((respjson) => {
        let r = respjson;
    }).catch((er) => {
        let e = er;
    });
}
const responseFacebook = (response: any) => {
    let info = {
        "LoginProvider": "Facebook",
        "ProviderKey": response.userID,
        "Principial": {
            "email": response.email
        }
    };
    fetch('api/Account/ExternalLoginCallback',
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        }).then((resp) => {
            if (resp && resp.status === 200) {
                let token: jwToken;
                resp.json().then(json => {
                    token = json as jwToken;
                    localStorage.setItem('user', JSON.stringify(token))

                    console.log(token);
                });
            }
            else if (resp && resp.status === 401) {
                registerUser(response, info);

            } else {
                console.log("error");
            }

        });
}

const prepareBaseSettings = () => {
    //fetch('api/Account/ExternalLogin', {
    //    method: 'POST',
    //    headers: {
    //        Accept: 'application/json',
    //        'Content-Type': 'application/json',
    //    },
    //    body: JSON.stringify({
    //        provider: 'Facebook',
    //        returnUrl: ''
    //    }),
    //}).then((resp) => {
    //    let t = resp;
    //}).then((respjson) => {
    //    let r = respjson;
    //}).catch((er) => {
    //    let e = er;
    //});

}
export class FacebookLoginComp extends React.Component<RouteComponentProps<{}>, {}> {

    constructor() {
        super();
    }






    //responseFacebook(response) {
    //    console.log(response);
    //    //anything else you want to do(save to localStorage)...
    //}


    render() {
        return <div>
            <FacebookLogin
                appId="385773281937432"
                autoLoad={true}
                fields="name,email,picture"
                onClick={prepareBaseSettings}
                callback={responseFacebook}>
            </FacebookLogin>
        </div>;
    }

}

interface jwToken {
    access_token: string,
    username: string
}