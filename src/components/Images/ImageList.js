import React from 'react';

const ImageList = (props) => (
  props.images.map(image =>
      <img
        className='thumbnail'
        key={image.id}
        src={image.image_url}
        alt={image.id}
      />
    )
)

export default ImageList
