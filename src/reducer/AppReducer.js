const AppReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction.id !== action.payload
        )
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      }
    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: initialState.filters
      }
    default:
      return state
  }
}

const initialState = {
  transactions: [],
  filters: {
    text: '',
    category: 'all',
    type: 'all',
    startDate: null,
    endDate: null
  }
}

export default AppReducer