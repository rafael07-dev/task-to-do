import { useTask } from "../hooks/useTask"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import '../components/TodoList.css'

export const TodoList = () => {

  const {state, deleteTask, addToCompleted, filter} = useTask()

  let taskToShow;

  if (filter === 'all') {
    taskToShow = state.task;
  }else if (filter === 'pending'){
    taskToShow = state.pendingTask
  }else if(filter == 'completed'){
    taskToShow = state.completedTask
  }else if(filter == ''){
    taskToShow = state.filteredTask
  }

  return (
    <div className="tasks-list">
      <h2>{filter == 'all' ? 'Todas mis tareas': filter === 'pending' ?  'Tareas pendientes' : 'Tareas completadas'}</h2>
        {taskToShow.map((item, index) => (
          <div key={index} className='task'>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.done ? 'Finalizada' : 'Pendiente'}</p>
            <a className="button" onClick={()=> addToCompleted(item)}><FontAwesomeIcon icon={faCheck} /></a>
            <a className="button" onClick={()=> deleteTask(item)}><FontAwesomeIcon icon={faTrash} /></a>
          </div>
        ))
        }
    </div>
  )
}