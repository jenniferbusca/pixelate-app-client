const baseURL = 'http://localhost:3000'
const imagesURL = '/images'
const usersURL = '/users'

//image action creators
export const fetchImages = (user) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_IMAGES'})
    fetch(`${baseURL + usersURL}/${user.id}`)
      .then(response => { return response.json()})
      .then(responseJSON => {
      dispatch({
        type: 'DISPLAY_IMAGES',
        images: responseJSON.included.map(
          image => (
            { id:image.id, image_url:image.attributes.image_url}
          ))
        }
      )
    })
  }
}

export const postImages = (image) => {
  return (dispatch) => {
    fetch(baseURL + imagesURL, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: image
      })
    })
      .then(response => response.json())
      .then(image => {
        dispatch({
          type: 'CREATE_IMAGES',
          image
        })
      })
      .catch(error => console.log(error))
  };
}
