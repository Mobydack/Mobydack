import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types'

import style from '../style'

export default class CollectionItem extends React.PureComponent {
	static propTypes = {
		active: PropTypes.bool,
		classNameActive: PropTypes.string,
		className: PropTypes.string,
		onClick: PropTypes.func,
	}

	static defaultProps = {
		active: false,
		classNameActive: '',
		className: '',
		onClick: () => {},
	}

	generationclassName = () => {
		const { className, active, classNameActive } = this.props;
		return ClassNames(
			style['collection-item'],
			className,
			{ [classNameActive]: active },
		);
	}
	
	render() {
		return (
			<li
				className={ this.generationclassName() }
				onClick = { this.props.onClick }
			>
				{ this.props.children }
			</li>
		);
	}
}