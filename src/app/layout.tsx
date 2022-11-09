import "../../styles/globals.css";

import { Poppins } from "@next/font/google";

import NavBar from "../components/nav-bar/nav-bar";
import Footer from "../components/footer/footer";
import Providers from "./providers";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	variable: "--font-poppins",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={poppins.variable}>
			<head>
				<title>Fifth Tees</title>
				<script
					src="https://kit.fontawesome.com/7a727a5d0a.js"
					crossOrigin="anonymous"
					async
				></script>
			</head>
			<body className="bg-orange-100 dark:bg-neutral-900">
				<Providers>
					<NavBar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
