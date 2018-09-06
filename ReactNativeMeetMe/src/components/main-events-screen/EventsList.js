import React, { Component } from 'react';
import { View ,ScrollView, Animated } from 'react-native';
import EventTile from '../common/event-tile/EventTile';
import CreateEventActionButton from './CreateEventActionBtn';

const Events = [
    {
        id: 1,
        title: 'Поход в кино',
        location: '',
        time: '',
        tags: [
            {id: 1, title: 'ВЫПИТЬ/ПОТАНЦЕВАТЬ', color: '#E8B7FF'},
            {id: 2, title: 'ПРОГУЛКА', color: '#ffffe0'}
        ],
        maxParticipants: 2,
        participants: [
            {
                id: 2,
                imageUrl: 'user-profile-pic.png',
                name: 'Петр Иванов',
                badge: {
                    id: 1,
                    title: 'Дикий охотник',
                    imageUrl: ''
                }
            },
            {
                id: 3,
                imageUrl: 'user-profile-pic.png',
                name: 'Петр Петров',
                badge: {
                    id: 1,
                    title: 'Дикий охотник',
                    imageUrl: ''
                }
            },
            {
                id: 4,
                imageUrl: 'user-profile-pic.png',
                name: 'Иван Иванов',
                badge: {
                    id: 1,
                    title: 'Дикий охотник',
                    imageUrl: ''
                }
            }
        ],
        creator: {
            id: 1,
            imageUrl: 'user-profile-pic.png',
            name: 'Иван Петров',
            badge: {
                id: 1,
                title: 'Дикий охотник',
                imageUrl: ''
            }
        },
        description: 'Собираю группу людей на занятия по Fly-йоге. Завтра мастер-класс на котором вы все и узнаете. Жду всех!',

    }
];


class EventsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            offset: 0,
            scrollDirection: 'up',
            boolShowCreateEventButton: true
        }

        this.onScroll = this.onScroll.bind(this);
        this.renderEvents = this.renderEvents.bind(this);
    }

    onScroll(event) {
        let currentOffset = event.nativeEvent.contentOffset.y;
        let direction = currentOffset > this.state.offset ? 'down' : 'up';
        this.setState({offset: currentOffset, scrollDirection: direction});
    }

    renderEvents() {
        return Events.map( event => {
            return <EventTile key={event.id} navigation={this.props.navigation} event={event} canJoin={true}/>
        })
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <ScrollView onScroll={this.onScroll}>
                    {this.renderEvents()}
                </ScrollView>
                <CreateEventActionButton navigation={this.props.navigation} direction={this.state.scrollDirection}/>
            </View>
        );
    }
}

export default EventsList;