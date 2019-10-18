import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveImage, removeImage } from '../../actions/imageActions';
import ShowImage from './ShowImage';
import ImageFilters from './ImageFilters';
import { Card,Button, CardColumns} from 'reactstrap';

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
    console.log(this.props.currentImage)
    console.log(this.state.selectedImageFilter)
    this.props.saveImage(this.props.currentImage, this.state.selectedImageFilter, this.props.history)
  }

  handleRemove = () => {
    this.props.removeImage(this.props.currentImage.id, this.props.currentImage.user_id, this.props.history)
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
      <CardColumns>
        <Card>
          <ShowImage image={currentImage} selectedImageFilter={this.state.selectedImageFilter} />
        </Card>
        <Card>
          <ImageFilters handleFilterChange={this.handleFilterChange} selectedImageFilter={this.state.selectedImageFilter}/>
          <Button onClick={handleSave => this.handleSave()}>Save Changes</Button>
        </Card>
        <Card>
          <label>Options:</label>
          <Button onClick={handleRemove => this.handleRemove()}>Delete Image</Button>
        </Card>
      </CardColumns>
    );
  }
};

export default connect(
  state => ({
    images: state.imagesReducer.images,
    currentImage: state.imagesReducer.currentImage
  }),
  { saveImage, removeImage })(withRouter(ImageContainer));
