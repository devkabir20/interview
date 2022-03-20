import axios from "axios";
import { useState } from "react";

const QNONE = () => {
  const [items, setItems] = useState([]);
  axios
    .get("https://dummyjson.com/products")
    .then((res) => {
      // console.log(res.data.products.images);
      setItems(res.data.products);
      // console.log(res.data.products.images); 
      
    })
    .catch((err) => {
      console.log("Failed", err);
    });

  

  return (
    <>
      <div className="container my-5 ">
        <div className="row">
          {items.map((item) => {
            return (
              <>
                {console.log()}
                <div className="col-md-4" key={item.id}>
                  <div className="card my-2">
                    <img
                      className="card-img-top"
                      src={item.images[0]}
                      alt={item.brand}
                    />
                    <div className="card-body ">
                      <h5 className="card-title pb-3">
                        {item.title} <span>{item.category}</span>
                      </h5>
                      <p className="card-text pb-1">{item.description}</p>
                      <div className="d-flex justify-content-between pb-3">
                        <span>${item.price}</span>
                        <span>Rating: {item.rating}</span>
                      </div>
                      <div className="pb-1"> Stock: {item.stock}</div>
                      <a href="/" class="btn btn-primary ">
                        Buy
                      </a>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QNONE;
