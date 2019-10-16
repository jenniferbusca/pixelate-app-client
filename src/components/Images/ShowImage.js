import React from 'react';
import { Image, Transformation, CloudinaryContext}  from 'cloudinary-react';

const ShowImage = (props) => {
  return (
  <CloudinaryContext cloudName="df8jfhyew">
    <Image className='largeImage' publicId={props.image.image_url} >
      <Transformation effect={props.selectedImageFilter} />
    </Image>
  </CloudinaryContext>
)
};

export default ShowImage;
