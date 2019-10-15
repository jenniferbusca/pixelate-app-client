import React, { Component } from 'react';
import ImageUploader from '../Images/ImageUploader'
import { connect } from 'react-redux';
import { fetchImages } from '../../actions/imageActions'
import ImageList from './ImageList'

class ImagesContainer extends Component {

  componentDidMount() {
    this.props.fetchImages(this.props.user)
  }

  handleLoading = () => {
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

  render() {
    return (
      <div>
        {this.handleLoading()}
        <ImageUploader />
      </div>
    )
  }
}

//inline (mapStateToProps, mapDispatchToProps)
export default connect(
  state => ({
    images: state.imagesReducer.images,
    user: state.loginReducer.user
  }),
{ fetchImages })(ImagesContainer);
