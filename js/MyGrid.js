import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView, Navigator,} from 'react-native';
import {Grid, SearchBar, TabBar, WhiteSpace} from 'antd-mobile-rn';


const data = [{
    icon: '../img/work1.png',
    text: '客户',
    index: 1
}, {
    icon: '../img/work1.png',
    text: 'CRM提醒',
    index: 2
},{
    icon: '../img/work1.png',
    text: '销售线索',
    index: 3
},{
    icon: '../img/work1.png',
    text: '销售业绩',
    index: 4
}
];

class MyGrid extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <ScrollView>
                <View style={[{ margin: 10 }]}>
                    <Text>销售首页</Text>
                </View>
                <Grid
                    data={data}
                    columnNum={3}
                    isCarousel
                    onClick={(_el: any, index: any) => alert(index)}
                    // onClick={(_el: any, index: any) => tt(index)}
                    // onClick={(_el: any, index: any) => this.handleAdd.bind(index)}
                    // itemStyle={{ height: 150, backgroundColor: '#ffff00' }}
                />
            </ScrollView >
        );
    }

}

export default MyGrid;