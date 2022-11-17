import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function EditProductPage(props) {
  const [productToUpdate, setProductToUpdate] = useState(null);

  console.log({ productToUpdate });

  //TODO: Write code to set the productToUpdateState
  //with the product data from the location.
  //
  //Use useEffect so that when the location changes
  //you get the product data from the location. See
  //ViewProductPage.js to check

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { productToUpdate } = location.state;
      setProductToUpdate(productToUpdate);
    }
  }, [location]);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setProductToUpdate({ ...productToUpdate, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  if (!productToUpdate) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={productToUpdate.name}
      />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditProductPage;
