import CustomInput from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Products from "../mock/products.json";

function EditProducts() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = Products.find((product) => product.id === id);

  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);

  function onFormSubmit(event) {
    event.preventDefault();
    console.log(title, description, price);
    navigate("/admin");
  }

  return (
    <div className="p-10">
      <p className="text-2xl mb-10">Edit Products</p>
      <form className="flex flex-col gap-y-5">
        <div className="flex gap-x-2">
          <p>Title</p>
          <CustomInput
            type={"text"}
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="flex gap-x-2">
          <p>Description</p>
          <CustomInput
            type={"text"}
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="flex gap-x-2">
          <p>Price</p>
          <CustomInput
            type={"text"}
            name="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <Button className="text-lg" text={"Update"} onClick={onFormSubmit} />
      </form>
    </div>
  );
}

export default EditProducts;
