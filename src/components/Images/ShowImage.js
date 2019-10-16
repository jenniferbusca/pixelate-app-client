import React from 'react';
import { Image, Transformation, CloudinaryContext}  from 'cloudinary-react';

const ShowImage = (props) => (

  <CloudinaryContext cloudName="df8jfhyew">
    <Image className='largeImage' publicId={props.image.image_url} >
      <Transformation effect={null} />
    </Image>
  </CloudinaryContext>
);

export default ShowImage;
