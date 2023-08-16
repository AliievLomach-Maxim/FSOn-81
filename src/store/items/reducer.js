const initialState = { items: null, filteredItems: null }

export const itemsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'createItems':
			return { ...state, items: payload }
		case 'updateItems':
			return { ...state, items: [...state.items, payload] }
		case 'deleteItems':
			return { ...state, items: null }

		default:
			return state
	}
}
