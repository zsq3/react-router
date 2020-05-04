import React, {Component} from 'react';
import { Route } from "react-router-dom";

import { Carousel, Layout } from 'element-react';
import './index.css'

import Detail from "./details";



class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    time: '2020-01-10',
                    title: '阿里云免费，更多惊喜请点击。。',
                },
                {
                    time: '2020-02-10',
                    title: '阿里云免费，更多惊喜请点击。。',
                },
                {
                    time: '2020-03-10',
                    title: '阿里云免费，更多惊喜请点击。。',
                },
                {
                    time: '2020-04-10',
                    title: '阿里云免费，更多惊喜请点击。。',
                },
                {
                    time: '2020-05-10',
                    title: '阿里云免费，更多惊喜请点击。。',
                }
            ]
        }
    }
    componentDidMount(){
        //this.$http('')
    }
    link(id){
        this.props.history.push({pathname: '/new/'+ id});
    }
    render() {
        return (
            <div>
                <h1>这是新闻中心</h1>
                <Carousel interval="4000" height="400px" >
                    {
                        [1,2,3,4,5,6].map((item, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <h3>{item}</h3>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                <Layout.Row>
                    <Layout.Col span="6">
                        <ol className='news-title'>
                            {
                                this.state.list.map((item,index) => {
                                    return <li key={index} onClick={this.link.bind(this, index)}>{item.time}: {item.title}</li>
                                })
                            }
                        </ol>
                    </Layout.Col>
                    <Layout.Col span="18">
                        <Route path='/new/:id' component={Detail}></Route>
                    </Layout.Col>
                </Layout.Row>

            </div>
        );
    }
}

export default News;