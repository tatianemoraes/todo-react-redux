import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getAllTasks, addTask, deleteTask, editTaskId } from '../../store/modules/tasks/actions';

import { FaPlus, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'; 
import { Container } from './style';

function AddTask() {

  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.tasks);
  
  const [taskes, setTaskes] = useState([]);
  const [newTask, setNewTask] = useState({});
  const [enableEdition, setEnableEdition] = useState(false);
  const [edition, setEdition]= useState('');

  useEffect(() => {
    dispatch(getAllTasks())
  },[dispatch])

  useEffect(() => {
    setTaskes(tasks)
  },[tasks]);


  function addNewTask() {
    if(!newTask.description) {
      return;
    }
    dispatch(addTask(newTask))
    setNewTask({description: '', status: false});
  }

  function removeTask(idTask) {
    dispatch(deleteTask(idTask))
  }

  function editTask(task) {
    setEnableEdition(!enableEdition)
    if(enableEdition){
      if(task.description) {
        dispatch(editTaskId(task))
        setEdition('');
      }
    }
  }

    return (
      <Container>
        <div className='container-tasks'>

          <div className='add-task'>
            <button 
              className='btn-add' 
              onClick={() => addNewTask()}
            >
              <FaPlus color="#fff" />
            </button>
            <input 
              type="text" 
              onChange={(e) => setNewTask({
                description: e.target.value,
                status: false
              })}
              value={newTask.description}
            />
          </div>

          <div className="list-tasks">
            {
              taskes && taskes.map(task => (
                <div className="item-task" key={task.id}>
                  <div className="task">
                    <input 
                      type="checkbox" 
                      name="" 
                      id="" 
                      value={task.status ? 'checked' : ''}
                    />
                    <input
                      className={`description-item_${task.id}`} 
                      value={
                        task.description || edition
                      } 
                      disabled={!enableEdition}
                      onChange={(e) => 
                        setEdition(
                          task.description !== e.target.value 
                          ? e.target.value : task.description
                        )
                      }
                    />
                    
                  </div>

                  <div className="actions-item">
                    <button onClick={() => editTask(task)}>
                      <FaRegEdit/>
                    </button>
                    <button onClick={() => removeTask(task.id)}>
                      <FaRegTrashAlt/>
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </Container>
  );
}

export default AddTask;