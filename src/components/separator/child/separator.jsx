import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from '../style';

export default class Separator extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string,
	}
	static defaultProps = {
		className: '',
	}

	generationClassName = () => {
		return classNames(style['separator-element'], this.props.className);
	}
	render() {
		return (
			<div className={ this.generationClassName() }>
			</div>
		);
	}
}