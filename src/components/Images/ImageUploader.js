import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postImages } from '../../actions/imageActions'


class ImageUploader extends Component {

  handleSubmit(imageInfo) {
    let newImage = { id: 1, imageURL:imageInfo.secure_url }
    this.props.postImages(newImage)
    console.log('Done! Here is the image info: ', imageInfo)
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
          Upload files
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = state => {
  return {
    images: state.images,
    loading: state.loading
  }
}

// export default ImageUploader;
export default connect(mapDispatchToProps, { postImages })(ImageUploader)
