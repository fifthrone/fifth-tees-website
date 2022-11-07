import "../../styles/globals.css";

import { Poppins } from "@next/font/google";

import NavBar from "../components/nav-bar/nav-bar";
import Footer from "../components/footer/footer";
import Providers from "./providers";

const poppins = Poppins({ weight: "400" });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<title>Fifth Tees</title>
				<script
					src="https://kit.fontawesome.com/7a727a5d0a.js"
					crossOrigin="anonymous"
					async
				></script>
				{/* <link
					href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500&family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
					rel="stylesheet"
				/> */}
			</head>
			<body>
				<div className={`bg-orange-100 min-h-screen`}>
					<Providers>
						<NavBar />
						{children}
						<Footer />
					</Providers>
				</div>
			</body>
		</html>
	);
}
