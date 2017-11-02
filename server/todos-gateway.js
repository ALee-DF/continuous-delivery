module.exports = function todosGateway(collection) {
  return {
    async find(where) {
      return collection.find(where).toArray()
    },
    async create(newTodo) {
      collection.insertOne(newTodo)
      return newTodo
    }
  }
}
