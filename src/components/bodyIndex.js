import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import BodyChild from './bodychild';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins';

export default class BodyIndex extends React.Component {

    constructor(props) {
        super(props);  // 调用基类的所有的初始化方法
        this.state = {userName: 'Parry', age: 20};
        this.changeUserInfo = this.changeUserInfo.bind(this);
    }

    changeUserInfo() {
        this.setState({age: 84});
        // 第一种方式:原生js方式
        // var mySubmitButton = document.getElementById('submitButton');
        // ReactDOM.findDOMNode(mySubmitButton).style.color = 'red';

        //第二种方式
        this.refs.submitButton.style.color = 'red';
        MixinLog.log();
    }

    handleChildValueChange(e) {
        this.setState({age: e.target.value});
    }

    render() {
        // setTimeout(() => {
        //     this.setState({ userName: 'IMOOC', age: 59 });
        // }, 4000);
        return (
            <div>
                <h2>这里是身体，敲代码</h2>
                <p>{this.state.userName} {this.state.age}</p>
                <p>{this.props.userid} {this.props.username}</p>
                <input 
                    type="button" 
                    id="submitButton" 
                    ref="submitButton" 
                    value="提交" 
                    onClick={this.changeUserInfo} 
                />
                <BodyChild 
                    handleChildValueChange={this.handleChildValueChange.bind(this)}
                />
            </div>
        )
    }
}

BodyIndex.propTypes = {
    userid: PropTypes.number,
    username: PropTypes.string.isRequired 
};

ReactMixin(BodyIndex.prototype, MixinLog);