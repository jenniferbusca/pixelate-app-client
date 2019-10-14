const loginReducer = (state = {
  user: {},
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
        user: action.user
      }
    default:
      return state;
  }
}
export default loginReducer;
