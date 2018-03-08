import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';

export default class Header extends React.Component {

    constructor() {
        super();
        this.state = {miniHeader: false};
       // this.switchHeader = this.switchHeader.bind(this);
    }

    // switchHeader() {
    //     this.setState({
    //         miniHeader: !this.state.miniHeader
    //     });
    // };

    render() {
        const styleComponentHeader = {
            header: {
                backgroundColor: "pink",
                color: "red",
                paddingTop: this.state.miniHeader ? '20px' : '10px',
                paddingBottom: "15px"
            }
        };

        return(
            <header
                style={styleComponentHeader.header} 
               // {/* onClick={this.switchHeader} */}
                className="smallFontSize"
            >
                <h1>这里是头部</h1>
            </header>
        )
    }
}