import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import EventsList from './EventsList';
import axios from 'axios';

class MainEventsScreen extends Component {
    constructor(props) {
        super(props);
    }

    fetchEvents = () => {
        console.log(111);
        axios.get('http://127.0.0.1/api/event/Events?index=1&pageSize=10')
            .then(res => {
                console.log(121);
                return res.json()
            })
            .then(res => {
                console.log(222);
                console.log(res);
            })
            .catch(err => {
                console.log(333)
                console.log(err);
            });
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header onFiltersClick={this.fetchEvents}/>
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