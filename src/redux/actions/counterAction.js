export const decrementAction = (num) => {
  return {
    type: 'DECREMENT',
    num: num
  }
}

export const incrementAction = (num) => {
  return {
    type: 'INCREMENT',
    num: num
  }
}