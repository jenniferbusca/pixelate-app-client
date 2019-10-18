import React from 'react';
import { Image, Transformation, CloudinaryContext}  from 'cloudinary-react';

const ShowImage = (props) => {
  return (
    <div key={props.image.id}>
      <CloudinaryContext cloudName="df8jfhyew">
        <Image className='largeImage' publicId={props.image.image_url} >
          <Transformation effect={props.selectedImageFilter} />
        </Image>
      </CloudinaryContext>
    </div>
  )
};

export default ShowImage;
