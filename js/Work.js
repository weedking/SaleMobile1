/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, FlatList, Text, TextInput, ListView, View, Image, TouchableOpacity,
    TouchableHighlight,ScrollView, Dimensions, ActivityIndicator, RefreshControl,WebView} from 'react-native';
import { Button, List, SearchBar, WhiteSpace, WingBlank } from 'antd-mobile-rn';
import {Navigator } from 'react-native-deprecated-custom-components';
import moment from "moment";

import WebViewScreen from './WebViewScreen';


var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

class Work extends Component {
    configureScene(route, routeStack)
    {
        if (route.type == 'Modal') {
            return Navigator.SceneConfigs.FloatFromBottom;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }

    render() {
        return (
            <Navigator
                style={{flex:1,marginTop: 33}}
                initialRoute={{component: FirstPage, passProps: {title: '工作首页', rightText: '菜单'}}}
                configureScene={this.configureScene}
                renderScene={(route, navigator) => <route.component route={route} navigator={navigator} {...route.passProps} />}
                navigationBar={
                    <Navigator.NavigationBar
                        style={styles.navContainer}
                        routeMapper={NavigationBarRouteMapper}
                    />}
            />
        );
    }
}

// 首页
class FirstPage extends Component{
    /**
     * 跳转
     */
    gotoPage(component, title)
    {
        // const{navigator} = this.props;
        this.props.navigator.push(
            {
                component: component,
                passProps: {
                    // title: '二级页面',
                    title: title,
                    lastPageTitle: this.props.title,
                    // id:this.state.id,
                },
                // params :{
                //     id:this.state.id,
                // }
            })
    }

    render()
    {
        return (
            <View style={{paddingTop: 80}}>


                {/*<Button onClick={() => this.gotoPage(SecondPage, '二级页面')}>*/}
                {/*<Text style={{fontSize:28, padding: 12}}>点击跳转到二级页面</Text>*/}
                {/*/!*<Text style={{padding: 10, fontSize: 20}}>这是首页，这是首页，这是首页，这是首页，这是首页</Text>*!/*/}
                {/*</Button>*/}

                <TouchableOpacity onPress={()=>{this.gotoPage(SignIn, '签到打卡');}}>
                    <Image source={require('../img/customer64.png')} />
                </TouchableOpacity>
            </View>
        );
    }

}

// 下级页面，打卡签到，根据地理位置
class SignIn extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            longitude:'',//经度
            latitude:'',//纬度
            position:'深圳1',//位置名称
            curUrl:'',
            addr:'',
            signtime: '',
            id:'',
            count:3//用于记录路由变化

        };
        this.getaddr = this.getaddr.bind(this);
        this.addQiandao = this.addQiandao.bind(this);
    }

    componentWillMount = () => {

    };

    onNavigationStateChange(navState) {
        var count1 = this.state.count-1;
        console.log(navState.url);
        this.setState({
            curUrl:decodeURI(navState.url),
            count:count1
        });

        if(!this.state.count){//每次点击选取签到地址都会产生4次路由变化，最后一次才是正确的时间和地址，然后上传到数据库
            this.getaddr(this.state.curUrl);

        }

        // this.curUrl = navState.url;
        //跳转二级页面，签到列表
        // this.gotoPage(SignInList, '签到历史');

    }



    getaddr(curUrl){
        // var signtime1 = new Date().Format("yyyy-MM-dd HH:mm:ss");

        // var date = new Date().toLocaleDateString();
        // var time = new Date().toLocaleTimeString();
        // var signtime = date+time;
        let st = moment().format('YYYY-MM-DD HH:mm:ss');
        // toLocaleTimeString()
        const arr = curUrl.split('&')
        const addressresult = arr[0].substr(29)
        // const addressresult = arr[0].substr(40)
        // Math.floor(Math.random()*(max-min+1)+min);//产生随机数

        var createID=Math.floor(Math.random()*(1000-1+1)+1);
        this.setState({
                addr: addressresult,//签到地点
                // signtime: signtime //签到时间
                signtime: st, //签到时间
                id: createID,

            }
        )

        // this.addQiandao(this.state.id,this.state.signtime,this.state.addr);//新增签到记录
        this.addQiandao(createID,st,addressresult);//新增签到记录
    }

    addQiandao(id,signtime,addr){
        let filter={
            object:{
                object:{

                }
            }
        };

        var preurl ="http://119.23.77.187:8080/addDaka?id=";
        var and = "&";
        var signtime1="signtime=";
        var addr1="addr=";
        var signtimestr1="signtimestr=";  //用字符串的时间格式，就不用转换时间格式了。

        var url= preurl+id+and+signtime1+signtime+and+addr1+addr+and+signtimestr1+signtime;

        // var url = "http://127.0.0.1:8080/addCustomer?id=5&name=776";

        var getInformation ={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            /* json格式转换 */
            body:JSON.stringify(filter)
        }
        fetch(url,getInformation)
            .then(response => response.json())
            .then(responseJson=>{
                // 返回的数据 根据自己返回的json格式取值.
                debugger;
                console.log(responseJson);
                this.setState({
                    // dataSource: responseJson

                })

            })
}



    /**
     * 跳转
     */
    gotoPage(component, title)
    {
        // const{navigator} = this.props;
        this.props.navigator.push(
            {
                component: component,
                passProps: {

                    title: title,
                    lastPageTitle: this.props.title,

                },

            })
    }

    render()
    {
        return (
            <View style={styles.container}>

                <WebView bounces={true}
                         scalesPageToFit={true}

                    // https://www.cnblogs.com
                    //https://3gimg.qq.com/lightmap/components/locationPicker2/index.html?search=1&type=0&backurl=http://3gimg.qq.com/lightmap/components/locationPicker2/back.html&key=N33BZ-GICKI-AQBGN-5X72V-ZAT2S-67B3D&referer=TestMap
                    // onNavigationStateChange={(event)=>{console.log(event)}}
                        // http://119.23.77.187:8080/getCustomerList

                         // onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                         source={{uri:"https://3gimg.qq.com/lightmap/components/locationPicker2/index.html?search=1&type=0&backurl=http://www.ontulip.com/&key=N33BZ-GICKI-AQBGN-5X72V-ZAT2S-67B3D&referer=myapp",method: 'GET'}}
                         // source={{uri:"https://3gimg.qq.com/lightmap/components/locationPicker2/index.html?search=1&type=0&backurl=https://www.cnblogs.com&key=N33BZ-GICKI-AQBGN-5X72V-ZAT2S-67B3D&referer=myapp",method: 'GET'}}
                         onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                         style={{width:deviceWidth, height:deviceHeight}}>

                </WebView>


                {/*<Text style={styles.instructions}>当前位置：{this.state.addr}</Text>*/}
                {/*<Text style={styles.instructions}>签到时间：{this.state.signtime}</Text>*/}
                {/*<Text style={styles.instructions}>id：{this.state.id}</Text>*/}
                {/*<Text style={styles.instructions}>url：{this.state.curUrl}</Text>*/}



                {/*<WebViewScreen />*/}

                {/*<TouchableOpacity onPress={()=>{this.gotoPage(SecondPage, '客户列表');}}>*/}
                    {/*<Image source={require('../img/customer64.png')} />*/}
                {/*</TouchableOpacity>*/}
            </View>
        );
    }
}


// 二级页面,签到列表
class SignInList extends Component
{
    // test1=111;
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000 //每秒更新一次
        );
    }

    tick() {
        //定时器
        // this.setState({
        //     date: new Date(),//创建当前时间
        //     child:'删除',
        // });

        // this.getCustomerList();
    }

    componentWillUnmount() {

        clearInterval(this.timerID);//清理计时器

    }




    render()
    {

        // const { params } = this.props.navigation.state;
        return (
            <View style={{flex: 1, paddingTop:80}}>
                <Text style={styles.instructions}>当前位置：{this.state.curUrl}</Text>

            </View>
        );
    }
};



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
    // 页面框架
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    // 导航栏
    navContainer: {
        backgroundColor: '#41ABF7',
        paddingTop: 30,
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
    item:{
        margin:15,
        height:30,
        borderWidth:1,
        padding:6,
        borderColor:'#ddd',
        textAlign:'center'
    },

});

export default Work;
