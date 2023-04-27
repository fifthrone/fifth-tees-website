"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

import HeroTransition from "./hero-transition";
import HeroSection from "./hero-section";
import BgFadeOutTransition from "./bg-fade-out-transtion";
import FadeInOutTransition from "./fade-in-out-transition";

import { useDispatch } from "react-redux";

import { setTag } from "../../store/tag/tag.slice";
import { Product } from "../../ts/types";

interface HeroProps {
	hero: {
		title: string;
		products: Product[];
	}[];
}

const Hero = (props: HeroProps) => {
	const { hero } = props;

	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const position = window.pageYOffset;
		// console.log(position)
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
			<div className="fixed overflow-hidden inset-0 hidden tall:block -z-40">
				<HeroTransition
					className="-z-40 left-0 top-0 h-[300vh] w-[300vw]"
					scrollPosition={scrollPosition}
					inPosition={550}
					outPosition={1050}
					transitionStyle="slideDiagonal"
				>
					<BgFadeOutTransition
						scrollPosition={scrollPosition}
						startPosition={1640}
						endPosition={1940}
					>
						<div className="-z-40 w-full h-full bg-gradient-to-br from-orange-600 via-blue-300  to-purple-500 dark:from-orange-800 dark:via-blue-700 dark:to-purple-700"></div>
					</BgFadeOutTransition>
				</HeroTransition>
			</div>
			<div className="hidden tall:block w-full relative h-[calc(1440px+100vh)]">
				<div className="absolute h-full w-full top-0 flex items-center justify-center">
					<div className="relative xmax-w-6xl overflow-hidden xborder w-full h-full">
						<Parallax
							className="absolute top-[60vh] left-[max(-6rem,50vw-41.5rem)] z-40"
							// speed={100}
							translateY={["50vh", "-70vh"]}
						>
							<FadeInOutTransition
								scrollPosition={scrollPosition}
								inPosition={-500}
								outPosition={400}
							>
								<Image
									className="h-96 scale-50 sm:scale-75 md:scale-100 hover:-rotate-1 duration-500 w-auto"
									src="/hero/PizzaGhost.png"
									width={450}
									height={540}
									alt=""
								/>
							</FadeInOutTransition>
						</Parallax>
						<Parallax
							className="absolute top-[35vh] right-[max(-8rem,50vw-43.5rem)] -z-0"
							speed={0}
						>
							<FadeInOutTransition
								scrollPosition={scrollPosition}
								inPosition={-500}
								outPosition={400}
							>
								<Image
									className="h-96 scale-50 sm:scale-75 md:scale-100 rotate-6 hover:-rotate-1 duration-500 w-auto"
									src="/hero/Dogtor.png"
									width={300}
									height={300}
									alt=""
									priority
								/>
							</FadeInOutTransition>
						</Parallax>
						<Parallax
							className="absolute top-[calc(600px+70vh)] left-[max(-8rem,50vw-43.5rem)] -z-0"
							translateY={["90vh", "-150vh"]}
							// speed={100}
						>
							<FadeInOutTransition
								scrollPosition={scrollPosition}
								inPosition={750}
								outPosition={1000}
							>
								<Image
									className="h-96 scale-50 sm:scale-75 md:scale-100 rotate-6 hover:-rotate-1 duration-500 w-auto"
									src="/hero/Terrier.png"
									width={300}
									height={300}
									alt=""
								/>
							</FadeInOutTransition>
						</Parallax>
						<Parallax
							className="absolute top-[calc(600px+40vh)] right-[max(-6rem,50vw-41.5rem)] -z-0"
							speed={20}
						>
							<FadeInOutTransition
								scrollPosition={scrollPosition}
								inPosition={750}
								outPosition={1000}
							>
								<Image
									className="h-96 scale-50 sm:scale-75 md:scale-100 rotate-0 hover:-rotate-1 duration-500 w-auto"
									src="/hero/Husky.png"
									width={300}
									height={300}
									alt=""
								/>
							</FadeInOutTransition>
						</Parallax>
						<Parallax
							className="absolute top-[calc(1100px+60vh)]  left-[max(-14rem,50vw-53.5rem)] -z-0"
							speed={50}
						>
							<FadeInOutTransition
								scrollPosition={scrollPosition}
								inPosition={1250}
								outPosition={10000}
							>
								<Image
									className="h-96 scale-50 sm:scale-75 md:scale-100 rotate-6 hover:-rotate-1 duration-500 w-auto"
									src="/hero/Beer.png"
									width={300}
									height={300}
									alt=""
								/>
							</FadeInOutTransition>
						</Parallax>
						<Parallax
							className="absolute top-[calc(1100px+60vh)] right-[max(-6rem,50vw-41.5rem)] -z-0"
							speed={70}
						>
							<FadeInOutTransition
								scrollPosition={scrollPosition}
								inPosition={1250}
								outPosition={10000}
							>
								<Image
									className="h-96 scale-50 sm:scale-75 md:scale-100 rotate-0 hover:-rotate-1 duration-500 w-auto"
									src="/hero/IceCream.png"
									width={300}
									height={300}
									alt=""
								/>
							</FadeInOutTransition>
						</Parallax>

						<Parallax
							className="absolute top-[calc(1100px+60vh)] right-[max(10rem,50vw-15.5rem)] -z-0"
							speed={120}
						>
							<FadeInOutTransition
								scrollPosition={scrollPosition}
								inPosition={1250}
								outPosition={10000}
							>
								<Image
									className="h-48 scale-50 sm:scale-75 md:scale-100 rotate-0 hover:-rotate-1 duration-500 w-auto"
									src="/hero/IceCreamMelt.png"
									width={300}
									height={300}
									alt=""
								/>
							</FadeInOutTransition>
						</Parallax>
					</div>
				</div>
				<div className="sticky top-0 w-full h-screen xborder">
					<div className="h-12 md:h-16"></div>
					<div className="relative xbg-red-200 h-[calc(100vh-3rem)] md:h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center py-0">
						<div className="xborder h-full w-full flex items-center justify-center px-0 sm:px-0 py-0 relative">
							<div className="max-h-[800px] xborder xmax-w-6xl w-full h-full xborder overflow-visible relative">
								{hero.length >= 3 && (
									<>
										<HeroSection
											scrollPosition={scrollPosition}
											title={hero[0].title}
											products={hero[0].products}
											inPosition={-500}
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
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="xborder hidden tall:block relative w-full h-[calc(1440px+100vh)]">
				<div className="tall:sticky xborder top-0 w-full md:h-screen min-1h-[800px]">
					<div className="h-12 md:hidden"></div>
					<div className="sm:py-8 h-[calc(100vh-3rem)] md:h-screen">
						<div className="relative w-full h-full max-h-[1000px] sm:rounded-[50px] border1 border-white flex items-center justify-center overflow-hidden sm:shadow-[0_0_20px_rgba(0,0,0,0.5)]">
							<HeroTransition
								className="absolute left-0 top-0 h-[300vh] w-[300vw]"
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
										inPosition={-500}
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
						</div>
					</div>
				</div>
				<Parallax
					className="absolute top-[700px] -left-28"
					translateY={[0, -100]}
				>
					<Image
						className="h-96 hover:-rotate-1 duration-500 w-auto"
						src="/PizzaSticker.png"
						width={450}
						height={540}
						alt=""
					/>
				</Parallax>
			</div> */}
			<div className="w-full h-12 md:h-16 tall:hidden"></div>
			{hero.map(({ title, products }, index) => (
				<div
					key={title}
					className="tall:hidden zsm:py-4 0py-4 border1 w-full h-[600px] mb-3 z-40"
				>
					<div
						className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br ${
							[
								"from-orange-600 to-blue-300 dark:from-orange-800 dark:to-blue-700",
								"from-blue-300 to-purple-300 dark:from-blue-700 dark:to-purple-700",
								"from-purple-300 to-green-300 dark:from-purple-700 dark:to-green-700",
								"from-green-300 to-red-300 dark:from-green-700 dark:to-red-700",
								"from-red-300 to-amber-300 dark:from-red-700 dark:to-amber-700",
							][index]
						}`}
					>
						{hero.length && (
							<>
								<HeroSection
									scrollPosition={scrollPosition}
									title={title}
									products={products}
									inPosition={-500}
									outPosition={1000000}
								/>
							</>
						)}
					</div>
				</div>
			))}
		</>
	);
};

export default Hero;
