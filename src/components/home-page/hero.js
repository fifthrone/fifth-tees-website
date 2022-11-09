"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

import HeroTransition from "../home-page/hero-transition"
import HeroSection from "../home-page/hero-section"

const Hero = (props) => {
    const { hero } = props;

	const [scrollPosition, setScrollPosition] = useState(0);

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
			<div className="hidden tall:block relative w-full h-[calc(1440px+100vh)] border1">
				<div className="tall:sticky top-0 sm:py-8 0py-4 border1 w-full h-screen min-1h-[800px]">
					<div className="relative w-full h-full 1rounded-[50px] sm:rounded-[50px] border-0 border-white flex items-center justify-center overflow-hidden sm:shadow-[0_0_20px_rgba(0,0,0,0.5)]">
						<HeroTransition
							className="absolute left-0 top-0 h-[2200px] w-[2200px]"
							scrollPosition={scrollPosition}
							inPosition={550}
							outPosition={1050}
							transitionStyle="slideDiagonal"
						>
							<div className="w-full h-full bg-gradient-to-br from-orange-600 via-blue-300  to-purple-500 dark:from-orange-800 dark:via-blue-700 dark:to-purple-700"></div>
						</HeroTransition>
						{hero.length >= 3 && (
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
						<div className="absolute top-[32%] text-white text-2xl flex flex-row space-x-5 items-center justify-center border1 font-poppins">
							<p className="tracking-wide">T-Shirts</p>
							<div className="h-1 w-1 rounded-full bg-white"></div>
							<p className="tracking-wide">Stickers</p>
						</div>
						<Link href={"/products"}>
							<p className="absolute top-[41%] text-white text-2xl p-2 px-6 bg-gray-900 rounded-full hover:-translate-y-1 duration-200 shadow-xl hover:shadow-2xl border1">
								Shop All
							</p>
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
			{hero.map(({ title, products }, index) => (
				<div
					key={title}
					className="tall:hidden sm:py-8 0py-4 border1 w-full h-[750px]"
				>
					<div
						className={`relative w-full h-full 1rounded-[50px] sm:rounded-[50px] border-0 border-white flex items-center justify-center overflow-hidden sm:shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-gradient-to-br ${
							[
								"from-orange-600 to-blue-300",
								"from-blue-300 to-purple-300",
								"from-purple-300 to-green-300",
								"from-green-300 to-red-300",
								"from-red-300 to-amber-300",
							][index]
						}`}
					>
						{hero.length && (
							<>
								<HeroSection
									scrollPosition={scrollPosition}
									title={title}
									products={products}
									inPosition={-10}
									outPosition={1000000}
								/>
							</>
						)}
						<div className="absolute top-[35%] text-white text-xl sm:text-2xl flex flex-row space-x-5 items-center justify-center border1 font-poppins">
							<p className="tracking-wide">T-Shirts</p>
							<div className="h-1 w-1 rounded-full bg-white"></div>
							<p className="tracking-wide">Stickers</p>
						</div>
						<Link href={"/products"}>
							<p className="absolute top-[42%] text-white text-2xl p-2 px-6 bg-gray-900 rounded-full hover:-translate-y-1 duration-200 shadow-xl hover:shadow-2xl border1">
								Shop All
							</p>
						</Link>
					</div>
				</div>
			))}
		</>
	);
};

export default Hero;
