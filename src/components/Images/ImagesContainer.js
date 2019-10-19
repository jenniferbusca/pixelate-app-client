import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../../actions/imageActions'
import ImageList from './ImageList'
import ImageContainer from './ImageContainer'
import ImageUploader from './ImageUploader'
import { Row, Col} from 'reactstrap';

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
        <p>Upload or click on an image to begin.</p>
       )
     } else {
       return (
        <ImageContainer image={this.props.currentImage}/>
       )
     }
   }

  render() {
    return (
      <Row className="container-fluid">
        <Col className="img-list" sm={{ size: 2, offset: 1 }}>
          {this.handleLoadingImages()}
        </Col>
        <Col className="selected-image" sm={{ size: 9, offset: 0 }} >
          {this.handleImage()}
        </Col>
      </Row>
    )
  }
}

export default connect(
  state => ({
    images: state.imagesReducer.images,
    user: state.loginReducer.user,
    currentImage: state.imagesReducer.currentImage
  }),
{ fetchImages })(ImagesContainer);
