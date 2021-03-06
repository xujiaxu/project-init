import React from 'react';
import MobileHeader from './mobileHeader';
import MobileFooter from './mobileFooter';
import '../css/mobile.css';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class MobileIndex extends React.Component {
    render() {
        return (
            <div id="mobile">
                <MobileHeader />
                    <Tabs>
                        <TabPane tab="头条" key="1"> 
                        </TabPane> 
                        <TabPane tab="社会" key="2"> 
                        </TabPane> 
                        <TabPane tab="国内" key="3"> 
                        </TabPane>  
                        <TabPane tab="国际" key="4"> 
                        </TabPane>
                        <TabPane tab="娱乐" key="5"> 
                        </TabPane>
                        <TabPane tab="体育" key="6"> 
                        </TabPane> 
                        <TabPane tab="科技" key="7"> 
                        </TabPane>  
                        <TabPane tab="时尚" key="8"> 
                        </TabPane>         
                    </Tabs> 
                <MobileFooter />
            </div>
        );
    }
}