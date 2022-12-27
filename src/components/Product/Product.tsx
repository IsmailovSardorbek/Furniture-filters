import "./product.css";

type ProductProps = {
  title: string;
  id: number | string;
  price: number | string;
  imgUrl: string;
};

export default function Product({ title, id, price, imgUrl }: ProductProps) {
  return (
    <div className="product-card" key={id}>
      <div className="image-top">
        <img src={imgUrl} className="card-img" />
      </div>
      <div className="card-body">
        <h5 className="title">{title}</h5>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}
