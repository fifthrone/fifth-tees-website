import Link from "next/link";
import Image from "next/image";
import FooterLink from "./footer-link";

const Footer = () => {
	return (
		<div className="mt-12 sm:mt-24 bg-white dark:bg-neutral-800 shadow-[0_-1px_20px_rgba(0,0,0,0.25)] z-40">
			<div className="max-w-6xl px-10 mx-auto">
				{/* <div className="mt-8 border-t-[1px] border-gray-400 w-full"></div> */}
				<div className="py-8 flex flex-col md:flex-row space-y-16 md:space-y-0 justify-center border1">
					<div className="flex flex-row space-x-8 items-center justify-center w-full border1">
						<Image
							className="h-28 w-auto object-contain"
							src="/Avatar.png"
							alt=""
							width={200}
							height={200}
						/>
						<div className="flex flex-col space-y-2">
							<h2 className="font-semibold text-2xl font-poppins">
								Fifth Tees
							</h2>
							<div className="flex flex-row space-x-3">
								<a
									href="https://www.instagram.com/fifthtees/"
									rel="noopener noreferrer"
									target="_blank"
								>
									<Image
										className="h-8 w-auto object-contain hover:scale-105 duration-500"
										src="/instagramLogo.png"
										alt="instagram"
										width={50}
										height={50}
									/>
								</a>
								<a
									href="https://FifthTees.redbubble.com"
									rel="noopener noreferrer"
									target="_blank"
								>
									<Image
										className="h-8 w-auto object-contain hover:scale-105 duration-500"
										src="/redbubbleLogo.png"
										alt="redbubble"
										width={50}
										height={50}
									/>
								</a>
							</div>
						</div>
					</div>
					<div className="flex flex-row justify-center w-full border1 h-full">
						<div className="flex items-center justify-center w-full border1 h-full text-gray-600 dark:text-neutral-400">
							<div className="flex flex-col items-start justify-center space-y-1">
								<p className="font-semibold text-black dark:text-white">
									Category
								</p>
								<FooterLink href="/t-shirts">T-Shirts</FooterLink>
								<FooterLink href="/stickers">Stickers</FooterLink>
								<FooterLink href="/products" tag="Meme">Meme</FooterLink>
								<FooterLink href="/products" tag="Animal">Pets &amp; Animals</FooterLink>
							</div>
						</div>
						<div className="flex items-center justify-center w-full border1 h-full text-gray-600 dark:text-neutral-400">
							<div className="flex flex-col items-start justify-center space-y-1">
								<p className="font-semibold text-black dark:text-white">
									Account
								</p>
								<FooterLink href="/account">Create Account</FooterLink>
								{/* <FooterLink href="/">Contact Us</FooterLink>
								<FooterLink href="/">Order History</FooterLink> */}
							</div>
						</div>
					</div>
				</div>
				<div className="h-8"></div>
			</div>
		</div>
	);
};

export default Footer;
