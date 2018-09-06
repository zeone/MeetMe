import React from 'react';
import Button from './Button';
import { Image } from 'react-native';

const ProfileBtn = ({style, onPress}) => {
    return(
        <Button style={[styles.profileBtnStyle, style]} onPress={onPress}>
            <Image source={require('../../assets/main-events-screen/user-profile-pic.png')} style={styles.profilePicStyle}></Image>
        </Button>
    );
}

const styles = {
    profileBtnStyle: {
        width: 55,
        height: 55,
        borderRadius: 55 / 2,
        overflow: 'hidden',
        marginRight: 10
    },
    profilePicStyle: {
        width: 55,
        height: 55
    }
}

export default ProfileBtn;