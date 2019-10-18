import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { postImages } from '../../actions/imageActions'


class ImageUploader extends Component {

  handleSubmit(imageInfo) {
    let newImage = { user_id: this.props.user.id, image_url:imageInfo.public_id }
    this.props.postImages(newImage)
  }

	showWidget = () => {
    window.cloudinary.openUploadWidget({
      cloudName: "df8jfhyew",
      uploadPreset: "eytnlidt"},
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.handleSubmit(result.info)
        }
      }
    )
  }

  render() {
    return (
      <button
        className="nav-button"
        id="upload-widget"
        onClick={() => this.showWidget()}>
        UPLOAD IMAGES
      </button>
    )
  }
}

export default connect(
  state => ({
    images: state.imagesReducer.images,
    user: state.loginReducer.user
}), { postImages })(withRouter(ImageUploader));
