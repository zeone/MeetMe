import React, {Component} from 'react';
import { View, Text } from 'react-native';
import ProfileBtn from '../ProfileBtn';
import Button from '../Button';
import AcceptFriendBtn from './AcceptFriendBtn';
import RejectFriendBtn from './RejectFriendBtn';

class FriendTile extends Component {
    constructor(props) {
        super(props);

        this.onTilePress = this.onTilePress.bind(this);
    }

    onTilePress() {
        this.props.navigation.navigate('ProfileAsUserScreen');
    }

    render() {
        return (
            <Button onPress={this.onTilePress} style={styles.tileContainerStyle}>
                <ProfileBtn/>
                <View style={styles.infoWrapperStyle}>
                    <View style={styles.textContainerStyle}>
                        <Text style={styles.nameTextStyle}>Иван Петров</Text>
                        <Text style={styles.tagTextStyle}>Дикий охотник</Text>
                    </View>
                    <View style={styles.buttonsContainerStyle}>
                        <AcceptFriendBtn/>
                        <RejectFriendBtn/>
                    </View>
                </View>
            </Button>
        );
    }
}

const styles = {
    tileContainerStyle: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#faf3fc',
        justifyContent: 'space-between'
    },
    infoWrapperStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },
    textContainerStyle: {

    },
    nameTextStyle: {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: '#000'
    },
    tagTextStyle: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: '#808080',
        marginTop: 5
    },
    buttonsContainerStyle: {
        width: 62,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}

export default FriendTile;