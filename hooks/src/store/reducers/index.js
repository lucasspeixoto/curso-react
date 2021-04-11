export default function reducer(state, action) {
  switch (action.type) {
    case 'numberAdd2':
      return { ...state, number: state.number + 2 }
    case 'login':
      return { ...state, user: { name: action.payload } }
    case 'vezes7':
      return { ...state, number: state.number * 7 }
    case 'div25':
      return { ...state, number: state.number / 25 }
    case 'arredondar':
      return { ...state, number: parseFloat(state.number).toFixed(2) }
    case 'addn':
      return { ...state, number: state.number + parseInt(action.payload) }
    default:
      return state
  }
}