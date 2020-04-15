import React, {Component} from 'react';
import { Carousel } from 'element-react';

import './index.css'

class News extends Component {
    componentDidMount(){
        //this.$http('')
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
            </div>
        );
    }
}

export default News;