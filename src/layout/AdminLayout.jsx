import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex w-screen">
      <div className="flex flex-col gap-y-5 w-1/5 p-10">
        <Link to="/admin" className="text-xl">
          List Products
        </Link>
        <Link to="/admin/add-products" className="text-xl">
          Add Products
        </Link>
        {/* <a href="/admin/edit-products" className="text-xl">
          Edit Products
        </a> */}
      </div>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
