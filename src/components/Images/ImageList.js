import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import { getCurrentImage, fetchImages } from '../../actions/imageActions'

class ImageList extends Component {

  componentDidUpdate(prevProps) {
    if ((prevProps.images.length !== this.props.images.length) ||
      (prevProps.currentImage && this.props.currentImage === undefined)) {
      this.props.fetchImages(this.props.user.id)
    }
  }

  handleClick = (image) => {
    this.props.getCurrentImage(image)
  }

  render() {
   return (
     this.props.images.map(image =>
       <div key={image.id} >
         <CloudinaryContext cloudName="df8jfhyew" >
           <Image className='img-thumbnail' publicId={image.image_url} onClick={() => this.handleClick(image)}>
             <Transformation effect={image.transformations} width="200" height="150" crop="fit" />
           </Image>
         </CloudinaryContext>
       </div>
     )
   )
  }
}




export default connect(
  state => ({
    images: state.imagesReducer.images,
    user: state.loginReducer.user,
    currentImage: state.imagesReducer.currentImage
  }),{ getCurrentImage, fetchImages })(ImageList);
