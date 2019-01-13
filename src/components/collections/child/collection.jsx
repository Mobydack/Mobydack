import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types'

import style from '../style'

export default class CollectionItem extends React.PureComponent {
	static propTypes = {
		className: PropTypes.string,
	}

	static defaultProps = {
		className: '',
	}

	generationclassName = () => {
		return ClassNames(style['collection'], this.props.className);
	}

	render() {
		return (
			<ol className={ this.generationclassName() }>
				{ this.props.children }
			</ol>
		);
	}
}