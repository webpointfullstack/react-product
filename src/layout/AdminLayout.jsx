import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex w-screen">
      <div className="flex flex-col gap-y-5 w-1/5 p-10">
        <a href="/admin" className="text-xl">
          List Products
        </a>
        <a href="/admin/add-products" className="text-xl">
          Add Products
        </a>
        <a href="/admin/edit-products" className="text-xl">
          Edit Products
        </a>
      </div>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
