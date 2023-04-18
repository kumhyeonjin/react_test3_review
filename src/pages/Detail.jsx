import { useParams } from "react-router-dom";
import TabUi from "./TabUi";
import Similar from "./Similar";
import Count from "./Count";

function Detail({ data }) {
  let { id } = useParams();
  id = id - 1;

  let dataList = data.filter((a) => a.category === data[id].category);
  return (
    <section className="detail mw">
      <h1>detail</h1>
      <div className="detailCon">
        <div className="img">
          <img
            src={`${process.env.PUBLIC_URL}/img/${data[id].img}`}
            alt={`${data[id].title}`}
          />
        </div>
        <div className="info">
          <h3>{data[id].title}</h3>
          <p>{data[id].price}</p>
          <p>{data[id].discount}%</p>

          <Count />
        </div>
      </div>
      <TabUi />

      <Similar data={dataList} />
    </section>
  );
}

export default Detail;
