import React, { Component } from 'react';

const filterOptions = {
  no_effect: "none",
  contrast: "contrast:100",
  blur: "blur:100",
  pixelate: "pixelate:30",
  auto_brightness: "auto_brightness",
  auto_saturation: "auto_saturation",
  sepia: "sepia:80",
  vignette: "vignette:20",
  black_white: "blackwhite"
}

const ImageFilters = (props) => {
  return (
    <div>
      <select value={props.selectedImageFilter} onChange={props.handleFilterChange}>
        {
          Object.keys(filterOptions).map(
          (k) =>
          <option key={k} value={filterOptions[k]}>{k}</option>
          )
        }
      </select>
    </div>
  );
};


export default ImageFilters
