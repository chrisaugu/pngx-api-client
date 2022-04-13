import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Button, Grid } from '@geist-ui/core';

import {incrementAction, decrementAction} from "../redux/actions/counterAction";

// const Counter = (props) => {
// 	// let selectCount = "";
// 	// const count = useSelector(selectCount)
// 	const dispatch = useDispatch()

// 	function handleClick() {
// 		console.log("hello")
// 	}

// 	return (
// 		<div>
// 			<p>{props.count}</p>
// 			<Button onClick={handleClick}>Click</Button>
// 			<div className={"styles.row"}>
// 				<button
// 					className={"styles.button"}
// 					aria-label="Increment value"
// 					onClick={() => dispatch(incrementAction)}
// 				>
// 					+
// 				</button>
// 				<span className={"styles.value"}>{props.count}</span>
// 				<button
// 					className={"styles.button"}
// 					aria-label="Decrement value"
// 					onClick={() => dispatch(decrementAction)}
// 				>
// 					-
// 				</button>
// 			</div>
// 		</div>
// 	)
// }

// // const mapStateToProps = state => ({
// // 	...state
// // });
// function mapStateToProps(state) {
// 	console.log(state)
// 	return {
// 		count: state.count
// 	}
// }

// const mapDispatchToProps = {
// 	increment: incrementAction,
// 	decrement: decrementAction
// }
// // const mapDispatchToProps = dispatch => ({
// // 	setBgAction: (payload) => dispatch(setBgAction(payload)),
// // 	setColorAction: (payload) => dispatch(setColorAction(payload))
// // });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const Counter = () => {
	const count = useSelector(state => state.counter);
	const dispatch = useDispatch();

	return (
		<>
			<Grid.Container gap={1.5}>
				<Grid>
					<Button 
						type="warning" 
						ghost
						auto 
						scale={0.7}
						aria-label="Increment value"
						onClick={() => dispatch(incrementAction(1))}
					>
						+
					</Button>
				</Grid>
				<Grid>
					<span className={"styles.value"}>{count}</span>
				</Grid>
				<Grid>
					<Button 
						type="error" 
						ghost 
						auto 
						scale={0.7}
						aria-label="Decrement value"
						onClick={() => dispatch(decrementAction(-1))}
					>
						-
					</Button>
				</Grid>
			</Grid.Container>
		</>
	)
}

export default Counter;