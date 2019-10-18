import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveImage, removeImage } from '../../actions/imageActions';
import ShowImage from './ShowImage';
import ImageFilters from './ImageFilters';
import { CardGroup, Col, Card,Button, CardHeader, CardBody, CardText} from 'reactstrap';

class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageFilter: null
    };
  };

  componentDidMount() {
    console.log(this.props.currentImage.transformations, this.state.selectedImageFilter)
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
      <CardGroup>
        <Card>
          <ShowImage image={currentImage} selectedImageFilter={this.state.selectedImageFilter} />
        </Card>
        <Col md="4">
            <Card>
              <CardHeader>FILTER EFFECTS</CardHeader>
              <CardBody>
                <CardText>
                  <ImageFilters handleFilterChange={this.handleFilterChange} selectedImageFilter={this.state.selectedImageFilter}/>
                </CardText>
                <Button onClick={handleSave => this.handleSave()}>Save Changes</Button>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>DELETE IMAGE</CardHeader>
              <CardBody>
                <CardText>
                  No longer want this image?
                </CardText>
                <Button onClick={handleRemove => this.handleRemove()}>Delete Image</Button>
              </CardBody>
            </Card>
          </Col>
        </CardGroup>
    );
  }
};

export default connect(
  state => ({
    images: state.imagesReducer.images,
    currentImage: state.imagesReducer.currentImage
  }),
  { saveImage, removeImage })(withRouter(ImageContainer));
