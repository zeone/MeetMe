import React, { Component } from 'react';
import { View } from 'react-native';
import ManageEventsTab from './ManageEventsTab';

const ManageEventsTabs = ({handleActiveTabChange, tabYouGoId, tabRequestsId, activeTab}) => {
    return (
        <View style={styles.containerStyle}>
            <ManageEventsTab handleActiveTabChange={handleActiveTabChange} id={tabYouGoId} text="Вы идете" isActive={activeTab === tabYouGoId}/>
            <ManageEventsTab handleActiveTabChange={handleActiveTabChange} id={tabRequestsId} text="Запросы" isActive={activeTab === tabRequestsId}/>
        </View>
    );
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        justifyContent: 'center',
        marginBottom: 20
    }
}

export default ManageEventsTabs;