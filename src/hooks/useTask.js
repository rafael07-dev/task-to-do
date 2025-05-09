import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function useTask() {
    const context = useContext(TaskContext)

    return context
}