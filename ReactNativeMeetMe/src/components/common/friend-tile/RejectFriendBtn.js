import React from 'react';
import {Alert} from 'react-native';
import Button from '../Button';
import Icon from '../Icon';

const RejectFriendBtn = () => {
    return(
        <Button onPress={() => {Alert.alert('Reject friend button pressed')}} style={styles.buttonStyle}>
            <Icon name="RejectButton" width="21" height="21" fill="#E94A09"/>
        </Button>
    );
}

const styles = {
    buttonStyle: {
        width: 26,
        height: 26,
        padding: 5,
        justifyContent: 'center',
        alignContent: 'center'
    }
}

export default RejectFriendBtn;