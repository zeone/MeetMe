import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { authHeader } from '../helpers/authHeader';
import ReactJson from 'react-json-view'

interface EnevtApiState {
    eventId: number;
    event: any;
}

export class Event extends React.Component<RouteComponentProps<{}>, EnevtApiState> {
    constructor(prop: any) {
        super(prop);

        this.state = {
            eventId: 1,
            event: {}
        }
        this.loadEvent = this.loadEvent.bind(this);
    }

    loadEvent() {
        let requestOptions: RequestInit = {
            method: 'GET'
        };
        authHeader(requestOptions);
        fetch('api/Event/', requestOptions)
            .then(response => {
                let t = response.json();
                console.log(t);
                return t;
            })
            .then(data => {
                this.setState({ eventId: this.state.eventId, event: data });

            });
    }

    public render() {
        let testJson: any = {
            test: 'test'

        }
        let test = this.getEvetById(this.state.event);
        return <div>test
            <br />
            <ReactJson src={testJson} />
            {test}
        </div>;
    }

    private getEvetById(event: any) {
        return <div>
            <span>/api/Event/</span>  <input type="number" value="{this.state.eventId}" /> <button onClick={this.loadEvent} >
                Get event
            </button>
            <br />
            <ReactJson src={event} />
        </div>;
    }
}

