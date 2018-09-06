import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import Header from './HeaderStep1';
import Button from '../common/Button';
import Icon from '../common/Icon';
import CreateCategory from '../common/CreateCategory';

class CreateEventScreenStep1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    static navigationOptions = {
        tabBarVisible: false
    }

    goToStep2 = () => {
        this.props.navigation.navigate('CreateEventStep2');
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header navigation={this.props.navigation}/>
                <View style={styles.categoriesTitleContainerStyle}>
                    <Text style={styles.categoriesTitleTextStyle}>КУДА ПОЙДЕМ ?</Text>
                </View>
                <ScrollView style={styles.categoriesWrapperStyle}>
                    <CreateCategory categName="Выпить/потанцевать"/>
                    <CreateCategory categName="Прогулка"/>
                    <CreateCategory categName="Кальян"/>
                    <CreateCategory categName="Спорт"/>
                    <CreateCategory categName="Мероприятие"/>
                    <CreateCategory categName="Другое"/>
                </ScrollView>
                <Button onPress={this.goToStep2} style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>Далее</Text><Icon name="NextArrowIcon" width="14" height="10" fill="#fff" />
                </Button>
            </View>        
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    categoriesTitleContainerStyle: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 20,
        backgroundColor: '#F4F4F4'
    },
    categoriesTitleTextStyle: {
        fontSize: 12,
        fontFamily: 'Roboto',
        color: '#C5C2C2'
    },
    categoriesWrapperStyle: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 60,
        backgroundColor: '#9216CD'
    },
    textStyle: {
        fontSize: 18,
        fontFamily: 'Roboto',
        color: '#fff',
        marginRight: 10
    }
})

export default CreateEventScreenStep1;