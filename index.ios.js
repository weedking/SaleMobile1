/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button, Icon, SearchBar, TabBar, List } from 'antd-mobile-rn';
import MyFrame from "./js/MyFrame";
import {Navigator } from 'react-native-deprecated-custom-components';
import CRM from "./js/CRM";


const Item = List.Item;
const Brief = Item.Brief;
global.aa = 1;

export default class SaleMobile extends Component {
  // configureScene(route, routeStack)
  // {
  //   if (route.type == 'Modal') {
  //     return Navigator.SceneConfigs.FloatFromBottom;
  //   }
  //   return Navigator.SceneConfigs.PushFromRight;
  // }

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }
  // renderContent(pageText) {
  //   return (
  //
  //
  //
  //       <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
  //         <SearchBar placeholder="Search" showCancelButton />
  //         <Text style={{ margin: 50 }}>{pageText}</Text>
  //       </View>
  //   );
  // }
  // onChangeTab(tabName) {
  //   this.setState({
  //     selectedTab: tabName,
  //   });
  // }
  render() {
    return (
      <MyFrame/>
    );
  }
}

// 导航栏的Mapper
var NavigationBarRouteMapper =
    {
      // 左键
      LeftButton: (route, navigator, index, navState) =>
      {
        if (index <= 0) {
          return null;
        } else {
          return (
              <TouchableHighlight style={{ marginTop: 10 }} onPress={() => navigator.pop()}>
                <Text>返回</Text>
              </TouchableHighlight>
          );
        }
      },
      // 右键
      RightButton(route, navigator, index, navState)
      {
        // if(!route.passProps.rightText) return null;
        // return (
        //     <View style={{paddingTop: 80}}>
        //
        //       <Button onClick={() => alert('测试菜单')}>
        //         {route.passProps.rightText}
        //       </Button>
        //
        //     </View>
        //
        // );
        return null;
      },
      // 标题
      Title(route, navigator, index, navState)
      {
        return (
            <Text style={styles.title}>
              {route.passProps.title || '默认标题'}
            </Text>
        );
      }
    };



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  // 导航栏
  navContainer: {
    backgroundColor: '#41ABF7',
    paddingTop: 12,
    paddingBottom: 10,
    flex: 1
  },
  // 导航栏文字
  headText: {
    color: '#ffffff',
    fontSize: 22
  },
  // 按钮
  button: {
    height: 120,
    marginTop: 10,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#ff1049',
    alignItems: 'center'
  },
  // 按钮文字
  buttonText: {
    fontSize: 18,
    color: '#ffffff'
  },
  // 左面导航按钮
  leftNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 13,
    marginTop: 12,
    flex: 1
  },
  // 右面导航按钮
  rightNavButtonText: {
    color: '#ffffff',
    fontSize: 18,
    marginRight: 13,
    marginTop: 12,
    flex: 1
  },
  // 标题
  title: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginTop: 12
  },
  txt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 30,
  },
  flatitemimg: {
    width: '100%',
    height: 200,
  },
  flatitemview: {
    flex: 1,
    marginRight:10,
    marginBottom:10,
  },
  flatlistview: {
    // width: deviceWidth,
    paddingLeft:10,
    paddingTop:23,
    marginBottom:250,
  }
});

AppRegistry.registerComponent('SaleMobile', () => SaleMobile);
