import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import t from 'tcomb-form-native';
import LocationPicker from './LocationPicker';
import RNGooglePlaces from 'react-native-google-places';

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

const Form = t.form.Form;

const Prefer = t.enums({
    M: 'Парень',
    F: 'Девушка',
    A: 'Не важно'
})

const EventForm = t.struct({
    eventStart: t.Date,
    eventEnd: t.Date,
    eventName: t.String,
    eventDescription: t.maybe(t.String),
    prefer: Prefer
});

const formOptions = {
    required: '',
    fields: {
        eventStart: {
            placeholder: 'Начало',
            mode: 'date',
            config: {
                format: (date) => moment(date).format('YYYY-mm-d'),
            },
            stylesheet: styles.input
        },
        eventEnd: {
            placeholder: 'Конец',
            mode: 'date',
            config: {
                format: (date) => moment(date).format('YYYY-mm-d'),
            },
            stylesheet: styles.input
        },
        eventName: {
            label: 'Введите название',
            stylesheet: styles.input
        },
        eventDescription: {
            label: 'Введите описание',
            type: 'textarea',
            stylesheet: styles.textArea
        }
    }
}

class CreateEventForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            location: {
                address: 'asdf'
            },
        };
    }

    onSelectLocation = () => {
        RNGooglePlaces.openPlacePickerModal()
            .then((place) => {
                console.log(place);
            })
            .catch(error => console.log(error.message));
    }

    render() {
        const {location} = this.state;
        return (
            <View style={styles.container}>
                <LocationPicker 
                    onSelectLocation={this.onSelectLocation} 
                    locationString={location.address}
                />
                <Form
                    ref="form"
                    type={EventForm}
                    options={formOptions}
                />
            </View>
        );
    }
}

export default CreateEventForm;