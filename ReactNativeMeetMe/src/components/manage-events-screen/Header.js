import React from 'react';
import {View, Text, Alert, Platform} from 'react-native';
import Button from '../common/Button';
import Icon from '../common/Icon';

const Header = () => {
    return (
        <View style={styles.containerStyle}>
            <View style={styles.leftContainerStyle}>
                <Button style={styles.buttonStyle} onPress={()=>{Alert.alert('Search Button pressed')}}>
                    <Icon name="HeaderSearchIcon" height="15" width="14" />
                </Button>
            </View>
            <Text style={styles.textStyle}>Meet Me</Text>
            <View style={styles.rightContainerStyle}>
                <Button style={styles.buttonStyle} onPress={()=>{Alert.alert('Filters Button pressed')}}>
                    <Icon name="HeaderFiltersIcon" width="16" height="16"/>
                </Button>
            </View>
        </View>
    );
}

const styles = {
    containerStyle: {
        paddingTop: (Platform.OS === 'ios') ? 0 : Expo.Constants.statusBarHeight,
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#faf3fc',
        borderBottomWidth: 1
    },
    leftContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    rightContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Roboto'
    },
    buttonStyle: {
        width: 46,
        height: 46,
        padding: 15
    }
}

export default Header;