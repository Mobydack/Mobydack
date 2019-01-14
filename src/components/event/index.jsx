import React from 'react';
import { connect } from 'react-redux';

class EventContainer extends React.PureComponent {
	handlerKey = e => {
		console.log('event', e.key)
		const { state } = this.props;
		const event = {
			'SWITCH_ACTIVE_ITEM': (type) => {
				const nav = state.navigation;
				let i = nav.get('activePOST').index;
				if ( i >= nav.get('posts').size ) {
					i = 0;
					console.log(i)
					return;
				}
				i += 1;
				console.log(i);
				return;
			}
		}
		switch(e.key) {
			case 'ArrowDown':
				console.log('hey1')
				event['SWITCH_ACTIVE_ITEM']('down');
				break;
			case 'ArrowUp':
				console.log('hey2')
				event['SWITCH_ACTIVE_ITEM']('up');
				break;
			default:
				break;
		}
	}
	handlerClick = e => {
		console.log('click', e._targetInst)
	}
	render() {
		return (
			<div
				onKeyDown={ this.handlerKey }
				onClick={ this.handlerClick }
			>
				{ this.props.children }
			</div>
		);
	}
};

const mapStateToProps = state => ({
	state: state,
});
const mapDispatchToPropse = {};

export default connect(mapStateToProps, mapDispatchToPropse)(EventContainer);