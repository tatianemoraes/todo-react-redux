import { TYPES } from './types';
import { INITIAL_STATE } from './states';

const { GET_TASKS, ADD_TASK, REMOVE_TASK, EDIT_TASK } = TYPES;

export const tasks = (prevState = INITIAL_STATE, action) => {

  switch (action.type) {
    
    case GET_TASKS:
      return { ...prevState, tasks: action.payload };

    case ADD_TASK:
      return { ...prevState,  tasks: [ ...prevState.tasks, action.payload ] };

    case REMOVE_TASK: 
    const newArray = prevState.tasks.filter(task => task.id !== action.payload);
    
    if(newArray.length > 0) {
      return { ...prevState,  tasks: newArray };
    } else {
      return { ...prevState, prevState, tasks:INITIAL_STATE.tasks };
    } 

    case EDIT_TASK: 
    const newTask = [...prevState];
    return 
    
  
    default:
      return prevState;

  }

};