import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProductOperations } from './duck';
import SingleProductComponent from './SingleProductComponent';

class SingleProductContainer extends Component {
  componentDidMount() {
    const { item, getItems } = this.props;
    if (!item) {
      getItems();
    }
  }

  render() {
    return <SingleProductComponent {...this.props} />;
  }
}

const mapStateToProps = (state, props) => {
  const { id } = props.match.params;
  const { itemsObj, error, loading } = state.products;
  return { item: itemsObj[id], error, loading };
};

const mapDispatchToProps = {
  getItems: ProductOperations.getItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
