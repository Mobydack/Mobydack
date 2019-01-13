import React from 'react';
import { connect } from 'react-redux';

import { setActive } from 'actions/index'

import Navigation from './navigation'
import { SeparatorContainer, Separator } from './separator'

class Application extends React.PureComponent {
	handlerClick = () => {
		let id = this.props.state.initialReducer.get('active');
		this.props.setActive(++id);
	}
	render() {
		return(
			<React.Fragment>
				<SeparatorContainer type='v' className='default'>
					<Navigation />
					<Separator className='custom-separator'/>
					<div>
						This is Content
					</div>
				</SeparatorContainer>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => ({
	state: state
});

const mapDispatchToProps = { setActive };

export default connect(mapStateToProps, mapDispatchToProps)(Application);