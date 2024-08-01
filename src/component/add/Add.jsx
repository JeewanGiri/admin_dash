import { SetStateAction } from "react";
import "./add.scss";
import { GridColDef } from "@mui/x-data-grid"
type Props={
    slug:string,
    column:GridColDef[];
    setOpen:React.Dispatch<SetStateAction<Boolean>>;
}
const Add = (props:Props) => {
    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        //add new item
        // axios.post(`/api/${slug}s`,{})

    }
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={()=>props.setOpen(false)}>❎</span>
        <h1>Add New {props.slug}</h1>
        <form onSubmit={handleSubmit}>
            {
                props.column.filter((item)=>item.field !=="id" && item.field !== "img").map((columns)=>{
                    return(
                    <div className="item">
                      <label>{columns.headerName}</label>
                      <input type={columns.type} placeholder={columns.field}/>
                    </div>
                    )
                })
            }
            <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Add
