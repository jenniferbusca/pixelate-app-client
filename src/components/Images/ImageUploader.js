import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postImages } from '../../actions/imageActions'


class ImageUploader extends Component {

  handleSubmit(imageInfo) {
    let newImage = { user_id: this.props.user.id, image_url:imageInfo.secure_url }
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
      <div>
        <button
          id="upload-widget"
          className="cloudinary-button"
          onClick={this.showWidget}>
          Upload Images
        </button>
      </div>
    )
  }
}

export default connect(
  state => ({
    images: state.imagesReducer.images,
    user: state.loginReducer.user
}), { postImages })(ImageUploader);
