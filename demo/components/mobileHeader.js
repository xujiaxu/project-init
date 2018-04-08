import React from 'react';
import imgSrc from '../img/1.png';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';

export default class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top' 
        };
    }

    render() {
        return (
            <div id="mobileheader">
                <header>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={22}>
                            <a href="/" className="logo">
                                <img src={imgSrc} alt="logo" />
                                <span>ReactNews</span>
                            </a>
                        </Col>
                        
                        <Col span={1}></Col>
                    </Row>       
                </header>            
            </div>
        )
    }
}