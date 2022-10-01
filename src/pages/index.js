import NavBar from "../components/nav-bar/nav-bar.component";
import SearchResult from "../components/search-result/search-result.component";
import "animate.css/animate.min.css";
import { useState, useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
import PRODUCTS_DATA from "../products-data.js";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Transition } from "react-transition-group";
import HeroTransition from "../components/hero-transition/hero-transition";
import ProductCardClean from "../components/product-card/product-card-clean.component";
import { useIsOverflow } from "../components/hook/useIsOverflow";
import ProductsRow from "../components/home-page/products-row.component";
import Footer from "../components/footer/footer.component";

const Home = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const ref = useRef(null);
	const isOverflow = useIsOverflow(ref, () => {});
	const ref2 = useRef(null);
	const isOverflow2 = useIsOverflow(ref2, () => {});
	const ref3 = useRef(null);
	const isOverflow3 = useIsOverflow(ref3, () => {});

	const [isSection1CardsEntered, setIsSection1CardsEntered] = useState(false);
	const [isSection2CardsEntered, setIsSection2CardsEntered] = useState(false);
	const [isSection3CardsEntered, setIsSection3CardsEntered] = useState(false);

	const scroll = (ref, scrollOffset) => {
		ref.current.scrollLeft += scrollOffset;
	};

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

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
							<HeroTransition
								className="absolute top-28 text-white text-[120px] md:text-[160px]"
								scrollPosition={scrollPosition}
								inPosition={-10}
								outPosition={500}
								transitionStyle="slideOpacityVertical"
								delay={0}
							>
								Meme
							</HeroTransition>
							<HeroTransition
								className="absolute top-28 text-white text-[120px] md:text-[160px]"
								scrollPosition={scrollPosition}
								inPosition={600}
								outPosition={1000}
								transitionStyle="slideOpacityVertical"
								delay={0}
							>
								Dog
							</HeroTransition>
							<HeroTransition
								className="absolute top-28 text-white text-[120px] md:text-[160px]"
								scrollPosition={scrollPosition}
								inPosition={1100}
								outPosition={10000}
								transitionStyle="slideOpacityVertical"
								delay={0}
							>
								Foodie
							</HeroTransition>
							<div className="absolute top-80 text-white text-2xl flex flex-row space-x-5 items-center justify-center">
								<p className="tracking-wide">T-Shirts</p>
								<div className="h-1 w-1 rounded-full bg-white"></div>
								<p className="tracking-wide">Stickers</p>
							</div>
							<button className="absolute top-120 text-white text-2xl p-3 px-6 bg-gray-900 rounded-full hover:-translate-y-1 duration-200 shadow-xl hover:shadow-2xl">
								Shop All
							</button>

							{isOverflow && isSection1CardsEntered && (
								<>
									<button
										onClick={() => scroll(ref, -120)}
										className="absolute bottom-36 left-2 bg-gray-100 z-40 rounded-full p-2 bg-opacity-10"
									>
										<i className="fa-lg fa-solid fa-angle-left"></i>
									</button>
									<button
										onClick={() => scroll(ref, 120)}
										className="absolute bottom-36 right-2 bg-gray-100 z-40 rounded-full p-2 bg-opacity-10"
									>
										<i className="fa-lg fa-solid fa-angle-right"></i>
									</button>
								</>
							)}

							{isOverflow2 && isSection2CardsEntered && (
								<>
									<button
										onClick={() => scroll(ref2, -120)}
										className="absolute bottom-36 left-2 bg-gray-100 z-40 rounded-full p-2 bg-opacity-10"
									>
										<i className="fa-lg fa-solid fa-angle-left"></i>
									</button>
									<button
										onClick={() => scroll(ref2, 120)}
										className="absolute bottom-36 right-2 bg-gray-100 z-40 rounded-full p-2 bg-opacity-10"
									>
										<i className="fa-lg fa-solid fa-angle-right"></i>
									</button>
								</>
							)}

							{isOverflow3 && isSection3CardsEntered && (
								<>
									<button
										onClick={() => scroll(ref3, -120)}
										className="absolute bottom-36 left-2 bg-gray-100 z-40 rounded-full p-2 bg-opacity-10"
									>
										<i className="fa-lg fa-solid fa-angle-left"></i>
									</button>
									<button
										onClick={() => scroll(ref3, 120)}
										className="absolute bottom-36 right-2 bg-gray-100 z-40 rounded-full p-2 bg-opacity-10"
									>
										<i className="fa-lg fa-solid fa-angle-right"></i>
									</button>
								</>
							)}

							<div
								className="absolute bottom-0 w-full border1 p-6 flex flex-row space-x-6 overflow-x-scroll scroll-smooth scrollbar-hide"
								ref={ref}
							>
								<HeroTransition
									className="h-72 w-full min-w-[180px]"
									scrollPosition={scrollPosition}
									inPosition={-10}
									outPosition={500}
									transitionStyle="slideHorizontal"
									delay={0}
									mountOnEnter
									unmountOnExit
								>
									<ProductCardClean
										id={1001}
										imageUrl="heroImages\dogtorTshirt.jpg"
										imageUrl2="heroImages\dogtorTshirt2.png"
										price={120}
										titleLine1="Trust Me,"
										titleLine2="I'm a dogtor"
										productType="T-Shirts"
									/>
								</HeroTransition>
								<HeroTransition
									className="h-72 w-full min-w-[180px]"
									scrollPosition={scrollPosition}
									inPosition={-10}
									outPosition={500}
									transitionStyle="slideHorizontal"
									delay={50}
									mountOnEnter
									unmountOnExit
								>
									<ProductCardClean
										id={1002}
										imageUrl="heroImages\pizzaGhostSticker.jpg"
										imageUrl2="heroImages\pizzaGhostSticker2.png"
										price={8}
										titleLine1="Pizza Ghost"
										titleLine2="Extra Melting Cheese"
										productType="Stickers"
									/>
								</HeroTransition>
								<HeroTransition
									className="h-72 w-full min-w-[180px]"
									scrollPosition={scrollPosition}
									inPosition={-10}
									outPosition={500}
									transitionStyle="slideHorizontal"
									delay={100}
									mountOnEnter
									unmountOnExit
									onEntered={() => {
										setIsSection1CardsEntered(true);
									}}
									onExit={() => {
										setIsSection1CardsEntered(false);
									}}
								>
									<ProductCardClean
										id={1003}
										imageUrl="heroImages\geezTshirt.jpg"
										imageUrl2="heroImages\geezTshirt2.png"
										price={120}
										titleLine1="Geez"
										titleLine2="Catchphrase"
										productType="T-shirts"
									/>
								</HeroTransition>
							</div>
							<div
								className="absolute bottom-0 w-full border1 p-6 flex flex-row space-x-6 overflow-x-scroll scroll-smooth scrollbar-hide"
								ref={ref2}
							>
								<HeroTransition
									className="h-72 w-full min-w-[180px]"
									scrollPosition={scrollPosition}
									inPosition={600}
									outPosition={1000}
									transitionStyle="slideHorizontal"
									delay={0}
									mountOnEnter
									unmountOnExit
								>
									<ProductCardClean
										id={1004}
										imageUrl="heroImages\shibaInuTshirt.jpg"
										imageUrl2="heroImages\shibaInuTshirt2.png"
										price={120}
										titleLine1="Shiba Inu"
										titleLine2="Dog Lover"
										productType="T-Shirts"
									/>
								</HeroTransition>
								<HeroTransition
									className="h-72 w-full min-w-[180px]"
									scrollPosition={scrollPosition}
									inPosition={600}
									outPosition={1000}
									transitionStyle="slideHorizontal"
									delay={50}
									mountOnEnter
									unmountOnExit
								>
									<ProductCardClean
										id={1005}
										imageUrl="heroImages\huskyTshirt.jpg"
										imageUrl2="heroImages\huskyTshirt2.png"
										price={120}
										titleLine1="Siberian Husky"
										titleLine2="Dog Lover"
										productType="T-Shirts"
									/>
								</HeroTransition>
								<HeroTransition
									className="h-72 w-full min-w-[180px]"
									scrollPosition={scrollPosition}
									inPosition={600}
									outPosition={1000}
									transitionStyle="slideHorizontal"
									delay={100}
									mountOnEnter
									unmountOnExit
									onEntered={() => {
										setIsSection2CardsEntered(true);
									}}
									onExit={() => {
										setIsSection2CardsEntered(false);
									}}
								>
									<ProductCardClean
										id={1006}
										imageUrl="heroImages\staffordshireBullTerrierTshirt.jpg"
										imageUrl2="heroImages\staffordshireBullTerrierTshirt2.png"
										price={120}
										titleLine1="Staffordshire"
										titleLine2="Bull Terrier Lover"
										productType="T-Shirts"
									/>
								</HeroTransition>
							</div>
							<div
								className="absolute bottom-0 w-full border1 p-6 flex flex-row space-x-6 overflow-x-scroll scroll-smooth scrollbar-hide"
								ref={ref3}
							>
								<HeroTransition
									className="h-72 w-full min-w-[180px]"
									scrollPosition={scrollPosition}
									inPosition={1100}
									outPosition={10000}
									transitionStyle="slideHorizontal"
									delay={0}
									mountOnEnter
									unmountOnExit
								>
									<ProductCardClean
										id={1007}
										imageUrl="heroImages\friendsBeerTshirt.jpg"
										imageUrl2="heroImages\friendsBeerTshirt2.png"
										price={120}
										titleLine1="Friends and Beer"
										titleLine2="Is All I Need"
										productType="T-Shirts"
									/>
								</HeroTransition>
								<HeroTransition
									className="h-72 w-full min-w-[180px]"
									scrollPosition={scrollPosition}
									inPosition={1100}
									outPosition={10000}
									transitionStyle="slideHorizontal"
									delay={50}
									mountOnEnter
									unmountOnExit
								>
									<ProductCardClean
										id={1008}
										imageUrl="heroImages\meltIceCreamTshirt.jpg"
										imageUrl2="heroImages\meltIceCreamTshirt2.png"
										price={120}
										titleLine1="You Melt"
										titleLine2="My Ice Cream"
										productType="T-Shirts"
									/>
								</HeroTransition>
								<HeroTransition
									className="h-72 w-full min-w-[180px]"
									scrollPosition={scrollPosition}
									inPosition={1100}
									outPosition={10000}
									transitionStyle="slideHorizontal"
									delay={100}
									mountOnEnter
									unmountOnExit
									onEntered={() => {
										setIsSection3CardsEntered(true);
									}}
									onExit={() => {
										setIsSection3CardsEntered(false);
									}}
								>
									<ProductCardClean
										id={1009}
										imageUrl="heroImages\coffeeMattersTshirt.jpg"
										imageUrl2="heroImages\coffeeMattersTshirt2.png"
										price={120}
										titleLine1="Coffee"
										titleLine2="Matters"
										productType="T-Shirts"
									/>
								</HeroTransition>
							</div>
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
			<div className="max-w-6xl px-10 mx-auto mt-8">
				<h1 className="pb-2 text-5xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Featured</h1>
			</div>
			<ProductsRow />
			<div className="relative max-w-6xl px-10 mx-auto mt-8">
				<h1 className="pb-2 text-5xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Best Selling</h1>
			</div>
			<ProductsRow />
			<div className="max-w-6xl px-10 mx-auto mt-8">
				<h1 className="pb-2 text-5xl font-poppins font-bold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Meme is life</h1>
			</div>
			<ProductsRow />
			<Footer />
		</>
	);
};

export default Home;
