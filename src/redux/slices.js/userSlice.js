import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		data: false,
	},
	reducers: {
		updateUser(state, action) {
			delete action.payload.state;
			return {
				...state,
				data: action.payload,
			};
		},

		clearUser(state) {
			return {
				...state,
				data: false,
			};
		},
	},
});

export const { updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
