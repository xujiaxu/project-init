import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link }
from 'react-router-dom'; 
import { Button } from 'antd';

export default class Index extends React.Component {
    render() {
       return ( 
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
       )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app'),
    mountNode
);
