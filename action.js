let nextId = 0
export const add = name => {
  return {
    type: 'ADD',
    id: nextTodoId++,
    name:name
  }
}

export const filter = filter => {
  return {
    type: 'FILTER',
    filter
  }
}
  
 export const delete = id => {
   return {
    type: 'DELETE',
    id
  }
}
