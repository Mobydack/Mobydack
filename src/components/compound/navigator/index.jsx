import React from 'react';

import List from 'easy/list';
import ListItem from 'easy/list_item';

import style from 'style/content.styl'

export default class Navigator extends React.PureComponent {
    render() {
        console.log(<ListItem text="asdasd"/>)
        return(
            <div className="navigator">
            navigator
                <List>
                    <ListItem 
                        text="test"
                    />
                </List>
            </div>
        );
    }
}