import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Button from '../common/Button';


const ManageEventsTab = ({text, isActive, id, handleActiveTabChange}) => {
    return (
        <Button onPress={() => {handleActiveTabChange(id)}} style={[styles.buttonStyle, isActive && styles.activeTabStyle]}>
            <Text style={[styles.textStyle, isActive && styles.activeTextStyle]}>{text}</Text>
        </Button>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 140,
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1
    },
    textStyle: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#000'
    },
    activeTabStyle: {
        borderBottomColor: '#9216CD',
        borderBottomWidth: 3
    },
    activeTextStyle: {
        color: '#9216CD'
    }
})

export default ManageEventsTab;