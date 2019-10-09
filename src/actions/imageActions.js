const baseURL = 'http://localhost:3000'
const imageURL = '/images'

export const fetchImages = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_IMAGES'})
    fetch(baseURL + imageURL).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({
        type: 'ADD_IMAGES',
        images: responseJSON.data.map(
          image => (
            { id:image.id, url:image.attributes.image_url}
          ))
        })
    })
  }
}
