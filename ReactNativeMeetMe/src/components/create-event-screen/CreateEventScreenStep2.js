import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CreateEventForm from './CreateEventForm';
import Header from './HeaderStep2';

class CreateEventScreenStep2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <Header navigation={this.props.navigation}/>
                <ScrollView>
                    <CreateEventForm />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default CreateEventScreenStep2;