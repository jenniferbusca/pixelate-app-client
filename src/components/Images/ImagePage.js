import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeImage } from '../../actions/imageActions';

class ImagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: this.props.match.params.id
    };
  };

  handleRemove = () => {
    this.props.removeImage(this.props.match.params.id, this.props.user.id, this.props.history)
  }

  render() {
    let image = this.props.images.filter(image => image.id.toString() === this.state.imageId)
    return (
      <div>
        <canvas ref="canvas" width={640} height={425} />
        <img
          className='largeImage'
          key={image[0].id}
          src={image[0].image_url}
          alt={image[0].id}
        />
        <button onClick={handleRemove => this.handleRemove()}>Remove Image</button>
      </div>
    );
  }
};

export default connect(
  state => ({
    images: state.imagesReducer.images,
    user: state.loginReducer.user
  }),
  { removeImage })(ImagePage);
