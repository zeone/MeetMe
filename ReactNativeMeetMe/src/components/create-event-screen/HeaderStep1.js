import React, {Component} from 'react';
import {View, Text, Platform, StatusBar} from 'react-native';
import Button from '../common/Button';
import Icon from '../common/Icon';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    onClose = () => {
        this.props.navigation.navigate('MainEvents');
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.leftContainerStyle}>
                    <Text style={styles.textStyle} onPress={this.onBackPress}>Создание ивента</Text>
                </View>
                <View style={styles.rightContainerStyle}>
                    <Button style={styles.joinButtonStyle} onPress={this.onClose}>
                        <Icon name="CloseCrossIcon" width="20" height="20" fill="#9216CD"/>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        paddingTop: 0 /*(Platform.OS === 'ios') ? 0 : StatusBar.currentHeight*/,
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#faf3fc',
        borderBottomWidth: 1,
        position: 'relative',
        height: 65
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
        paddingLeft: 20,
        fontSize: 18,
        color: '#000',
        fontFamily: 'Roboto'
    },
    joinButtonStyle: {
        width: 40,
        height: 40,
        padding: 10
    }
}

export default Header;