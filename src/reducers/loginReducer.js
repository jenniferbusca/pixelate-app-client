const loginReducer = (state = {
  user: {},
  error: '',
  logged_in: false
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
    case 'LOGGED_IN':
      return {
        ...state,
        logged_in: true
      }
    case 'LOG_OUT':
      return {
        ...state,
        logged_in: false
      }
    default:
      return state;
  }
}
export default loginReducer;
