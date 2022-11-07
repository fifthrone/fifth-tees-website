"use client";

import { Provider } from "react-redux";
import { store } from "../store/store";
import { ParallaxProvider } from "react-scroll-parallax";
import UserSubscriber from "../components/account/user-subscriber";

export default function Providers({ children }) {
	return (
		<Provider store={store}>
			<ParallaxProvider>
				<UserSubscriber>{children}</UserSubscriber>
			</ParallaxProvider>
		</Provider>
	);
}
