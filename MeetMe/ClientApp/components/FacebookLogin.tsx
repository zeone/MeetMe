import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

export class FacebookLogin extends React.Component<RouteComponentProps<{}>> {
    constructor() {
        super();

    }

    public render() {
        return <div>
            <p>Test</p>
        </div>;
    }
}