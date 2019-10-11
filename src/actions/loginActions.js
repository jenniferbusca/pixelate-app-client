const baseURL = 'http://localhost:3000'
const usersURL = '/users'

export const login = (email, password, history) => {
  let user = { email: email, password: password}
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
      })
      .then(history.push('/images'))
      .catch(error => console.log(error))

  };
};
