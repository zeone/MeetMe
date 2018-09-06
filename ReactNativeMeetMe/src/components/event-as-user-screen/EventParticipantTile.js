import React, {Component} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import Button from '../common/Button';

class EventParticipantTile extends Component {
    render() {
        return (
            <Button style={styles.containerStyle} onPress={() => {Alert.alert('Participant button pressed')}}>
                <View style={styles.imageContainerStyle}>
                    <Image source={require('../../assets/main-events-screen/user-profile-pic.png')} style={styles.imageStyle}/>
                </View>
                <View style={styles.textContainerStyle}>
                    <Text style={styles.bigTextStyle}>Иван Петров</Text>
                    <Text style={styles.smallTextStyle}>Дикий охотник</Text>
                </View>
            </Button>
        );
    }
}

const styles = {
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#faf3fc',
        borderTopWidth: 0
    },
    imageContainerStyle: {
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        overflow: 'hidden',
        marginRight: 10
    },
    imageStyle: {
        width: 55,
        height: 55,
    },
    textContainerStyle: {
        flex: 1
    },
    bigTextStyle: {
        fontSize: 14,
        fontFamily: 'Roboto',
        marginBottom: 5,
        color: '#000'
    },
    smallTextStyle: {
        fontSize: 12,
        fontFamily: 'Roboto',
        color: 'rgba(0, 0, 0, 0.5)'
    }
}

export default EventParticipantTile;