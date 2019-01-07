import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from 'style/list_item'

export default class ListItem extends React.PureComponent {
    render() {
        return(
            <li 
                className={
                    classNames(
                        'list__item', 
                        {
                            'list__item--active': this.props.active
                        }
                    )
                }
            >
                {/* TODO: Вынести в отдельный компонент */}
                <div className='brackets'>
                    { this.props.text }
                </div>
            </li>
        );
    }
}

ListItem.porpTypes = {
    active: PropTypes.bool,
    text: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
    active: false,
};
