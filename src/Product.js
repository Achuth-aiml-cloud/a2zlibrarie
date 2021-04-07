import React from "react";
import "./Product.css";

function Product({ id ,price ,title, image, author, rating }) {
	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>By </small>
					<strong>{author}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p className="fa fa-star checked" style={{ color: "yellow" }}></p>
						))}
				</div>
			</div>
			<img src={image} alt="book image" />
			<button style={{paddingLeft: "8px", paddingRight: "8px" }}>Add to Bag</button>
                  <br/>
                  <button style={{paddingLeft: "8px", paddingRight: "8px" }}>Download</button>
		</div>
	);
}

export default Product;
