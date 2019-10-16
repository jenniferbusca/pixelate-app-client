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

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    const img = this.refs.image
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 800, 600)
      ctx.font = "40px Courier"
      ctx.fillText("Hello!", 350, 75)
    }
  }


  handleRemove = () => {
    this.props.removeImage(this.props.match.params.id, this.props.user.id, this.props.history)
  }

  render() {
    let image = this.props.images.filter(image => image.id.toString() === this.state.imageId)
    return (
      <div>
        <canvas ref="canvas" width={800} height={600}>
        <img ref="image"
          className='hidden'
          key={image[0].id}
          src={image[0].image_url}
          alt={image[0].id}
        />
      </canvas>
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
