import React, { Component } from 'react';

class GalleryComponent extends Component {
  state = {
    index: 0,
  };

  next = () => {
    this.setState(prevState => ({
      index: prevState.index + 1,
    }));
  };

  prev = () => {
    this.setState(prevState => ({
      index: prevState.index - 1,
    }));
  };

  render() {
    const { imgArr } = this.props;
    const { index } = this.state;

    return (
      <div className="container">
        <div className="w-100 text-center mt-2 mb-5">
          <div
            className={`d-flex mb-2 mt-3 ${
              !index ? 'justify-content-end' : 'justify-content-between'
            }`}
          >
            {!!index && (
              <button className="btn btn-outline-info" onClick={this.prev}>
                prev
              </button>
            )}
            {index !== imgArr.length - 1 && (
              <button className="btn btn-outline-info" onClick={this.next}>
                next
              </button>
            )}
          </div>
          <div className="w-50 mx-auto">
            <img
              style={{ userSelect: 'none' }}
              className="w-100"
              src={imgArr[index].original}
              alt="nesto"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryComponent;
