import { Provider, connect } from 'reac-redux';
import { createStore } from 'redux';

// action
function incrementCounter(num) {
	return {
		type: "INCREMENT",
		num: num
	}
}

// reducer
const initialState = {
	count: 0
}
function reducer(state = initialState, action) {
	switch(action.type) {
		case 'INCREMENT':
			return { count: state.count + action.num };
		default:
			return state;
	}
}

const store = createStore(reducer);


const el = <Provider store={store}>
				<Counter/>
		   </Provider>;

function mapStateToProps(state) {
	return {
		count: state.count
	}
}

const mapDispatchToProps = {
	incrementCounter
}

connect(mapStateToProps, mapDispatchToProps)(Component)