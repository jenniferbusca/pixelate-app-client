import React from 'react';

const filterOptions = {
  "No Effect": "none",
  "Auto Brightness": "auto_brightness",
  "Auto Saturation": "auto_saturation",
  "Black & White": "blackwhite",
  "Blur": "blur:100",
  "Cartoonify": "cartoonify",
  "Contrast: Light": "contrast:50",
  "Contrast: Heavy": "contrast:100",
  "Grayscale": "grayscale",
  "Oil Paint": "oil_paint:75",
  "Ombre": "gradient_fade:20",
  "Pixelate: Light": "pixelate:10",
  "Pixelate: Heavy": "pixelate:30",
  "Sepia": "sepia:80",
  "Sharpen": "sharpen:300",
  "Tilt Shift": "tilt_shift:20",
  "Vignette": "vignette:10"
}

const ImageFilters = (props) => {
  return (
    <select value={props.selectedImageFilter || "none"} onChange={props.handleFilterChange}>
      {
        Object.keys(filterOptions).map(
        (k) =>
        <option key={k} value={filterOptions[k]}>{k}</option>
        )
      }
    </select>
  );
};


export default ImageFilters
