import React from 'react';
import ReactDOM from 'react-dom';
import '../css/footer.css';

export default class Footer extends React.Component {
    render() {
    
        return(
            <footer className="miniFooter">
                <h1>这里是页脚，一般放置版权信息</h1>
            </footer>
        )
    }
}