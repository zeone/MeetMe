import React from 'react';
import MainEventsScreen from '../main-events-screen/MainEventsScreen';
import EventAsUserScreen from '../event-as-user-screen/EventAsUserScreen';
import ProfileAsUserScreen from '../profile-as-user-screen/ProfileAsUserScreen';
import ProfileAsAuthorScreen from '../profile-as-author-screen/ProfileAsAuthorScreen';
import FriendsAsAuthorScreen from '../friends-as-author-screen/FriendsAsAuthorScreen';
import ManageEventsScreen from '../manage-events-screen/ManageEventsScreen';
import CreateEventScreenStep1 from '../create-event-screen/CreateEventScreenStep1';
import CreateEventScreenStep2 from '../create-event-screen/CreateEventScreenStep2';

import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from '../common/Icon';

const CreateEventStack = createStackNavigator(
    {
        CreateEvent: CreateEventScreenStep1,
        CreateEventStep2:CreateEventScreenStep2,
        MainEvents: MainEventsScreen 
    },
    {
        initialRouteName: 'CreateEvent',
        headerMode: 'none'
    }
);

const MainEventsStack = createStackNavigator(
    {
        MainEvents: MainEventsScreen,
        EventAsUserScreen: EventAsUserScreen,
        ProfileAsUserScreen: ProfileAsUserScreen,
        CreateEvent: CreateEventStack
    },
    {
        initialRouteName: 'MainEvents',
        headerMode: 'none'
    }
);

const ManageEventsStack = createStackNavigator(
    {
        ManageEvents: ManageEventsScreen,
        EventAsUserScreen: EventAsUserScreen,
        ProfileAsUserScreen: ProfileAsUserScreen
    },
    {
        initialRouteName: 'ManageEvents',
        headerMode: 'none'
    }
);

const ProfileStack = createStackNavigator(
    {
        Profile: ProfileAsAuthorScreen,
        Friends: FriendsAsAuthorScreen,
        ProfileAsUserScreen: ProfileAsUserScreen
    },
    {
        initialRouteName: 'Profile',
        headerMode: 'none'
    }
);

export default createBottomTabNavigator(
    {
        MainEvents: MainEventsStack,
        ManageEvents: ManageEventsStack,
        Profile: ProfileStack
    },
    {
        initialRouteName: 'MainEvents',
        navigationOptions: ({ navigation }) => ({
           tabBarIcon: ({focused, tintColor}) => {
               const {routeName} = navigation.state;
               let iconName;
               if (routeName === 'MainEvents') {
                   iconName = 'FooterHomeIcon';
               } else if (routeName === 'ManageEvents') {
                   iconName = 'FooterStarIcon';
               } else if (routeName === 'Profile') {
                   iconName = 'FooterProfileIcon';
               }

               return (
                   <Icon name={iconName} height="25" width="24" fill={tintColor}/>
               );
           }
        }),
        tabBarOptions: {
            activeTintColor: '#9216CD',
            inactiveTintColor: '#000',
            showLabel: false,
            style: {
                height: 55,
                paddingLeft: 30,
                paddingRight: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f9f9f9',
                borderTopColor: '#faf3fc',
                borderTopWidth: 1
            },
            tabStyle: {
                flex: 0,
                width: 46,
                height: 46,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }
        },
    }
);