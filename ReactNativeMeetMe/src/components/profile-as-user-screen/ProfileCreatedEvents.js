import React, {Component} from 'react';
import {View, Text} from 'react-native';
import EventTile from '../common/event-tile/EventTile';

class ProfileCreatedEvents extends Component {
    constructor(props) {
        super(props);

        this.renderCreatedEvents = this.renderCreatedEvents.bind(this);
    }

    renderCreatedEvents() {
        return (
            <View style={styles.eventsContainerStyle}>
                <EventTile/>
                <EventTile/>
                <EventTile/>
            </View>
        );
    }

    render() {
        return(
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>Созданые ивенты :</Text>
                {this.renderCreatedEvents()}
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: '#fff',
        marginBottom: 20
    },
    textStyle: {
        fontFamily: 'Roboto',
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    eventsContainerStyle: {
        borderTopWidth: 1,
        borderTopColor: '#faf3fc'
    }
};

export default ProfileCreatedEvents;