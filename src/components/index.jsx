import React from 'react';

import Navigator from 'compound/navigator';
import Content from './compound/content';

export default class Application extends React.Component {
    render() {
        return(
            <div className="Application">
                <Navigator />
                <Content />
            </div>
        );
    }
}