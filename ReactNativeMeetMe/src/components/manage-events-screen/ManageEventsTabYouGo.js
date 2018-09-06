import React from 'react';
import { View, Text } from 'react-native';
import EventTile from '../common/event-tile/EventTile';

const ManageEventsTabYouGo = ({navigation}) => {
    return (
        <View>
            <View style={styles.textContainerStyle}>
                <Text style={styles.textStyleLetters}>Созданые Вами :</Text>
            </View>
            <View style={styles.tilesContainerStyle}>
                <EventTile navigation={navigation} canEdit={true}></EventTile>
                <EventTile navigation={navigation} canEdit={true}></EventTile>
                <EventTile navigation={navigation} canEdit={true}></EventTile>
            </View>
            <View style={styles.textContainerStyle}>
                <Text style={styles.textStyleLetters}>Вы идете :</Text>
            </View>
            <View style={styles.tilesContainerStyle}>
                <EventTile navigation={navigation} canRemove={true}></EventTile>
                <EventTile navigation={navigation} canRemove={true}></EventTile>
                <EventTile navigation={navigation} canRemove={true}></EventTile>
            </View>
        </View>
        
    );
}

const styles = {
    textContainerStyle: {
        padding: 20,
        paddingTop: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyleLetters: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Roboto'
    },
    tilesContainerStyle: {
        borderTopColor: '#faf3fc',
        borderTopWidth: 1,
        marginBottom: 20
    }
};

export default ManageEventsTabYouGo;