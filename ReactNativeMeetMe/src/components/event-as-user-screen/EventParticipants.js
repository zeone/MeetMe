import React from 'react';
import { View, Text } from 'react-native';
import EventParticipantTile from './EventParticipantTile';

const EventParticipants = () => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.textContainerStyle}>
                <Text style={styles.textStyle}>Учасники</Text>
                <Text style={styles.amountTextStyle}>6</Text>
            </View>
            <View style={styles.participantsContainerStyle}>
                <EventParticipantTile/>
                <EventParticipantTile/>
                <EventParticipantTile/>
                <EventParticipantTile/>
                <EventParticipantTile/>
                <EventParticipantTile/>
            </View>
        </View>
    );
}

const styles = {
    containerStyle: {
        backgroundColor: '#FCFCFC',
        flex: 1
    },
    textContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },
    textStyle: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Roboto'
    },
    amountTextStyle: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Roboto'
    },
    participantsContainerStyle: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#faf3fc'
    }
}

export default EventParticipants;