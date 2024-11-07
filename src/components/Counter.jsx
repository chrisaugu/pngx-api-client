import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid } from '@geist-ui/core';

import {incrementAction, decrementAction} from "../stores/actions";

const Counter = () => {
	const count = useSelector(state => state.counter);
	const dispatch = useDispatch();

	return (
		<>
			<Grid.Container gap={1.5}>
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
				<Grid>
					<span className={"styles.value"}>{count}</span>
				</Grid>
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
			</Grid.Container>
		</>
	)
}

export default Counter;