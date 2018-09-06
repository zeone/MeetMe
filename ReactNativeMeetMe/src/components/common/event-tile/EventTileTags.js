import React from 'react';
import {Text, View} from 'react-native';

const EventTileTags = () => {
    return (
        <View>
            <Text style={styles.textStyle}>ВЫПИТЬ/ПОТАНЦЕВАТЬ</Text>
        </View>
    );
}

const styles = {
    textStyle: {
        fontSize: 8,
        color: '#000',
        lineHeight: 15,
        paddingRight: 8,
        paddingLeft: 8,
        borderRadius: 15 / 2,
        backgroundColor: '#E8B7FF',
        alignSelf: 'flex-start',
        fontFamily: 'Roboto'
    }
}

export default EventTileTags;