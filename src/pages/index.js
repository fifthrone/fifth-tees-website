import NavBar from "../components/nav-bar/nav-bar";
import Link from "next/link";
import SearchResult from "../components/search-result/search-result";
import "animate.css/animate.min.css";
import { useState, useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import {
	addCollectionAndDocuments,
	addFeatured,
	addHero,
	addProduct,
} from "../utils/firebase/firebase.utils";
import PRODUCTS_DATA from "../products-data.js";
import HeroTransition from "../components/home-page/hero-transition";
import ProductsRow from "../components/home-page/products-row";
import Footer from "../components/footer/footer";
import HeroSection from "../components/home-page/hero-section";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchProductsAsync,
	selectIsLoading,
	fetchAllAsync,
	fetchHeroAndFeaturedAsync,
	selectHero,
	selectFeatured,
} from "../store/products/products.slice";
import FeaturedSection from "../components/home-page/featured-section";

const Home = () => {
	const dispatch = useDispatch();

	const hero = useSelector(selectHero);
	const featured = useSelector(selectFeatured);
	console.log(featured);

	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		dispatch(fetchAllAsync());

		// const addAsync = async () => {
		// 	await addProduct();
		// 	// await addHero();
		// 	// await addFeatured();
		// }
		// addAsync();

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<NavBar />
			{/* <p className="fixed z-40">{scrollPosition}</p> */}
			<div
				id="hero"
				className="flex flex-col items-center justify-center max-w-6xl mx-auto px-10"
			>
				<div className="relative w-full h-[calc(1440px+100vh)] border1">
					<div className="sticky top-0 py-8 border1 w-full h-screen">
						<div className="relative w-full h-full rounded-[50px] border-[15px] border-white flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.25)]">
							<HeroTransition
								className="absolute left-0 top-0 h-[2200px] w-[2200px]"
								scrollPosition={scrollPosition}
								inPosition={550}
								outPosition={1050}
								transitionStyle="slideDiagonal"
							>
								<div className="w-full h-full bg-gradient-to-br from-orange-600 via-blue-300  to-purple-500"></div>
							</HeroTransition>
							{hero.length && (
								<>
									<HeroSection
										scrollPosition={scrollPosition}
										title={hero[0].title}
										products={hero[0].products}
										inPosition={-10}
										outPosition={500}
									/>
									<HeroSection
										scrollPosition={scrollPosition}
										title={hero[1].title}
										products={hero[1].products}
										inPosition={600}
										outPosition={1000}
									/>
									<HeroSection
										scrollPosition={scrollPosition}
										title={hero[2].title}
										products={hero[2].products}
										inPosition={1100}
										outPosition={10000}
									/>
								</>
							)}
							<div className="absolute top-80 text-white text-2xl flex flex-row space-x-5 items-center justify-center">
								<p className="tracking-wide">T-Shirts</p>
								<div className="h-1 w-1 rounded-full bg-white"></div>
								<p className="tracking-wide">Stickers</p>
							</div>
							<Link href={"/products"}> 
								<a className="absolute top-120 text-white text-2xl p-3 px-6 bg-gray-900 rounded-full hover:-translate-y-1 duration-200 shadow-xl hover:shadow-2xl">
									Shop All
								</a>
							</Link>
						</div>
					</div>
					<Parallax
						className="absolute top-[700px] -left-28"
						translateY={[0, -100]}
					>
						<img
							className="h-96 hover:-rotate-1 duration-500"
							src="PizzaSticker.png"
							alt=""
						/>
					</Parallax>
				</div>
			</div>

			{featured.length &&
				featured.map(({ title, products }) => (
					<FeaturedSection key={title} title={title} products={products} />
				))}

			<Footer />
		</>
	);
};

export default Home;
