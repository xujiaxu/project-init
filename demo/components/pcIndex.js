import React from 'react';
import PcHeader from './pcHeader';
import PcFooter from './pcFooter';
import PcNewsContainer from './pcNewsContainer';
import '../css/pc.css';

export default class PcIndex extends React.Component {

    render() {
        return(
            <div id="pc">
                <PcHeader />
                <PcNewsContainer />
                <PcFooter />
            </div>
        );
    }
} 