import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeImage } from '../../actions/imageActions';
import ShowImage from './ShowImage';
import ImageFilters from './ImageFilters';

class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: this.props.match.params.id,
      selectedImageFilter: null
    };
  };

  handleSave = () => {
    this.props.saveImage(this.state.imageId, this.state.selectedImageFilter)
  }

  handleRemove = () => {
    this.props.removeImage(this.props.match.params.id, this.props.user.id, this.props.history)
  }

  handleFilterChange = (e) => {
    const filter = e.target.value
    this.setState({ selectedImageFilter: filter === "none" ? null : filter });
  }

  render() {
    let image = this.props.images.filter(image => image.id.toString() === this.state.imageId)[0]
    return (
      <div>
        <ShowImage image={image} selectedImageFilter={this.state.selectedImageFilter} />
        <ImageFilters handleFilterChange={this.handleFilterChange} />
        <button onClick={handleSave => this.handleSave()}>Save Image</button>
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
  { removeImage })(ImageContainer);
