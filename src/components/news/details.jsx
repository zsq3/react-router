import React, {Component} from 'react';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            content: ''
        }
    }
    componentDidMount(){
        // this.$http.get('http://api', { id: this.state.id })
        //     .then(res => {
        //         this.setState({
        //             content: res.data
        //         })
        //     })
    }
    render() {
        return (
            <div>
                {/* {this.state.content}  */}
                <h1>新闻详情: 惊喜{ this.state.id }</h1>
            </div>
        );
    }
}

export default Detail;