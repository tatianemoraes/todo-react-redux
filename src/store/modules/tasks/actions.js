import { api } from '../../../services/api';
import { TYPES } from './types';

const  { GET_TASKS, ADD_TASK, REMOVE_TASK, EDIT_TASK } = TYPES;

export function getTasks(tasks) {
  return {
    type: GET_TASKS, 
    payload:tasks
  }
}

export function getAllTasks() {
  return async (dispatch) => {
    const { data } = await api.get('/tasks');
    dispatch(getTasks(data));
  }
}

export function addTask(value) {
  return async (dispatch) => {
    const { data: task } = await api.post('/tasks', value);

    dispatch({
       type:ADD_TASK,
       payload: task
    });
  }
}

export function deleteTask(idTask) {
  return async (dispatch) => {
     await api.delete(`/tasks/${idTask}`); 

    dispatch({
      type: REMOVE_TASK,
      payload: idTask
    });
  }
}

export function editTaskId(task) {
  return async (dispatch) => {
    await api.put(`/tasks/${task.id}`, task);

    // dispatch({
    //   type: EDIT_TASK, 
    //   payload: task
    // })
  }
}