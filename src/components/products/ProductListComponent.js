import React from 'react';
import { Link } from 'react-router-dom';

function ProductListComponent(props) {
  const { ids, itemsObj, loading, error } = props.products;

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div className="container-fluid px-0">
      <h2 className="text-center mb-4 p-2 bg-info text-white">Product list</h2>
      <div className="container">
        <ul className="list-unstyled row">
          {ids.map(id => (
            <li className="col-12 col-md-4 mb-5" key={id}>
              <Link
                style={{ color: '#000', border: '1px solid rgba(0,0,0,.125)' }}
                className="wrapper w-100 h-100 d-block"
                to={`/SingleProduct/${id}`}
              >
                <p className="text-center">{itemsObj[id].title}</p>
                <div className="d-flex flex-column" style={{ height: '336px' }}>
                  <img
                    className="d-block m-auto"
                    src={itemsObj[id].images[0].thumb}
                    alt="nesto"
                  />
                  <p
                    className="text-center bg-info text-white mb-0"
                    style={{ marginLeft: '-1px', marginRight: '-1px' }}
                  >
                    Price: {itemsObj[id].price} €
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductListComponent;
