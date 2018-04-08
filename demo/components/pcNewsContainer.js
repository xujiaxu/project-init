import React from 'react';
import { Row, Col } from 'antd';
import { Tabs, Carousel } from 'antd';
import PcNewsBlock from './pcNewsBlock';
import PcNewsBlockImage from './pcNewsBlockImage';
import img1 from '../img/2.png';
import img2 from '../img/3.png';
import img3 from '../img/4.png';
import img4 from '../img/5.png';
const TabPane = Tabs.TabPane;

export default class PcNewsContainer extends React.Component {
    
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            easing: 'linear',
            autoplay: true
        }

        return(
            <div>
                <Row> 
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src={img1} alt=""/></div>
                                    <div><img src={img2} alt=""/></div>
                                    <div><img src={img3} alt=""/></div>
                                    <div><img src={img4} alt=""/></div>
                                </Carousel>           
                            </div>
                            <PcNewsBlockImage count={6} type="guoji" width="400px" cardTitle="国际头条" imageWidth="110px"/>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PcNewsBlock count={22} type="top" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PcNewsBlock count={22} type="guoji" width="100%" bordered="false" />
                            </TabPane>
                        </Tabs>
                        <div>
                            <PcNewsBlockImage count={8} type="guonei" width="100%" cardTitle="国内新闻" imageWidth="1px"/>
                            <PcNewsBlockImage count={16} type="yule" width="100%" cardTitle="娱乐新闻" imageWidth="112px"/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        ) 
    }
}