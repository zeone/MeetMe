import React from 'react';
import { View, Text } from 'react-native';
import Icon from '../Icon';

const EventTileMembersCounter = () => {
    return(
        <View style={styles.rowStyle}>
            <Icon name="EventTileUserIcon" width="7" height="9" style={styles.iconStyle} />
            <Text style={styles.textStyle}>0/2</Text>
        </View>
    );
}

const styles = {
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    iconStyle: {
        marginRight: 5
    },
    textStyle: {
        fontSize: 10,
        color: '#808080',
        fontFamily: 'Roboto'
    }
}

export default EventTileMembersCounter;