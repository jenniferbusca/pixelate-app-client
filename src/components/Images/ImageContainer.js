import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveImage, removeImage } from '../../actions/imageActions';
import ShowImage from './ShowImage';
import ImageFilters from './ImageFilters';

class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageFilter: null
    };
  };

  componentDidMount() {
    this.setSelectedImageFilter(this.props.currentImage.transformations);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentImage.id !== this.props.currentImage.id) {
      this.setSelectedImageFilter(this.props.currentImage.transformations);
    }
  }

  handleSave = () => {
    this.props.saveImage(this.props.currentImage, this.state.selectedImageFilter)
  }

  handleRemove = () => {
    this.props.removeImage(this.props.currentImage.id, this.props.user.id, this.props.history)
  }

  setSelectedImageFilter = (selectedImageFilter) => {
    this.setState({ selectedImageFilter });
  }

  handleFilterChange = (e) => {
    const filter = e.target.value === "none" ? null : e.target.value;
    this.setSelectedImageFilter(filter);
  }

  render() {
    const { currentImage } = this.props;
    return (
      <div>
        <ShowImage image={currentImage} selectedImageFilter={this.state.selectedImageFilter} />
        <ImageFilters handleFilterChange={this.handleFilterChange} selectedImageFilter={currentImage.transformations}/>
        <button onClick={handleSave => this.handleSave()}>Save Image</button>
        <button onClick={handleRemove => this.handleRemove()}>Remove Image</button>
      </div>
    );
  }
};

export default connect(
  state => ({
    images: state.imagesReducer.images,
    user: state.loginReducer.user,
    currentImage: state.imagesReducer.currentImage
  }),
  { saveImage, removeImage })(ImageContainer);
