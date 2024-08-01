import Single from "../../component/single/Single"
import { singleProduct } from "../../data"
import "./sproduct.scss"
const Sproduct = () => {
  return (
    <div>
      <Single {...singleProduct}/>
    </div>
  )
}

export default Sproduct
