import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function ViewProductPage(props) {
  const [product, setProduct] = useState(null);

  //Ask React for the location object
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  //Use useEffect so that when the location changes
  //we update our product state with the product defined
  //by the link
  useEffect(() => {
    if (location.state) {
      //Get the product from the state object
      //from the location
      const { product } = location.state;
      setProduct(product);
    }
  }, [location]);

  console.log({ product, location });

  //When the component first renders, we won't
  //have the product yet
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>
        product{id}
        {product.name}
      </h2>
      <p>£{product.price}</p>
      {/* <button onClick={() => navigate(`/product/:${id}/edit`)}>Edit</button> */}
    </div>
  );
}

export default ViewProductPage;
