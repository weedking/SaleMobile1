import React, { Component } from 'react';
import {AppRegistry, StyleSheet, FlatList, Text, TextInput, ListView, View, Image, TouchableOpacity,
    TouchableHighlight,ScrollView, Dimensions, ActivityIndicator, RefreshControl,Button, KeyboardAvoidingView} from 'react-native';
import { Grid,  List, SearchBar, WhiteSpace, WingBlank, InputItem,} from 'antd-mobile-rn';


class AddCustomer extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            // showValue:"",
            id: '',
            key1: '',
            name: '',
            city: '',
            phone: '',
            contacts: '',
            email: '',
            source: '',
            title: '',
            need: '',
            url: '',
            address: '',
            remark: '',
        };
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        let filter={
            object:{
                object:{

                }
            }
        };

        var preurl ="http://119.23.77.187:8080/addCustomer?id=";
        var and = "&";
        var key11="key1=";
        var name1="name=";
        var address1="address=";
        var city1="city=";
        var phone1="phone=";
        var contacts1="contacts=";
        var email1="email=";
        var source1="source=";
        var title1="title=";
        var need1="need=";
        var url1="url=";
        var remark1="remark=";


        var createID= Number(this.state.id);
        var key1= this.state.key1;
        var name= this.state.name;
        var address= this.state.address
        var city= this.state.city;
        var phone= this.state.phone;
        var contacts= this.state.contacts;
        var email= this.state.email;
        var source= this.state.source;
        var title= this.state.title;
        var need= this.state.need;
        var urlfor= this.state.url;
        var remark= this.state.remark;

        //这一串还有问题
        var url= preurl+createID+and+key11+key1+and+name1+name+and+address1+address+and+city1+city+and+phone1+phone+and+contacts1+contacts+and+email1+email+and+source1+source+
            and+title1+title+and+need1+need+and+url1+urlfor+and+remark1+remark;

        // var url = "http://119.23.77.187:8080/addCustomer?id=88&name=99方&city=桂林";

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

        this.setState({
            city:666,

        });
        alert('ddd')

    }




    // AddCustomer(){
    //
    // }

    render() {
        return (
            <ScrollView
                style={{ flex: 1 }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />

                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={150}>
                    <List renderHeader={'基本信息'}>
                        <InputItem
                            clear
                            // value=""
                            onChange={value => {
                                this.setState({
                                    id: value,
                                });
                            }}
                            labelNumber={5}
                            placeholder=""
                        >
                            公司ID：
                        </InputItem>

                        <InputItem
                            clear
                            // value=""
                            onChange={value => {
                                this.setState({
                                    name: value,
                                });
                            }}
                            labelNumber={5}
                            placeholder=""
                        >
                            公司名称：
                        </InputItem>

                        <InputItem
                            clear
                            // value=""
                            onChange={value => {
                                this.setState({
                                    address: value,
                                });
                            }}
                            labelNumber={5}
                            placeholder=""
                        >
                            公司地址：
                        </InputItem>

                        <InputItem
                            clear
                            // value=""
                            onChange={value => {
                                this.setState({
                                    city: value,
                                });
                            }}
                            labelNumber={5}
                            placeholder=""
                        >
                            所在城市：
                        </InputItem>

                        <InputItem
                            clear
                            // value=""
                            onChange={value => {
                                this.setState({
                                    url: value,
                                });
                            }}
                            labelNumber={5}
                            placeholder=""
                        >
                            公司网址：
                        </InputItem>

                        <InputItem
                            clear
                            // value=""
                            onChange={value => {
                                this.setState({
                                    contacts: value,
                                });
                            }}
                            labelNumber={5}
                            placeholder=""
                        >
                            联系人：
                        </InputItem>

                        <InputItem
                            clear
                            // value=""
                            onChange={value => {
                                this.setState({
                                    title: value,
                                });
                            }}
                            labelNumber={5}
                            placeholder=""
                        >
                            职务：
                        </InputItem>

                        <InputItem
                            clear
                            // value=""
                            onChange={value => {
                                this.setState({
                                    phone: value,
                                });
                            }}
                            labelNumber={5}
                            placeholder=""
                        >
                            联系电话：
                        </InputItem>

                        <InputItem
                            clear
                            // value=""
                            onChange={value => {
                                this.setState({
                                    source: value,
                                });
                            }}
                            labelNumber={5}
                            placeholder=""
                        >
                            客户来源：
                        </InputItem>

                        <InputItem
                            clear
                            // value=""
                            onChange={value => {
                                this.setState({
                                    email: value,
                                });
                            }}
                            labelNumber={5}
                            placeholder=""
                        >
                            邮箱：
                        </InputItem>

                        <InputItem
                            clear
                            // value=""
                            onChange={value => {
                                this.setState({
                                    need: value,
                                });
                            }}
                            labelNumber={5}
                            placeholder=""
                        >
                            所需产品：
                        </InputItem>

                        <InputItem
                            clear
                            // value=""
                            onChange={value => {
                                this.setState({
                                    remark: value,
                                });
                            }}
                            labelNumber={5}
                            placeholder=""
                        >
                            备注：
                        </InputItem>
                    </List>

                    <WingBlank
                        style={{
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            onPress={this.handleClick.bind(this)}
                            title="提交"
                            color="#841584"
                            accessibilityLabel="submit button"
                        />

                    </WingBlank>

                </KeyboardAvoidingView>
            </ScrollView>


        );
    }

}

const styles = StyleSheet.create({
    mycontainer:{
        marginTop:30,
        flexDirection:"row",
    },
    inputStyle:{
        width:280,
        height:30,
        borderColor:"black",
        borderWidth:1,
        marginLeft:5,
    },
    btn:{
        width:85,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"green",
        // borderRadius:5
    },
    wordC:{
        color:"white",
        fontSize:18,
    }
})


export default AddCustomer;