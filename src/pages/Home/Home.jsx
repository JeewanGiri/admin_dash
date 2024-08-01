import BarChartBox from "../../component/barChartBox/BarChartBox"
import BigChartBox from "../../component/bigChartBox/BigChartBox"
import ChartBox from "../../component/chartBox/ChartBox"
import PieChartBox from "../../component/pieChart/PieChart"
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data"
import TopBox from "../../topBox/TopBox"
import "./home.scss"
const Home = () => {
  return (
    <div className="home">
      <div className="box box1"><TopBox/></div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home
