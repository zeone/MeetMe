import React from 'react';
import { View, ScrollView } from 'react-native';
import Header from './Header';
import Footer from '../common/Footer';
import EventDetails from './EventDetails';
import EventParticipants from './EventParticipants';

const EventAsUserScreen = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Header navigation={props.navigation}/>
            <ScrollView>
                <EventDetails/>
                <EventParticipants/>
            </ScrollView>
        </View>
    );
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}

export default EventAsUserScreen;