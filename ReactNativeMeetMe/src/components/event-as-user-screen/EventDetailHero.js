import React from 'react';
import {View, Text, Image} from 'react-native';
import ProfileBtn from '../common/ProfileBtn';
import Icon from '../common/Icon';

const EventDetailHero = () => {
    return (
        <View style={styles.containerStyle}>
            <Image style={styles.backgroundImageStyle} source={require('../../assets/event-as-user-screen/Flyyoga.jpg')}/>
            <View style={styles.backgroundOverlayStyle}></View>
            <View style={styles.contentContainerStyle}>
                <ProfileBtn style={styles.profileBtnStyle}/>
                <View>
                    <Text style={styles.titleStyle}>Fly - Йога</Text>
                    <View style={{marginBottom: 5, ...styles.rowStyle}}>
                        <Icon name="EventTileLocationIcon" width="9" height="9" fill="#fff" style={styles.iconStyle}/>
                        <Text style={styles.textStyle}>Киев, Метро Шулявка</Text>
                    </View>
                    <View style={styles.rowStyle}>
                        <Icon name="EventTileTimeIcon" width="9" height="9" fill="#fff" style={styles.iconStyle}/>
                        <Text style={styles.textStyle}>12 Апреля в 18 : 00 - 23:00</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = {
    containerStyle: {
        position: 'relative',
        flex: 1,
        overflow: 'hidden',
        height: 100
    },
    contentContainerStyle: {
        padding: 20,
        paddingTop: 24,
        flex: 1,
        flexDirection: 'row',
    },
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
        color: '#fff',
        fontFamily: 'Roboto'
    },
    titleStyle: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 7,
        fontFamily: 'Roboto'
    },
    backgroundContainerStyle: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%'
    },
    backgroundImageStyle: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    backgroundOverlayStyle: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, .6)'
    },
    profileBtnStyle: {
        marginRight: 20
    }
}

export default EventDetailHero;