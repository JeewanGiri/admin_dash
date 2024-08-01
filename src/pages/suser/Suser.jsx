import Single from "../../component/single/Single"
import { singleUser } from "../../data"
import "./suser.scss"
const Suser = () => {
  return (
    <div>
         <Single {...singleUser}/>
    </div>
  )
}

export default Suser
