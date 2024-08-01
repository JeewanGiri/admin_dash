import DataTable from "../../component/dataTable/DataTable"
import {GridColDef} from "@mui/x-data-grid"
import { userRows } from "../../data";
import "./user.scss"
import { useState } from "react";
import Add from "../../component/add/Add";
import { useQuery } from "@tanstack/react-query";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];
const User = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://localhost:8800/api/users')
    .then((res) =>
        res.json(),
      ),
  });
  const [open,setOpen]=useState(false);
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      {
        isLoading ? (
          "Loading...."
        ):(
          <DataTable slug="user" columns={columns} rows={userRows}/>
        )}
      {
        open && <Add slug="user" column={columns} setOpen={setOpen}/>
      }
    </div>
  )
}

export default User
