import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import EventsList from './EventsList';

class MainEventsScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header/>
                <EventsList navigation={this.props.navigation}/>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}

export default MainEventsScreen;