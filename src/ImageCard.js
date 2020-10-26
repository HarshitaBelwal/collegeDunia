import React from "react";
class ImageCard extends React.Component {
  render() {
const {collegeName , urls} = this.props.colleges;

    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}} >
        <img 
        ref={this.imageRef} 
          alt={collegeName}
          src={urls.regular} 
        />
      </div>
    );
  }
}

export default ImageCard;
