import React from 'react';
import { Row, Col } from 'antd';
import { 
    Menu,
    Modal,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox
} from 'antd';
import imgSrc from '../img/1.png';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class PcHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0  
        };
    }

    setModalVisible = (value) => {
        this.setState({ modalVisible: value });
     }

    handleOnclick = (e) => {
         if (e.key=="register") {
            this.setState({ current: 'register' });
            this.setState({ modalVisible: true });
         } else {
             this.setState({ current: e.key });
         }
         
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
            
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" className="register">
                <Button type="primary" htmlType="button">
                    {this.state.userNickName}
                </Button>
                &nbsp;&nbsp;
                <Link target="_blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </Link>
                &nbsp;&nbsp;
                <Button type="ghost" htmlType="button">退出</Button>                
            </Menu.Item>
            :
            <Menu.Item key = "register" className="register">
                <Icon type="appstore" />注册/登录            
            </Menu.Item>;    


        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src={imgSrc} alt="logo" />
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu 
                            mode="horizontal" 
                            selectedKeys={[this.state.current]}
                            onClick={this.handleOnclick}
                        >
                            <Menu.Item key="top">
                                <Icon type="right"/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="right"/>社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="right"/>国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="right"/>国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="right"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu"> 
                                <Icon type="right"/>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="right"/>科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="right"/>时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal 
                            title="用户中心" 
                            wrapClassName="vertical-center-modal"
                            visible={this.state.modalVisible}
                            onCancel={() => this.setModalVisible(false)}
                            onOk={() => this.setModalVisible(false)}
                            cancelText="取消"
                            okText="关闭"
                        >
                            <Tabs type="card">
                                <TabPane tab="注册" key="1">
                                    <Form horizontal='true' onSubmit={this.handleSubmit}>
                                        <FormItem
                                            validateStatus={userNameError ? 'error' : ''}
                                            help={userNameError || ''}
                                        >
                                            {getFieldDecorator('userName', {
                                                rules: [{ required: true, message: '请输入用户名' }],
                                            })(
                                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                            )}
                                            </FormItem>
                                            <FormItem
                                                validateStatus={passwordError ? 'error' : ''}
                                                help={passwordError || ''}
                                            >
                                                {getFieldDecorator('password', {
                                                    rules: [{ required: true, message: '请输入用户密码' }],
                                                })(
                                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                                )}
                                            </FormItem> 
                                            <FormItem
                                                validateStatus={passwordError ? 'error' : ''}
                                                help={passwordError || ''}
                                            >
                                                {getFieldDecorator('confirm', {
                                                rules: [{ required: true, message: '请再次输入用户密码' }],
                                                })(
                                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'  }} />} type="password" placeholder="Password" />
                                            )}
                                            </FormItem>   
                                        <Button type="primary" htmlType="submit" className="sign">注册</Button>  
                                    </Form>   
                                </TabPane>
                            </Tabs> 
                        </Modal>                      
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    } 
} 
export  default PcHeader = Form.create()(PcHeader);