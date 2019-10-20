const baseURL = 'https://pixelate-app.herokuapp.com/'
const imagesURL = '/images'
const usersURL = '/users'
const headers =  {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }

export const fetchImages = (userId) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_IMAGES'})
    fetch(`${baseURL + usersURL}/${userId}`)
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
    .then(image => {
      dispatch({
        type: 'GET_CURRENT_IMAGE',
        image: undefined
      })
    })
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
    .then(image => {
        dispatch({
          type: 'UPDATE_IMAGE',
          image
        })
        return image
      }
    )
    .then(({ data: { id, attributes: { transformations, image_url } } }) => {
      dispatch({
        type: 'GET_CURRENT_IMAGE',
        image: {id, transformations, image_url}
      })
    })
  };
}

export const getCurrentImage = (image) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_CURRENT_IMAGE',
      image
    })
  };
}
