import React from "react";
import {
  Link
} from "react-router-dom";

export default function SingleProduct(props) {
  return (
    <div className="col-4 my-3">
      <div className="card">
      <Link to={`/product/`+props.pid}>
        <img
          src={props.imgSrc}
          className="card-img-top"
          alt="..."
          height="250px"
          width="250px"
        />
        </Link>
        <div className="card-body">
          <div style={{textAlign:"center"}}>
            <h5 className="card-title">{props.name}</h5>
          </div>
          <div className="my-2" style={{textAlign:"center"}}>
            <strong>{props.price}</strong>
          </div>

          <div className="row justify-content-center">
          <Link to={`/product/`+props.pid} className="btn btn-dark  text-center mx-1">
              Details
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
