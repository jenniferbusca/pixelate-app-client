import React, { Component } from 'react';
import ImageUploader from '../Images/ImageUploader'
import { connect } from 'react-redux';
import { fetchImages } from '../../actions/imageActions'
import ImageList from '../Images/ImageList'


class DashboardPage extends Component {

  componentDidMount() {
    this.props.fetchImages()
  }

  handleLoading = () => {
    if(this.props.loading) {
      return (
        <div>
          <p>Loading Images...</p>
        </div>
      )
    } else {
      return <ImageList images={this.props.images} />
    }
  }

  render() {
    return (
      <div>
        {this.handleLoading()}
        <ImageUploader />
      </div>
    )
  }
}

export default connect(state => ({ images: state.images }), { fetchImages })(DashboardPage);
