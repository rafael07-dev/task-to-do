import { useEffect, useState } from "react";
import { useTask } from "./useTask";

export function useTaskSearch() {
    const [searchTerm, setSearchTerm] = useState('')
    const {state, addToFilteredTask} = useTask()
    const tasks = state.task;

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const filteredTasks = tasks.filter(item => {
                if (searchTerm === ' ') {
                    return
                }
                
                if (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.description.toLowerCase().includes(searchTerm.toLowerCase())) {

                    return {
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        done: item.done
                    }
                }
            }
        );

            addToFilteredTask(filteredTasks)
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [searchTerm, tasks, addToFilteredTask])

    return {searchTerm, setSearchTerm}
}