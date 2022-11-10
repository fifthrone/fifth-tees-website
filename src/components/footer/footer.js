const Footer = () => {
	return (
		<div className="mt-12 sm:mt-24 bg-white dark:bg-neutral-800 shadow-[0_-5px_20px_rgba(0,0,0,0.25)]">
			<div className="max-w-6xl px-10 mx-auto">
				{/* <div className="mt-8 border-t-[1px] border-gray-400 w-full"></div> */}
				<div className="py-8 flex flex-col md:flex-row space-y-16 md:space-y-0 justify-center border1">
					<div className="flex flex-row space-x-8 items-center justify-center w-full border1">
						<img className="h-28 object-contain" src="Avatar.png" alt="" />
						<div className="flex flex-col space-y-2">
							<h2 className="font-semibold text-2xl font-poppins">
								Fifth Tees
							</h2>
              <div className="flex flex-row space-x-3">
                <img className="h-8 object-contain hover:scale-105 duration-500" src="instagramLogo.png" alt="instagram" />
                <img className="h-8 object-contain hover:scale-105 duration-500" src="redbubbleLogo.png" alt="redbubble" />
              </div>
						</div>
					</div>
					<div className="flex flex-row justify-center w-full border1 h-full">
						<div className="flex flex-col space-y-1 items-center justify-center w-full border1 h-full text-gray-600 dark:text-neutral-400">
							<div className="space-y-1">
								<p className="font-semibold text-black dark:text-white">Category</p>
								<p className="font-light">T-Shirts</p>
								<p className="font-light">Stickers</p>
								<p className="font-light">Meme</p>
								<p className="font-light">Pets</p>
							</div>
						</div>
						<div className="flex flex-col space-y-1 items-center justify-center w-full border1 h-full text-gray-600 dark:text-neutral-400">
							<div className="space-y-1">
								<p className="font-semibold text-black dark:text-white">Account</p>
								<p className="font-light">Create Account</p>
								<p className="font-light">Contact Us</p>
								<p className="font-light">Order History</p>
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