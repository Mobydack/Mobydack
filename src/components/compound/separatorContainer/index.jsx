import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from 'style/separator';

export default class SeparatorContainer extends React.PureComponent {

    render() {
        return(
            <div className={classNames('separator-container', this.props.orientation )}>
                { this.props.children }
            </div>
        );
    }
}

SeparatorContainer.propTypes = {
orientation: PropTypes.string,
}

SeparatorContainer.defaultProps = {
    orientation: 'h',
}