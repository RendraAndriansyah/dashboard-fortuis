import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import theme from "./services/customTheme";
import store from "./redux/store";
import routes from "./routes";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<ChakraProvider theme={theme}>
					<RouterProvider router={routes} />
				</ChakraProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
