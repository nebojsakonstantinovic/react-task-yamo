import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ProductOperations } from './duck';
import ProductListComponent from './ProductListComponent';

class ProductListContainer extends Component {
  componentDidMount() {
    const { products, getItems } = this.props;
    const { ids } = products;

    // will fetch new data on reload, no need to get them every time becouse data are the same
    if (!ids.length) {
      getItems();
    }
  }

  render() {
    return <ProductListComponent {...this.props} />;
  }
}

const mapStateToProps = state => {
  const { products } = state;
  return { products };
};

const mapDispatchToProps = {
  getItemsStart: ProductOperations.getItemsStart,
  getItemsFail: ProductOperations.getItemsFail,
  getItems: ProductOperations.getItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
