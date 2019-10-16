import React, { Component } from 'react';

class ImageFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageFilter: ''
    };

    this.filterOptions = {
      contrast: "e_contrast:100",
      blur: "e_blur:100",
      pixelate: "e_pixelate:30",
      auto_brightness: "e_auto_brightness",
      auto_saturation: "e_auto_saturation",
      sepia: "e_sepia:80",
      vignette: "e_vignette:20"
    }
  }

  handleChange = (e) => {
    debugger
    this.setState({ selectedImageFilter: e.target.value });
  }

  render() {
    return (
      <div>
        <select onChange={this.handleChange}>
          {Object.keys(this.filterOptions).map((k) =>
            <option key={k} value={this.filterOptions[k]}>{k}</option>)}
        </select>
      </div>
    )
  }

}


export default ImageFilters
