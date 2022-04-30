import { AppDispatch } from './../store'
import { setTodos, setLoading } from 'redux/reducers/demo'
import DemoApi from 'services/demo.service'

export const getTodos: any = (
  text: string
) => async (dispatch: AppDispatch) => {
  const demoAPI = new DemoApi()
  dispatch(setLoading(true))
  const response = await demoAPI.getTodoList()
  if (response.status === 200) {
    dispatch(setTodos(response.data))
    dispatch(setLoading(false))
  }
}
