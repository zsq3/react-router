import React, {Component} from 'react';
import {Table} from 'element-react'
import './index.css'


class Manage extends Component {
    constructor(props){
        // super继承父类属性，同时生成子类this, props可加可不加，
        // 但是你如果要在constructor内使用props 比如this.state = { name: this.props.name},
        // 这时候必须写成super(props), 不加的时候constructor内的this.props 为undefined的
        // 但是有时候你忘了加只写super() 甚至constructor函数都没写， 你还是可以在render内调用this.props
        // 这是因为react会在实例上默认生成instance.props,  所以看需求可加可不加

        super(props);
        this.state = {
            columns: [
                {
                    label: "日期",
                    prop: "date",
                },
                {
                    label: "姓名",
                    prop: "name",
                    //width: 180
                },
                {
                    label: "地址",
                    prop: "address"
                }
            ],
            data: [
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2018-10-11',
                    name: '王大贵',
                    address: '上海市普陀区金沙江路 1520 弄'
                },
                {
                    date: '2020-04-20',
                    name: '王大贵',
                    address: '上海市普陀区金沙江路 1521 弄'
                }
            ]
        }
    }
    componentDidMount(){
        /*this.$http.get(url)
            .then(res => {
                this.setState({
                    data: res.data
                })
            })*/

    }
    render() {
        return (
            <div>
                <h1>这是管理中心</h1>
                <Table
                    style={{width: '100%'}}
                    columns={this.state.columns}
                    data={this.state.data}
                    stripe={true}
                />
            </div>
        );
    }
}

export default Manage;