import Cards from "../components/Cards";
import Products from "../mock/products.json";

function Home() {
  return (
    <div className="m-5">
      <nav className="flex w-full justify-between">
        <p className="text-3xl">React Product</p>
        <div className="flex gap-x-2">
          <a className="text-xl text-blue-600" href="/login">
            Login
          </a>
          <p>|</p>
          <a className="text-xl text-blue-600" href="/signup">
            Signup
          </a>
        </div>
      </nav>
      <div className="flex w-full items-center justify-between p-10">
        <p className="text-bold text-2xl">Products</p>
        <div className="flex gap-x-5">
          <p>Search</p>
          <input type="search" className="border-2 border-black" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {Products.map((product, i) => {
          const { title, description, image, price } = product;
          return (
            <Cards
              title={title}
              description={description}
              price={price}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
