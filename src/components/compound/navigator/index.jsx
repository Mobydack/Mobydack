import React from 'react';

import List from 'easy/list';
import ListItem from 'easy/list_item';

import style from 'style/navigator.styl'

export default class Navigator extends React.PureComponent {
    render() {
        return(
            <div className="navigator">
                <List>
                    <ListItem 
                        text="test"
                        active={true}
                    />
                </List>
            </div>
        );
    }
}