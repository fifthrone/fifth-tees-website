import "../../styles/globals.css";

import { Provider } from "react-redux";
import { store } from "../store/store";
import Head from "next/head";
import Script from "next/script";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {

	return (
		<>
			<Head>
				<title>Fifth Tees</title>
			</Head>
			<Script
				src="https://kit.fontawesome.com/7a727a5d0a.js"
				crossorigin="anonymous"
			/>
			<div className="bg-orange-100 min-h-screen">
				<Provider store={store}>
					<ParallaxProvider>
						<Component {...pageProps} />
					</ParallaxProvider>
				</Provider>
			</div>
		</>
	);
}

export default MyApp;
