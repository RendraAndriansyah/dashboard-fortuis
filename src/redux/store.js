import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./slices.js/userSlice";
const persistConfig = {
	key: "root",
	storage,
};

const persistReducers = persistReducer(persistConfig, userSlice);

const store = configureStore({
	reducer: persistReducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
