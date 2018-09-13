import React, {Component} from 'react';
import {View, Text, Image, Alert, Platform, StatusBar} from 'react-native';
import Button from '../common/Button';
import Icon from '../common/Icon';
import HeaderBackBtn from '../common/HeaderBackBtn';

class Header extends Component {
    constructor(props) {
        super(props);

        this.onBackPress = this.onBackPress.bind(this);
    }

    onBackPress() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.leftContainerStyle}>
                    <HeaderBackBtn onPress={this.onBackPress} />
                </View>
                <Text style={styles.textStyle}>Meet Me</Text>
                <View style={styles.rightContainerStyle}>
                    <Button style={styles.addButtonStyle} onPress={()=>{Alert.alert('Add Button pressed')}}>
                        <Text style={styles.addButtonTextStyle}>+ Добавить</Text>
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
    addButtonStyle: {
        width: 95,
        height: 20,
        borderColor: '#9216CD',
        borderWidth: 1,
        borderRadius: 20 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonTextStyle: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#9216CD'
    }
}

export default Header;