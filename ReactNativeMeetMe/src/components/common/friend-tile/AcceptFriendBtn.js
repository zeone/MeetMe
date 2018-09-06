import React from 'react';
import {Alert} from 'react-native';
import Button from '../Button';
import Icon from '../Icon';

const AcceptFriendBtn = () => {
    return(
        <Button onPress={() => {Alert.alert('Accept friend button pressed')}} style={styles.buttonStyle}>
            <Icon name="AcceptButton" width="21" height="21" fill="#9216CD"/>
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

export default AcceptFriendBtn;