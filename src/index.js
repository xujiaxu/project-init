import React from 'react';
import ReactDOM from 'react-dom';

import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import ComponentBodyIndex from './components/bodyIndex';
import BasicExample from './components/basic';
import AuthExample from './route/url';
import CustomLink from './route/customLink';
import Root from './components/root';


export default class Index extends React.Component {

    componentWillMount() {
        console.log("Index-componentWillMount");
    }

    componentDidMount() {
        console.log("Index-componentDidMount");
    }

    render() {
        return (
            <div>
                <ComponentHeader />
                <ComponentFooter />
                <ComponentBodyIndex userid={12345} username={'nick'}/>
                <BasicExample />
                <AuthExample />
                <CustomLink />
                <Root />
            </div>
        ); 
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);