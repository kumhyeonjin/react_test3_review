import { useState } from "react";
import ProductCard from "./ProductCard";

function Shop({ data }) {
  let [dataList, setDataList] = useState(data);

  return (
    <section className="shop mw">
      <h2>Shop the Latest</h2>
      <nav className="btnCon">
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => a._id - b._id))
          }
          data-sortName=""
        >
          상품등록순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => b._id - a._id))
          }
          data-sortName=""
        >
          최신등록순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => a.price - b.price))
          }
          data-sortName=""
        >
          낮은가격순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => b.price - a.price))
          }
          data-sortName=""
        >
          높은가격순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => b.discount - a.discount))
          }
          data-sortName=""
        >
          높은 할인률
        </button>
      </nav>
      <ul className="shopCon">
        {dataList.map((item) => {
          return (
            <li className="shopList" key={item._id}>
              <ProductCard data={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Shop;
