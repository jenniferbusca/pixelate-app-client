import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import { currentImage } from '../../actions/imageActions'

class ImageList extends Component {

  handleClick = (image) => {
    this.props.currentImage(image)
  }

   render() {
     return (
       this.props.images.sort((a,b) => a.id < b.id).map(image =>
         <div key={image.id} >
           <CloudinaryContext cloudName="df8jfhyew" >
             <Image className='img-thumbnail' publicId={image.image_url} onClick={() => this.handleClick(image)}>
               <Transformation effect={image.transformations} />
             </Image>
           </CloudinaryContext>
         </div>
       )
     )
   }

}

export default connect( null ,{ currentImage })(ImageList);
