import React from 'react';
import {Alert} from 'react-native';
import Button from '../Button';
import Icon from '../Icon';

const EventTileEditBtn = () => {
    return(
        <Button onPress={() => {Alert.alert('Edit event button pressed')}} style={styles.buttonStyle}>
            <Icon name="SettingsBtnIcon" width="25" height="25" fill="#202CAA"/>
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

export default EventTileEditBtn;