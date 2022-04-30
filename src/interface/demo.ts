export interface ITodo {
  id: string,
  completed: boolean
  text: string,
}

export interface IDemo {
  todos: ITodo[],
  loading: boolean
}