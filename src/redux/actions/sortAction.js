const rotateAction = (payload) => {
  return {
    type: 'filters/statusFilterChanged',
    payload: payload
  }
}
export default rotateAction;