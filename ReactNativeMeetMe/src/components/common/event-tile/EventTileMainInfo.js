import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../Icon';

const EventMainInfo = () => {
    return(
        <View>
            <Text style={styles.titleStyle}>Поход в кино</Text>
            <View style={{marginBottom: 5, ...styles.rowStyle}}>
                <Icon name="EventTileLocationIcon" width="9" height="9" fill="#000" fill-opacity="0.6" style={styles.iconStyle}/>
                <Text style={styles.textStyle}>Киев, Святошинский р-н</Text>
            </View>
            <View style={styles.rowStyle}>
                <Icon name="EventTileTimeIcon" width="9" height="9" fill="#000" fill-opacity="0.6" style={styles.iconStyle}/>
                <Text style={styles.textStyle}>12 Апреля в 18 : 00 - 23:00</Text>
            </View>
        </View>
    );
}

const styles = {
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle: {
        marginRight: 5
    },
    textStyle: {
        fontSize: 12,
        lineHeight: 14,
        color: '#808080',
        fontFamily: 'Roboto'
    },
    titleStyle: {
        fontSize: 14,
        color: '#000',
        marginBottom: 7,
        fontFamily: 'Roboto'
    }
}

export default EventMainInfo;