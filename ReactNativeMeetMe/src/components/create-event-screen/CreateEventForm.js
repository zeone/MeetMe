import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import t from 'tcomb-form-native';
import RNGooglePlacePicker from 'react-native-google-place-picker';
import LocationPicker from './LocationPicker';


const Form = t.form.Form;
const EventForm = t.struct({
    
});

class CreateEventForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            location: {},
        };
    }

    onSelectLocation = () => {
        RNGooglePlacePicker.show((response) => {
            if (response.didCancel) {
                console.log('User cancelled GooglePlacePicker');
            }
            else if (response.error) {
                console.log('GooglePlacePicker Error: ', response.error);
            }
            else {
                this.setState({
                    location: response
                });
            }
        });
    }

    render() {
        return (
            <View>
                <LocationPicker onSelectLocation={this.onSelectLocation} locationString={location.address}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 14,
        marginBottom: 10
    },
    input: {
        height: 40,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 100
    },
    inputHalf: {

    },
    textArea: {
        height: 110,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dcdcdc'
    },
    radioButton: {

    }
});

export default CreateEventForm;