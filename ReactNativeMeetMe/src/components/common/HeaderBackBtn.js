import React from 'react';
import Button from './Button';
import Icon from './Icon';
import { Text } from 'react-native';

const HeaderBackBtn = ({onPress}) => {
    return (
        <Button style={styles.backButtonStyle} onPress={onPress}>
            <Icon name="BackIcon" height="19" width="10" />
            <Text style={styles.backTextStyle}>Назад</Text>
        </Button>
    );
}

const styles = {
    backTextStyle: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Roboto'
    },
    backButtonStyle: {
        width: 81,
        height: 46,
        padding: 15,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

export default HeaderBackBtn;