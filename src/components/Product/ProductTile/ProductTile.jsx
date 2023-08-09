import React from "react";
import "./ProductTile.scss";
import { Link } from "react-router-dom";

const ProductTile = (props) => {
  return (
    <Link to={`${props.id}`}>
      <div className="productTile">
        <img src={props.image} alt="item iamge" height="264" />
        <div className="product-brief">
          <div>
            <u>Title:</u> {props.name}
          </div>
          <div>
            <u>Short Desc:</u> {props.desc}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductTile;
