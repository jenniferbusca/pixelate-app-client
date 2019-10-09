const imagesReducer = (state = { images: [], loading: false }, action) => {
  switch(action.type) {
    case 'LOADING_IMAGES':
      return {
        ...state,
        images: [...state.images],
        loading: true
      }
    case 'ADD_IMAGES':
      return {
        ...state,
        images: action.images,
        loading: false
      }
    default:
      return state;
  }
}

export default imagesReducer;
