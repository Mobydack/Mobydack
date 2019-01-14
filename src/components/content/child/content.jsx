import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';

import style from '../style';

class Content extends React.PureComponent {
	static propTypes = {
		content: PropTypes.object
	}

	static defaultProps = {
		content: '',
	}

	generationClassName = () => {
		const {
			'content-wrapper': main,
		} = style;
		return classNames(main);
	}

	render() {
		const { content } = this.props;
		return (
			<div
				className={ this.generationClassName() }
			>
				<ReactMarkdown 
					source={ content && content.body.body }
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	content: state.navigation.get('activePOST'),
});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Content);