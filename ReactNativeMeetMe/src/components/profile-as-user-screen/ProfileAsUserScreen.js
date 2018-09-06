import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import Button from '../common/Button';
import Header from './Header';
import Footer from '../common/Footer';
import ProfileCreatedEvents from './ProfileCreatedEvents';
import ProfileMainInfo from './ProfileMainInfo';
import ProfileGallery from './ProfileGallery';

const ProfileAsUserScreen = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Header navigation={props.navigation}/>
            <ScrollView>
                <ProfileMainInfo/>
                <ProfileCreatedEvents />
                <ProfileGallery/>
                <View style={styles.dividerStyle}/>
                <Button style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Друзей</Text>
                    <Text style={styles.textStyle}>99</Text>
                </Button>
            </ScrollView>
        </View>
    );
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#fff'
    },
    dividerStyle: {
        margin: 20,
        marginBottom: 0,
        marginTop: 0,
        height: 1,
        flex: 1,
        backgroundColor: '#faf3fc'
    },
    buttonStyle: {
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Roboto'
    }
};

export default ProfileAsUserScreen;