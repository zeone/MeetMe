import React, {Component} from 'react';
import {View, Text, Image, Alert, Platform, StatusBar} from 'react-native';
import Button from '../common/Button';
import Icon from '../common/Icon';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.leftContainerStyle}/>
                <Text style={styles.textStyle}>Meet Me</Text>
                <View style={styles.rightContainerStyle}>
                    <Button style={styles.editButtonStyle} onPress={()=>{Alert.alert('Edit profile Button pressed')}}>
                        <Icon name="EditProfileIcon" height="20" width="20" fill="#000"></Icon>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        paddingTop: 0/*(Platform.OS === 'ios') ? 0 : StatusBar.currentHeight*/,
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#faf3fc',
        borderBottomWidth: 1,
        position: 'relative'
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
        alignItems: 'center',
        paddingRight: 10
    },
    textStyle: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Roboto'
    },
    editButtonStyle: {
        width: 45,
        height: 45,
        padding: 12.5,
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default Header;