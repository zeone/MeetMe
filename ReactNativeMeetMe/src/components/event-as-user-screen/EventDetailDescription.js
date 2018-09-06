import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../common/Icon';

const EventDetailDescription = () => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>Описание события</Text>
            <Text style={styles.descriptionTextStyle}>Собираю группу людей на занятия по Fly-йоге. Завтра мастер-класс на котором вы все и узнаете. Жду всех!</Text>
            <Text style={styles.titleStyle}>Дополнительно :</Text>
            <View style={styles.badgesContainerStyle}>
                <View style={styles.badgeStyle}>
                    <Icon name="MoneyBagIcon" width="17" height="19" fill="#9216CD" style={styles.iconStyle}/>
                    <Text style={styles.badgeTextStyle}>Бесплатно</Text>
                </View>
                <View style={styles.badgeStyle}>
                    <Icon name="AnyGenderIcon" width="17" height="19" fill="#9216CD" style={styles.iconStyle}/>
                    <Text style={styles.badgeTextStyle}>Любой пол</Text>
                </View>
            </View>
        </View>
    );
}

const styles = {
    containerStyle: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    titleStyle: {
        fontSize: 18,
        marginBottom: 10,
        color: '#000',
        fontFamily: 'Roboto'
    },
    descriptionTextStyle: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Roboto',
        marginBottom: 20
    },
    badgesContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    iconStyle: {
        marginRight: 10,
        width: 17,
        height: 19
    },
    badgeTextStyle: {
        color: '#9216CD',
        fontSize: 14
    },
    badgeStyle: {
        flexDirection: 'row',
        marginRight: 40,
        alignContent: 'center',
        marginBottom: 10
    }
}

export default EventDetailDescription;