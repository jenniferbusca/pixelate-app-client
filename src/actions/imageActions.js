const baseURL = 'http://localhost:3000'
const imagesURL = '/images'
const usersURL = '/users'
const headers =  {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }

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
            { id:image.id, image_url:image.attributes.image_url, transformations:image.attributes.transformations}
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
      headers: headers,
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

export const removeImage = (imageId, userId, history) => {
  return (dispatch) => {
    dispatch({ type: 'REMOVE_IMAGE'})
    fetch(`${baseURL + imagesURL}/${imageId}`, {
      method: "DELETE",
      headers: headers,
      body: JSON.stringify({
        imageId
      })
    })
    .then(window.location.reload(history.push(`/images/${userId}`)))
  };
}


export const saveImage = (image, transformation) => {
  return (dispatch) => {
    fetch(`${baseURL + imagesURL}/${image.id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({
        image,
        transformation
      })
    })
      .then(response => response.json())
      .then(image =>
        dispatch({
          type: 'UPDATE_IMAGE',
          image
        })
      )
      .catch(error => console.log(error))
  };
}
