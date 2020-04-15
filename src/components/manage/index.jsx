import React, {Component} from 'react';
import {Table} from 'element-react'
import './index.css'


class Manage extends Component {
    constructor(props){
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