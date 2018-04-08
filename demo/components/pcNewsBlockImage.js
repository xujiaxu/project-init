import React from 'react';
import { Card } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class PcNewsImageBlock extends React.Component {
    constructor(props) {
        super();
        this.state = {
            news: ''
        };
    }
    componentWillMount() {
        let myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type="+this.props.type
        +"&count="+this.props.count, myFetchOptions)
        .then(response => response.json())
        .then(json => this.setState({ news: json }));            
    }

    render(){
        const styleImage = {
            display: 'block',
            border: '1px solid silver',
            imageWidth: this.props.imageWidth,
            height: '90px'
        };
        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        };
        const { news } = this.state;
        const newsList = news.length
        ?
        news.map((newsItem,index) => (
            <div key={index} className="imageItem">
                <Router>
                    <Link to={`details/${newsItem.uniquekey}`} >
                        <div className="custom-image">
                            <img style={styleImage} src={newsItem.thumbnail_pic_s} />            
                        </div>
                        <div className="custom-card">
                            <h3 style={styleH3}>{newsItem.title}</h3>
                            <p>{newsItem.author_name}</p>
                        </div>
                    </Link>
                </Router>
            </div>
        ))
        :
        '没有加载任何新闻';
        console.log(newsList);
        return(
            <div className="topNewsList">
                <Card title={this.props.cardTitle} bordered={true} style={{width: this.props.width}}>
                        {newsList} 
                </Card>                
            </div>
        ) 
    } 
}