import React, { Component } from 'react'
import { View, TextInput, Alert } from 'react-native';
import Button from '../common/Button';
import Icon from '../common/Icon';

class FriendsSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={styles.wrapperStyle}>
                    <TextInput
                        placeholder={'Поиск пользователей'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
                        underlineColorAndroid={'transparent'}
                        style={styles.textInputStyle}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Button style={styles.buttonStyle} onPress={() => {Alert.alert('Search button pressed')}}>
                        <Icon name="FriendsSearchIcon" width="20" hieght="20" fill="#b3b3b3"></Icon>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        padding: 20,
        paddingBottom: 0,
        marginBottom: 30
    },
    wrapperStyle: {
        position: 'relative',
        flex: 1
    },
    textInputStyle: {
        borderColor: 'gray',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        paddingTop: 10,
        paddingBottom: 10,
        color: '#000',
        fontSize: 14,
        lineHeight: 16
    },
    buttonStyle: {
        width: 36,
        height: 36,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 2,
        bottom: 2,
        right: -8
    }
}

export default FriendsSearch;