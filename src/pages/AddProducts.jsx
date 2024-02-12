import CustomInput from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function AddProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();

  async function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("price", price);

    // const productsBody = {
    //   title: title,
    //   description: description,
    //   image: image,
    //   price: price,
    // };

    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
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
          <p>Image</p>
          <CustomInput
            type={"file"}
            name="image"
            onChange={(event) => setImage(event.target.files[0])}
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
