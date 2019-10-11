const loginReducer = (state = {
  user = {
    email: this.state.email,
    password: this.state.password
  }
}, action) => {
  switch(action.type) {
    case 'GET_USER':
      return {
        ...state,
        user
      }
    default:
      return state;
  }
}
export default loginReducer;
