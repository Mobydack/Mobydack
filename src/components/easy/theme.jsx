import React from 'react';

export default class List extends React.PureComponent {
    render() {
        return(
            <div id={ this.props.name }>
                { this.props.children }
            </div>
        );
    }
}