import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Button from './Button';

const CreateCategory = ({categName, onPress}) => {
    return (
        <Button style={styles.buttonStyle} onPress={onPress}>
            <Text style={styles.textStyle}>{categName}</Text>
        </Button>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: 'stretch'
    },
    textStyle: {
        padding: 10,
        paddingLeft: 20,
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#000'
    }
})

export default CreateCategory;