import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectIsLoading,
	selectProductsMap,
	fetchProductsAsync,
} from "../../store/products/products.slice";

import ProductCard from "../product-card/product-card";

const SearchResult = () => {
	const dispatch = useDispatch();

	const {tshirts} = useSelector(selectProductsMap);
    const isLoading = useSelector(selectIsLoading);
	console.log(tshirts);

	useEffect(() => {
        console.log('fetchstart')
		dispatch(fetchProductsAsync());
	}, []);

	return (
		<div>
            {tshirts &&
                tshirts.map((tshirt) => (
                    <ProductCard key={tshirt.id} tshirt={tshirt} />
                ))         
            }
		</div>
	);
};

export default SearchResult;
