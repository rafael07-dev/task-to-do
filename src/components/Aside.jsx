import '../components/Aside.css'
import { useTask } from '../hooks/useTask'

export function Aside() {
    const {filter, setFilter} = useTask()

    return (
        <aside className="aside">
            <h3>TAREAS</h3>
            <div>
                <ul>
                    <li className={filter != 'all' ? '': 'active'} onClick={() => setFilter('all')}><p>Todas</p></li>
                    <li onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active': ''}><p>Pendientes</p></li>
                    <li onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active': ''}><p>Completadas</p></li>
                </ul>
            </div>
        </aside>
    )
}