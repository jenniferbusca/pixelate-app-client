const baseURL = 'http://localhost:3000'
const usersURL = '/users'

export const login = (user, history) => {
  return (dispatch) => {
    fetch(baseURL + usersURL , {
      mode: 'cors',
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
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
