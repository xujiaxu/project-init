import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link }
from 'react-router-dom'; 
import { Button } from 'antd';
import PcIndex from './components/pcIndex';
import MobileIndex from './components/mobileIndex';
import MediaQuery from 'react-responsive';

export default class Index extends React.Component {
    render() {
       return ( 
            <div>
                <MediaQuery query='(min-device-width: 1224px)'>
                    <PcIndex />
                </MediaQuery>
                <MediaQuery query='(max-device-width: 1224px)'>
                    <MobileIndex />
                </MediaQuery>
            </div>
       )
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);
