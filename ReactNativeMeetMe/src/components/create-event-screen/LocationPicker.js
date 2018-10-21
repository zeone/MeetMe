import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../common/Button';

const LocationPicker = ({locationString, onSelectLocation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Укажите желаемое место встречи:</Text>
            <Button styles={styles.locationPicker} onPress={onSelectLocation}>
                <Text>{locationString}</Text>
            </Button> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    locationPicker: {
        height: 40,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 100
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 14,
        marginBottom: 10
    },
})

export default LocationPicker;