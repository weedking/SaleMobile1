import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView, Navigator,} from 'react-native';
import {Accordion, Button, List, Icon, SearchBar, TabBar, WhiteSpace} from 'antd-mobile-rn';
import MyGrid from "../js/MyGrid";
import CRM from "../js/CRM";
import Work from "./Work";

class MyFrame extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
        };
    }
    renderContent(pageText) {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <SearchBar placeholder="Search"  showCancelButton />
                <Text style={{ margin: 50 }}>{pageText}</Text>

            </View>
        );
    }

    renderCRMContent(pageText) {
        return (

        <CRM/>
        );
    }
    renderWorkContent(pageText) {
        return (

         <Work/>
        );
    }

    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }

    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#f5f5f5"
            >
                <TabBar.Item
                    title="工作"
                    // icon={<Icon name="home" />}
                    icon={require('../img/work1.png')}
                    // blueTab
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => this.onChangeTab('blueTab')}
                >
                    {this.renderWorkContent('工作')}
                </TabBar.Item>
                <TabBar.Item
                    // icon={<Icon name="ordered-list" />}
                    icon={require('../img/crm.png')}
                    title="CRM"
                    badge={2}
                    // redTab
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => this.onChangeTab('redTab')}
                >
                    {this.renderCRMContent('CRM')}
                </TabBar.Item>

                <TabBar.Item
                    // icon={<Icon name="user" />}
                    icon={require('../img/me.png')}
                    title="我的"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => this.onChangeTab('yellowTab')}
                >
                    {this.renderContent('我的')}
                </TabBar.Item>
            </TabBar>
        );
    }

}

export default MyFrame;