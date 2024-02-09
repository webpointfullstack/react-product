import CustomInput from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Products from "../mock/products.json";

function EditProducts() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  async function getProductById() {
    const response = await fetch("http://localhost:3000/products/" + id);
    const data = await response.json();
    setTitle(data.product.title);
    setDescription(data.product.description);
    setPrice(data.product.price);
    setImage(data.product.image);
  }

  useEffect(() => {
    getProductById();
  }, []);

  async function onFormSubmit(event) {
    event.preventDefault();

    const productsBody = {
      title: title,
      description: description,
      image: image,
      price: price,
    };

    const response = await fetch("http://localhost:3000/products/" + id, {
      method: "PUT",
      body: JSON.stringify(productsBody),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

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
          <p>Image</p>
          <CustomInput
            type={"text"}
            name="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
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
