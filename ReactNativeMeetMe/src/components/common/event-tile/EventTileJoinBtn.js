import React from 'react';
import {Alert} from 'react-native';
import Button from '../Button';
import Icon from '../Icon';

const EventTileInfoJoinBtn = () => {
    return(
        <Button onPress={() => {Alert.alert('Join event button pressed')}} style={styles.buttonStyle}>
            <Icon name="EventTileJoinBtnIcon" width="25" height="25" fill="#9216CD" />
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

export default EventTileInfoJoinBtn;