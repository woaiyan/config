const List = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          text: action.name
        }
      ]
    case 'DELETE':
      return state.map(item =>
        (item.id !== acion.id
      )
    case 'FILTER':
      return action.filter
    default:
      return state
  }
}
