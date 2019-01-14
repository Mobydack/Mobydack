import React from 'react';
import { connect } from 'react-redux/';

import { setActive } from 'actions/index';

import Navigation from './navigation';
import Content from './content';
import EventContainer from './event';
import { SeparatorContainer, Separator } from './separator';

class Application extends React.PureComponent {
	handlerClick = () => {
		let id = this.props.state.initialReducer.get('active');
		this.props.setActive(++id);
	}
	render() {
		return(
			<div className='main-wrapper'>
				<SeparatorContainer type='v' className='default'>
					<Navigation />
					<Separator className='custom-separator'/>
					<Content />
				</SeparatorContainer>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	state: state
});

const mapDispatchToProps = { setActive };

export default connect(mapStateToProps, mapDispatchToProps)(Application);