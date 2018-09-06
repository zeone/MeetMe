import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import EventMainInfo from './EventMainInfo';
import EventTileJoinBtn from './EventTileJoinBtn';
import EventTileMembersCounter from './EventTileMembersCounter';
import ProfileBtn from '../ProfileBtn';
import EventTileTags from './EventTileTags';
import Button from '../common/Button';

class EventTile extends Component {
    constructor(props) {
        super(props);

        this.onTilePress = this.onTilePress.bind(this);
        this.onProfileBtnPress = this.onProfileBtnPress.bind(this);
    }

    onTilePress() {
        this.props.navigation.navigate('EventAsUserScreen');
    }

    onProfileBtnPress() {
        this.props.navigation.navigate('ProfileAsUserScreen');
    }

    render() {
        return (
            <Button onPress={this.onTilePress} style={styles.tileContainerStyle}>
                <ProfileBtn/>
                <View style={{flex: 1}}>
                    <View style={styles.topInfoContainerStyle}>
                        <EventMainInfo/>
                        <View style={styles.sideContainerView}>
                            <EventTileMembersCounter/>
                            <EventTileJoinBtn/>
                        </View>
                    </View>
                    <EventTileTags/>
                </View>
            </Button>
        );
    }
}

const styles = {
    tileContainerStyle: {
        flexDirection: 'row',
        padding: 10,
        paddingRight: 0,
        borderBottomWidth: 1,
        borderColor: '#faf3fc',
        alignItems: 'center'
    },
    topInfoContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    sideContainerView: {
        alignItems: 'center'
    }
}

export default EventTile;