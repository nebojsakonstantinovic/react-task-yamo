import React from 'react';
import GalleryComponent from './SingleProductComponent/GalleryComponent';
import CommentsContainer from '../comments/CommentsContainer';

const SingleProductComponent = props => {
  const { item, error, loading } = props;

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (!item) {
    return <div>No such item</div>;
  }

  return (
    <div className="container-fluid px-0">
      <h2 className="text-center mb-4 p-2 bg-info text-white">
        Single Product Page
      </h2>
      <div className="container">
        <p>
          <b>Product description:</b>
        </p>
        <p>{item.description}</p>
        <p>
          <b>Product specification:</b>
        </p>
        <p>{item.specification}</p>
        <p>
          <b>Price:</b> {item.price} €
        </p>
        <div className="row">
          {item.images.map(image => (
            <a
              key={image.original}
              className="col-4"
              href={image.original}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-100" src={image.original} alt="nesto" />
            </a>
          ))}

          <GalleryComponent imgArr={item.images} />

          <CommentsContainer {...props} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductComponent;
