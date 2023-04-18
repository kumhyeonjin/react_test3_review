import { Link } from "react-router-dom";

function ProductCard({ data }) {
  return (
    <div className="productCard">
      <div className="img">
        <img src={`${process.env.PUBLIC_URL}/img/${data.img}`} alt="" />
        <span className="add">add to cart</span>

        {data.discount == 0 ? (
          ""
        ) : (
          <span className="discount">{data.discount}% </span>
        )}
      </div>
      <div>
        <p>{data.title}</p>
        <p>{data.price}</p>
      </div>
      <Link to={`/Detail/${data._id}`} className="btnAdd">
        go to detail
      </Link>
    </div>
  );
}

export default ProductCard;
