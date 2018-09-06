import React from 'react';
import { View } from 'react-native';
import EventDetailHero from './EventDetailHero';
import EventDetailDescription from './EventDetailDescription';

const EventDetails = () => {
    return (
        <View>
            <EventDetailHero/>
            <EventDetailDescription/>
        </View>
    );
}

export default EventDetails;