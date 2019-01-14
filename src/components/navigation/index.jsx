import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { setActivePost, requestPost } from 'actions/post'

import { Collection, CollectionItem } from 'components/collections';
import style from './style'

class Navigation extends React.PureComponent {
	generationClassName = () => {
		const {
			navigation,
		} = style;
		return classNames(navigation);
	}
	loadPost = () => {
		this.props.requestPost('*');
	}
	setActive = id => {
		if ( id === this.props.activePostID ) {
			return -1;
		}
		this.props.setActivePost(id)
	}
	render() {
		const { posts, activePost } = this.props;
		const itemActiveClass = 'collection-item--active';
		return (
			<div className={ this.generationClassName() }>
				<a
					href="#"
					onClick={ this.loadPost }
				>
					Load Post
				</a>
				<Collection>
					{
						posts.toArray().map(el => (
							<CollectionItem
								key={ el.id }
								onClick={ () => { this.setActive(el.id) } }
								active={ el.id === activePost.body.id }
								classNameActive='collection-item--active'
							>
								{ el.title }
							</CollectionItem>
						))
					}
				</Collection>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	posts: state.navigation.get('posts'),
	activePost: state.navigation.get('activePOST'), 
});

const mapDispatchToProps = {
	setActivePost,
	requestPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);