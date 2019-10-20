const imagesReducer = (state = {
  images: [],
  loading: false,
  currentImage: ""
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
        images: [action.image, ...state.images],
        currentImage: action.image,
        loading: false
      }
    case 'UPDATE_IMAGE':
      return {
          ...state,
          images: state.images.map(image => image.id === action.image.data.id ?
            { ...image, transformations: action.image.data.attributes.transformations } :
            image
          )
      };
    case 'REMOVE_IMAGE':
      const images = state.images.filter(image => image.id !== action.id);
      return {
        ...state,
        images,
        loading: false
      }
    case 'GET_CURRENT_IMAGE':
      return {
        ...state,
        currentImage: action.image
      }
    default:
      return state;
  }
}

export default imagesReducer;
