import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../../actions/imageActions'
import ImageList from './ImageList'
import ImageContainer from './ImageContainer'
import ImageUploader from './ImageUploader'

class ImagesContainer extends Component {
  componentDidMount() {
    this.props.fetchImages(this.props.user)
  }

  handleLoadingImages = () => {
    if(this.props.loading) {
      return (
        <div>
          <p>Loading Images...</p>
        </div>
      )
    } else {
      return <ImageList images={this.props.images} />
    }
  }

   handleImage = () => {
     if(!this.props.currentImage) {
       return (
         this.props.images === [] ? <ImageUploader /> : <p>Click on an image to edit.</p>
       )
     } else {
       return (
        <ImageContainer image={this.props.currentImage}/>
       )
     }
   }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            {this.handleLoadingImages()}
          </div>
          <div className="col-md-10">
            {this.handleImage()}
          </div>
        </div>
      </div>
    )
  }
}

//inline (mapStateToProps, mapDispatchToProps)
export default connect(
  state => ({
    images: state.imagesReducer.images,
    user: state.loginReducer.user,
    currentImage: state.imagesReducer.currentImage
  }),
{ fetchImages })(ImagesContainer);
