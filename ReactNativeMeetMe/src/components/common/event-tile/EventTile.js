import React, {Component} from 'react';
import {View} from 'react-native';
import EventMainInfo from './EventTileMainInfo';
import EventTileJoinBtn from './EventTileJoinBtn';
import EventTileRemoveBtn from './EventTileRemoveBtn';
import EventTileEditBtn from './EventTileEditBtn';
import EventTileMembersCounter from './EventTileMembersCounter';
import ProfileBtn from '../ProfileBtn';
import EventTileTags from './EventTileTags';
import Button from '../Button';

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
        const {canJoin, canRemove, canEdit} = this.props;
        return (
            <Button onPress={this.onTilePress} style={styles.tileContainerStyle}>
                <ProfileBtn onPress={this.onProfileBtnPress}/>
                <View style={{flex: 1}}>
                    <View style={styles.topInfoContainerStyle}>
                        <EventMainInfo/>
                        <View style={styles.sideContainerView}>
                            <EventTileMembersCounter/>
                            {canJoin && <EventTileJoinBtn/>}
                            {canRemove && <EventTileRemoveBtn/>}
                            {canEdit && <EventTileEditBtn/>}
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