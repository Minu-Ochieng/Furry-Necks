import "./index.css";

const ProductCard = ({ image, title, price, category, description }) => {
  return (
    <div className="card">
      <img src={image} alt={`${title} `} />
      <h2>{price}</h2>
      <p className="category">{category}</p>
      <p className="description">{description}</p>
    </div>
  );
};
export default ProductCard;
