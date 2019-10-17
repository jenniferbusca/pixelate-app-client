import React from 'react';
import { Link } from 'react-router-dom';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

const ImageList = (props) => {
  return (
    props.images.map(image =>
      <div key={image.id}>
        <Link to={`/image/${image.id}`}>
          <CloudinaryContext cloudName="df8jfhyew">
            <Image className='thumbnail' publicId={image.image_url} >
              <Transformation effect={image.transformations} />
            </Image>
          </CloudinaryContext>
        </Link>
      </div>
    )
  )
}

export default ImageList;
