import React from 'react';
import {View, Text, Image} from 'react-native';

const ProfileMainInfo = () => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.imageContainerStyle}>
                <Image source={require('../../assets/profile-as-user-screen/profile-80.jpg')} style={styles.imageStyle}/>
            </View>
            <Text style={styles.nameTitleStyle}>Богдан Паладийчук</Text>
            <Text style={styles.tagTitleStyle}>Путешественник во времени</Text>
        </View>
    );
}

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#fff',
        paddingBottom: 20
    },
    imageContainerStyle: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        marginBottom: 10,
        overflow: 'hidden'
    },
    imageStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    nameTitleStyle: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: '#000',
        marginBottom: 5
    },
    tagTitleStyle: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: 'rgba(0, 0, 0, .5)'
    }
};

export default ProfileMainInfo;