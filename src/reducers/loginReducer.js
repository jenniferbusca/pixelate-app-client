const loginReducer = (state = {
  user: {},
  error: ''
}, action) => {
  switch(action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
}
export default loginReducer;
