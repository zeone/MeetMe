import * as React from 'react';

export const badResponse = (resp: any) => {
    return {
        statusCode: resp.status,
        statusText: resp.statusText
    }

}
