import CustomInput from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useEffect } from "react";

function AddProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();

  function onFormSubmit(event) {
    event.preventDefault();
    console.log(title, description, price);
  }

  return (
    <div className="p-10">
      <p className="text-2xl mb-10">Add Products</p>
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
        <Button className="text-lg" text={"Submit"} onClick={onFormSubmit} />
      </form>
    </div>
  );
}

export default AddProducts;
