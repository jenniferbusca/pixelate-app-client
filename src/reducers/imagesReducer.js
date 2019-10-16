const imagesReducer = (state = {
  images: [],
  loading: false
}, action) => {
  switch(action.type) {
    case 'LOADING_IMAGES':
      return {
        ...state,
        images: [...state.images],
        loading: true
      }
    case 'DISPLAY_IMAGES':
      return {
        ...state,
        images: action.images,
        loading: false
      }
    case 'CREATE_IMAGES':
      return {
        ...state,
        images: [...state.images, action.image],
        loading: false
      }
    // case 'UPDATE_IMAGE':
    //   const image = state.images.filter(image => image.id === action.id);
    //   return {
    //     ...state,
    //     image: [...state.images, action.image],
    //     loading: false
    //   }
    case 'REMOVE_IMAGE':
      const images = state.images.filter(image => image.id !== action.id);
      return {
        ...state,
        images,
        loading: false
      }
    default:
      return state;
  }
}

export default imagesReducer;
