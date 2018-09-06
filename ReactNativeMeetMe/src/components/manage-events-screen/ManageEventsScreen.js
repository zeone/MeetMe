import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Header from './Header';
import ManageEventsTabs from './ManageEventsTabs';
import ManageEventsTabYouGo from './ManageEventsTabYouGo';
import ManageEventsTabRequests from './ManageEventsTabRequests';

const tabYouGoId = 'YouGo';
const tabRequestsId = 'Requests';

class ManageEventsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: tabYouGoId
        }
    }

    handleActiveTabChange = (tabId) => {
        this.setState({
            ...this.state,
            activeTab: tabId
        });
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header/>
                <ScrollView>
                    <ManageEventsTabs 
                        handleActiveTabChange={this.handleActiveTabChange}
                        tabYouGoId={tabYouGoId}
                        tabRequestsId={tabRequestsId}
                        activeTab={this.state.activeTab} />
                    {this.state.activeTab === tabYouGoId ? 
                        <ManageEventsTabYouGo navigation={this.props.navigation}/>
                        :
                        <ManageEventsTabRequests navigation={this.props.navigation}/>
                    }
                </ScrollView>   
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    }
}

export default ManageEventsScreen;