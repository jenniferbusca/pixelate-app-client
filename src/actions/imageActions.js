const baseURL = 'http://localhost:3000'
const imagesURL = '/images'

export const fetchImages = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_IMAGES'})
    fetch(baseURL + imagesURL)
      .then(response => { return response.json()})
      .then(responseJSON => {
      dispatch({
        type: 'DISPLAY_IMAGES',
        images: responseJSON.data.map(
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
