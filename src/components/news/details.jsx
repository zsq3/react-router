import React, {Component} from 'react';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            //id: this.props.match.params.id,
            content: ''
        }
    }
    getNews(){
        this.$http.get('http://api', { id: this.props.match.params.id })
            .then(res => {
                this.setState({
                    content: res.data
                })
            })
    }
    componentDidMount(){
        //this.getNews()
    }
    componentDidUpdate(){
        //this.getNews()
    }
    render() {
        return (
            <div>
                {/* {this.state.content}  */}
                <h1>新闻详情: 惊喜{ this.props.match.params.id }</h1>
                {/*注意这里有个小问题，这里如果用this.state.id 只会渲染第一次。。*/}
                {/*如果坚决要把新闻id存在state, 需要componentWillReceiveProps 结合 componentDidUpdate */}
            </div>
        );
    }
}

export default Detail;