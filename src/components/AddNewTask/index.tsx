import { PlusCircle } from "phosphor-react";
import { ClipboardText } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task } from "../Task";
import {
  NoTasksLoggedContainer,
  NavContainer,
  TasksContainer,
  FormContainer,
  MainContainer,
} from "./style";

// type TaskListProps = [typeof createdTask];

interface TaskProps {
  id: number;
  content: string;
  checked: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<TaskProps[]>([
    {
      id: 1,
      content: "Exemplo de tarefa",
      checked: true,
    },
  ]);

  const [task, setTask] = useState<TaskProps>({
    id: 1,
    content: "",
    checked: false,
  });

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();

    setTasks([...tasks, task]);
    setTask({ id: 1, content: "", checked: false });
  }

  function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {
    e.target.setCustomValidity("");

    const newTask = {
      id: Math.random(),
      content: e.target.value,
      checked: false,
    };

    setTask(newTask);
  }

  function handleNewTaskInvalid(e: InvalidEvent<HTMLInputElement>) {
    e.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function toggleChecked(id: number, checked: boolean) {
    const index = tasks.findIndex((task) => task.id === id);
    const newList = tasks;
    newList[index].checked = !checked;
    setTasks([...newList]);
  }

  const completedTasks = tasks.filter((task) => task.checked === true);
  const completedTaskAmount = completedTasks.length;

  const isNewTaskEmpty = task.content.length === 0;

  return (
    <MainContainer>
      <FormContainer onSubmit={handleCreateNewTask}>
        <input
          type="text"
          id="addTask"
          placeholder="Adicione uma nova tarefa"
          value={task.content}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type="submit" disabled={isNewTaskEmpty}>
          Criar <PlusCircle size={16} weight="bold" />
        </button>
      </FormContainer>

      <TasksContainer>
        <NavContainer>
          <p id="created">
            Tarefas criadas <span>{tasks.length}</span>
          </p>
          <p id="finished">
            Concluidas{" "}
            <span>
              {completedTaskAmount} de {tasks.length}
            </span>
          </p>
        </NavContainer>

        {tasks.length === 0 && (
          <NoTasksLoggedContainer>
            <ClipboardText size={56} opacity={0.7} />
            <div>
              <p className="bold">Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </NoTasksLoggedContainer>
        )}

        {tasks.map((task) => {
          return (
            <Task
              content={task.content}
              checked={task.checked}
              onDelete={deleteTask}
              onCheck={toggleChecked}
              id={task.id}
              key={task.id}
            />
          );
        })}
      </TasksContainer>
    </MainContainer>
  );
}
