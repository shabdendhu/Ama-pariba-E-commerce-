import React, { useState, useEffect } from "react";
import axios from "axios";
import { get_product_list } from "../../constants/api";
import ProductCard from "./ProductCard";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios.get(get_product_list).then((response) => {
			setProducts(response.data.data);
		});
	}, []);
	return (
		<>
			<div>
				{products.map((product, index) => (
					<ProductCard key={index} data={product} />
				))}
			</div>
		</>
	);
};

export default Products;
