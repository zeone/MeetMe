﻿import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { authHeader } from '../helpers/authHeader';
import ReactJson from 'react-json-view'
import { badResponse } from '../helpers/responseHelper';

interface EnevtApiState {
    eventId: string;
    event: any;
    events: [any];
    eventIndex: string;
    pageSize: string;
    crEvent: any;
    crRespEvent: any;
    updEvent: any;
    updRespEvent: any;
    deleteEvent: any;
}

export class Event extends React.Component<RouteComponentProps<{}>, EnevtApiState> {
    constructor(prop: any) {
        super(prop);

        this.state = {
            eventId: "1",
            event: {},
            crEvent: {
                place: "Besarabka",
                longitude: 123433,
                lattitude: 20034,
                googlePlace: "Kyiv",
                startDate: "0001-01-01T00:00:00",
                endDate: "0001-01-01T00:00:00",
                subject: "some subj",
                description: "firste event",
                preferredGender: 0,
                creationDate: "2018-08-05T17:54:48.8634302"
            },
            crRespEvent: {},
            events: [null],
            eventIndex: "0",
            pageSize: "10",
            updEvent: {},
            updRespEvent: {},
            deleteEvent: {}
        }
        this.loadEvent = this.loadEvent.bind(this);
        this.changeEventId = this.changeEventId.bind(this);
        this.loadAllEvents = this.loadAllEvents.bind(this);
        this.changeEventIndex = this.changeEventIndex.bind(this);
        this.changePageSize = this.changePageSize.bind(this);
        this.createEventResp = this.createEventResp.bind(this);
        this.changeCrEventModel = this.changeCrEventModel.bind(this);
        this.updateEventResp = this.updateEventResp.bind(this);
        this.changeUpdEventModel = this.changeUpdEventModel.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.deleteEventReq = this.deleteEventReq.bind(this);
    }

    loadEvent(forUpdate: boolean = false) {
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
                if (forUpdate)
                    this.setState(prevState => ({ updEvent: data }));
                else
                    this.setState(prevState => ({ event: data }));

            });
    }

    loadAllEvents() {
        let requestOptions: RequestInit = {
            method: 'GET'

        };
        authHeader(requestOptions);
        fetch('api/event/Events/?index=' + this.state.eventIndex + '&pageSize=' + this.state.pageSize, requestOptions)
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

    createEventResp() {
        let headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        let requestOptions: RequestInit = {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(this.state.crEvent)
        };
        authHeader(requestOptions);
        fetch('api/event/', requestOptions)
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
                this.setState(prevState => ({ crRespEvent: data }));

            });
    }

    updateEventResp() {
        let headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');

        let requestOptions: RequestInit = {
            headers: headers,
            method: 'PUT',
            body: JSON.stringify(this.state.updEvent)
        };
        authHeader(requestOptions);
        fetch('api/event/', requestOptions)
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
                this.setState(prevState => ({ updRespEvent: data }));

            });
    }

    deleteEventReq() {
        let requestOptions: RequestInit = {
            method: 'DELETE'

        };
        authHeader(requestOptions);
        fetch('api/Event/' + this.state.eventId, requestOptions)
            .then(response => {
                return badResponse(response);
            },
                err => {
                    console.log(err);
                })
            .then(data => {
                this.setState(prevState => ({ deleteEvent: data }));

            });
    }

    public render() {

        let getEvent = this.getEvetById(this.state.event);
        let getAllEvents = this.getEvents(this.state.events);
        let createEvent = this.createEvent(this.state.crEvent, this.state.crRespEvent);
        let updateEvent = this.updateEvent(this.state.updRespEvent);
        let deleteEvent = this.deleteEvent();
        return <div>
            <br />
            {getEvent}
            <br />
            {getAllEvents}
            <br />
            {createEvent}
            <br />
            {updateEvent}
            <br />
            {deleteEvent}
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
            <button onClick={() => { this.loadEvent() }} >
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


    //create Event
    changeCrEventModel(edit: any) {
        this.setState(prevState => ({ crEvent: edit.updated_src }));
    }
    private createEvent(eventSample: any, resp: any) {
        return <div>
            <p>Create event</p>
            <ReactJson src={this.state.crEvent} onEdit={this.changeCrEventModel} theme="monokai" />
            <span>Type POST</span> <span>/api/Event/</span>

            <button onClick={this.createEventResp} >
                Create Event
                   </button>
            <br />
            <ReactJson src={resp} theme="monokai" />
        </div>;
    }

    //update Event
    changeUpdEventModel(edit: any) {
        this.setState(prevState => ({ updEvent: edit.updated_src }));
    }
    private updateEvent(resp: any) {
        return <div>
            <p>Update event</p>
            Put Event Id for update it  <input
                type="text"
                value={this.state.eventId}
                onChange={this.changeEventId} />
            <button onClick={() => { this.loadEvent(true) }} >
                Get event
                   </button>

            <ReactJson src={this.state.updEvent} onEdit={this.changeUpdEventModel} theme="monokai" />
            <span>Type PUT</span> <span>/api/Event/</span>

            <button onClick={this.updateEventResp} >
                Update Event
                   </button>
            <br />
            <ReactJson src={resp} theme="monokai" />
        </div>;
    }

    //delete event
    
    private deleteEvent() {
        return <div>
                   <p>Delete event</p>
                   <span>Type DELETE</span>  <span>/api/Event/</span>  <input
                                                 type="text"
                                                 value={this.state.eventId}
                                                 onChange={this.changeEventId} />
            <button onClick={this.deleteEventReq} >
                       Delete Event
                   </button>
                   <br />
            <ReactJson src={this.state.deleteEvent} theme="monokai" />
               </div>;
    }
}

