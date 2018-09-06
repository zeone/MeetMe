import React from 'react';
import {Alert} from 'react-native';
import Button from '../Button';
import Icon from '../Icon';

const EventTileRemoveBtn = () => {
    return(
        <Button onPress={() => {Alert.alert('Remove event button pressed')}} style={styles.buttonStyle}>
            <Icon name="RejectButton" width="25" height="25" fill="#E94A09"/>
        </Button>
    );
}

const styles = {
    buttonStyle: {
        width: 45,
        height: 45,
        padding: 10
    }
}

export default EventTileRemoveBtn;