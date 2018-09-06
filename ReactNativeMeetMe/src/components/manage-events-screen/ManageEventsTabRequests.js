import React from 'react';
import { View } from 'react-native';
import EventTile from '../common/event-tile/EventTile';

const ManageEventsTabRequests = ({navigation}) => {
    return (
            <View style={styles.tilesContainerStyle}>
                <EventTile navigation={navigation} canRemove={true}></EventTile>
                <EventTile navigation={navigation} canRemove={true}></EventTile>
                <EventTile navigation={navigation} canRemove={true}></EventTile>
            </View>
    );
}

const styles = {
    tilesContainerStyle: {
        borderTopColor: '#faf3fc',
        borderTopWidth: 1,
        marginBottom: 20
    }
};

export default ManageEventsTabRequests;