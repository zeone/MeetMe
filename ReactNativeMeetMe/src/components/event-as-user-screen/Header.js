import React, {Component} from 'react';
import {View, Text, Image, Alert, Platform} from 'react-native';
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
                    <Button style={styles.joinButtonStyle} onPress={()=>{Alert.alert('Join Button pressed')}}>
                        <Icon name="EventTileJoinBtnIcon" width="25" height="25" fill="#9216CD"/>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        paddingTop: (Platform.OS === 'ios') ? 0 : Expo.Constants.statusBarHeight,
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
    },
    joinButtonStyle: {
        width: 46,
        height: 46,
        padding: 10
    }
}

export default Header;