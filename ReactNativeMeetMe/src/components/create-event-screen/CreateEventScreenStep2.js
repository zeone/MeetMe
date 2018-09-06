import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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