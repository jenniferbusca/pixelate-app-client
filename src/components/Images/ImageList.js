import React from 'react';

class ImageList extends React.Component {
  listImages = () => {
    return this.props.images.map( image =>
      <img
        className='thumbnail'
        key={image.id}
        src={image.url}
        alt={image.id}
      />
    )
  }

  render() {
    return (
      <div>
        {this.listImages()}
      </div>
    )
  }
}

export default ImageList;
