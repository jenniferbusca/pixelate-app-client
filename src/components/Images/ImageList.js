import React from 'react';
import { Link } from 'react-router-dom';
import {Image, CloudinaryContext} from 'cloudinary-react';

const ImageList = (props) => (
  props.images.map(image =>
    <div key={image.id}>
      <Link to={`/image/${image.id}`}>
        <CloudinaryContext cloudName="df8jfhyew">
          <Image className='thumbnail' publicId={image.image_url} />
        </CloudinaryContext>
      </Link>
    </div>
  )
)

export default ImageList;
