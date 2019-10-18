const baseURL = 'http://localhost:3000'
const usersURL = '/users'
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}

export const login = (user, history) => {
  return (dispatch) => {
    fetch(baseURL + usersURL , {
      mode: 'cors',
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        user
      })
    })
      .then(response => response.json())
      .then(user => {
        dispatch({
          type: 'GET_USER',
          user
        })
        return user
      })
      .then(user => {
        if(user.result === undefined) {
          dispatch({
            type: 'LOGGED_IN',
          })
          history.push(`/images/${user.id}`)
        } else {
          dispatch({
            type: 'LOGIN_ERROR',
            error: user.user
          })
        }
      })
  };
};

export const logout = (history) => {
  return (dispatch) => {
    dispatch({
      type: 'LOG_OUT',
    })
  }
}
