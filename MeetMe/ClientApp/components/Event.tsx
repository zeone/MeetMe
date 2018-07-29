import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { authHeader } from '../helpers/authHeader';
import ReactJson from 'react-json-view'
import { badResponse } from '../helpers/responseHelper';

interface EnevtApiState {
    eventId: string;
    event: any;
    events: [any];
    eventIndex: string,
    pageSize: string
}

export class Event extends React.Component<RouteComponentProps<{}>, EnevtApiState> {
    constructor(prop: any) {
        super(prop);

        this.state = {
            eventId: "1",
            event: {},
            events: [null],
            eventIndex: "1",
            pageSize: "10"
        }
        this.loadEvent = this.loadEvent.bind(this);
        this.changeEventId = this.changeEventId.bind(this);
        this.loadAllEvents = this.loadAllEvents.bind(this);
        this.changeEventIndex = this.changeEventIndex.bind(this);
        this.changePageSize = this.changePageSize.bind(this);
    }

    loadEvent() {
        let requestOptions: RequestInit = {
            method: 'GET'

        };
        authHeader(requestOptions);
        fetch('api/Event/' + this.state.eventId, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    let t = response.json();
                    return t;
                } else {
                    return badResponse(response);
                }

            },
                err => {
                    console.log(err);
                })
            .then(data => {
                this.setState(prevState => ({ event: data }));

            });
    }

    loadAllEvents() {
        let requestOptions: RequestInit = {
            method: 'GET'

        };
        authHeader(requestOptions);
        fetch('api/Events/?index=' + this.state.eventIndex + '&pageSize=' + this.state.pageSize, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    let t = response.json();
                    return t;
                } else {
                    return badResponse(response);
                }

            },
                err => {
                    console.log(err);
                })
            .then(data => {
                this.setState(prevState => ({ events: data }));

            });
    }

    public render() {

        let getEvent = this.getEvetById(this.state.event);
        let getAllEvents = this.getEvents(this.state.events);
        return <div>
            <br />
            {getEvent}
            <br />
            {getAllEvents}
        </div>;
    }

    //one event getting
    changeEventId(event: React.ChangeEvent<HTMLInputElement>) {
        event.persist();
        this.setState(prevState => ({ eventId: event.target.value }));
    }
    private getEvetById(event: any) {
        return <div>
            <p>Get response from getting one event by id</p>
            <span>/api/Event/</span>  <input
                type="text"
                value={this.state.eventId}
                onChange={this.changeEventId} />
            <button onClick={this.loadEvent} >
                Get event
            </button>
            <br />
            <ReactJson src={event} theme="monokai" />
        </div>;
    }


    //All events

    changeEventIndex(event: React.ChangeEvent<HTMLInputElement>) {
        event.persist();
        this.setState(prevState => ({ eventIndex: event.target.value }));
    }

    changePageSize(event: React.ChangeEvent<HTMLInputElement>) {
        event.persist();
        this.setState(prevState => ({ pageSize: event.target.value }));
    }
    private getEvents(events: any) {
        return <div>
            <p>Get response from getting all events</p>
            <span>/api/Event/?index=</span>
            <input
                type="text"
                value={this.state.eventIndex}
                onChange={this.changeEventIndex} />
            <span>&&pageSize</span>
            <input
                type="text"
                value={this.state.pageSize}
                onChange={this.changePageSize} />

            <button onClick={this.loadAllEvents} >
                Get events
                   </button>
            <br />
            <ReactJson src={events} theme="monokai" />
        </div>;
    }
}

