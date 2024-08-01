import { useState } from "react";
import DataTable from "../../component/dataTable/DataTable";
import Add from "../../component/add/Add";
import { products } from "../../data";
import {GridColDef} from "@mui/x-data-grid";
import "./product.scss"
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];
const Product = () => {
  const [open,setOpen]=useState(false);
  return (
    <div className="product">
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="product" columns={columns} rows={products}/>
      {
        open && <Add slug="product" column={columns} setOpen={setOpen}/>
      }
    </div>
  )
}

export default Product
