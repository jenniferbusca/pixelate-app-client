import React, { Component } from 'react';

class ImageUploader extends Component {

	showWidget = () => {
    window.cloudinary.openUploadWidget({
      cloudName: "df8jfhyew",
      uploadPreset: "eytnlidt"},
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log('Done! Here is the image info: ', result.info);
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

export default ImageUploader;
