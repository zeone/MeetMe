import React, {Component} from 'react';
import {View, Text, Platform, StatusBar} from 'react-native';
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
                <View style={styles.rightContainerStyle} />
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
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 18,
        color: '#000',
        fontFamily: 'Roboto'
    }
}

export default Header;