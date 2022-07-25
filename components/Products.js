import React from "react";
import { ProductStyles } from "../styles/ProductStyle";
import Link from "next/link";

const Products = ({ product }) => {
	//Extract the info from props

	const { title, price, image, slug } = product.attributes;

	return (
		<ProductStyles>
			<Link href={`/products/${slug}`}>
				<div>
					<img src={image.data.attributes.formats.small.url}></img>
				</div>
			</Link>
			<h2>{title}</h2>
			<h3>{price}</h3>
		</ProductStyles>
	);
};

export default Products;
