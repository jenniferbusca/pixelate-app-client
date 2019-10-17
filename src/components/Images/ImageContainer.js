import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveImage, removeImage } from '../../actions/imageActions';
import ShowImage from './ShowImage';
import ImageFilters from './ImageFilters';

class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.queryImageState = props.images.find(image => image.id.toString() === this.props.match.params.id)
    this.imageTransformations = this.queryImageState.transformations
    this.state = {
      image: this.queryImageState,
      selectedImageFilter: this.imageTransformations
    };
  };

  handleSave = () => {
    this.props.saveImage(this.state.image, this.state.selectedImageFilter)
  }

  handleRemove = () => {
    this.props.removeImage(this.state.image.id, this.props.user.id, this.props.history)
  }

  handleFilterChange = (e) => {
    const filter = e.target.value
    this.setState({ selectedImageFilter: filter === "none" ? null : filter });
  }

  render() {
    return (
      <div>
        <ShowImage image={this.state.image} selectedImageFilter={this.state.selectedImageFilter} />
        <ImageFilters handleFilterChange={this.handleFilterChange} selectedImageFilter={this.state.selectedImageFilter}/>
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
  { saveImage, removeImage })(ImageContainer);
