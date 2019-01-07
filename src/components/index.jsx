import React from 'react';

import Navigator from 'compound/navigator';
import Content from 'compound/content';
import SeparatorContainer from 'compound/separatorContainer';

import Separator from 'easy/separator';
import Theme from 'easy/theme';

import style from 'style/app.styl';

export default class Application extends React.PureComponent {
    render() {
        return(
            <Theme name="default">
                <div className="app">
                    <SeparatorContainer orientation="v">
                        <Navigator />
                        <Separator />
                        <Content />
                    </ SeparatorContainer>
                </div>
            </ Theme>
        );
    }
}