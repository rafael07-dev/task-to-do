import { useTaskSearch } from '../hooks/useTaskSearch';
import { useTask } from '../hooks/useTask';
import '../components/Header.css'

export function Header(){

    const {searchTerm, setSearchTerm} = useTaskSearch()
    const {setFilter} = useTask()
    
    function handleChangeInput(e) {
        setSearchTerm(e.target.value)
        setFilter('')
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(e);   
    }

    return(
        <header className="header">
            <h1>Tasks To Do!</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChangeInput} value={searchTerm} className='search-bar' type="text"  placeholder='Buscar tareas'/>
            </form>

            <button className='button'>Cerrar Session</button>
        </header>
    )
}