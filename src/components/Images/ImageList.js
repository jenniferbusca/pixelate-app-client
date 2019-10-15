import React from 'react';
import { Link } from 'react-router-dom';

const ImageList = (props) => (
  props.images.map(image =>
    <div key={image.id}>
      <Link to={`/image/${image.id}`}>
        <img
          className='thumbnail'
          src={image.image_url}
          alt={image.id}
        />
      </Link>
    </div>
  )
)

export default ImageList
