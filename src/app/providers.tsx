"use client";

import { Provider } from "react-redux";
import { store, persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ParallaxProvider } from "react-scroll-parallax";
import UserSubscriber from "../components/account/user-subscriber";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider enableSystem={true} attribute="class">
					<ParallaxProvider>
						<UserSubscriber>{children}</UserSubscriber>
					</ParallaxProvider>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}
