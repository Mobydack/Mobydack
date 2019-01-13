import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from '../style';

export default class SeparatorContainer extends React.PureComponent {
	static propTypes = {
		type: PropTypes.oneOf(['v', 'h']),
		className: PropTypes.string
	}

	static defaultProps = {
		type: 'v',
		className: '',
	}

	generationClassName = () => {
		const baseClass = 'separator-container'
		return classNames(
			style[baseClass],
			style[baseClass + `--${this.props.type}`],
			this.props.className
		);
	}

	render() {
		return (
			<div className={ this.generationClassName() }>
				{ this.props.children }
			</div>
		);
	}
}