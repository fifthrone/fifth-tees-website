"use client";

import "../../styles/globals.css";

import { Provider } from "react-redux";
import { store } from "../store/store";
import { ParallaxProvider } from "react-scroll-parallax";
import NavBar from "../components/nav-bar/nav-bar";
import Footer from "../components/footer/footer";

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
			</head>
			<body>
				<div className="bg-orange-100 min-h-screen">
					<Provider store={store}>
						<ParallaxProvider>
                            <NavBar />
                            {children}
                            <Footer />
                            </ParallaxProvider>
					</Provider>
				</div>
			</body>
		</html>
	);
}
