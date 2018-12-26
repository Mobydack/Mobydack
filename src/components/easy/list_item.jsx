import React from 'react';

export default class ListItem extends React.PureComponent {
    render() {
        return(
            <li className="list__item">
                { this.props.text }
            </li>
        );
    }
}