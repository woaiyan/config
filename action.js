let nextId = 0
export const add = name => {
  return {
    type: 'ADD',
    id: nextTodoId++,
    name
  }
}

export const filter = filter => {
  return {
    type: 'FILTER',
    filter
  }
}

export const toggle = id => {
  return {
    type: 'TOGGLE',
    id
  }
  
  export const delete = id => {
  return {
    type: 'DELETE',
    id
  }
}
