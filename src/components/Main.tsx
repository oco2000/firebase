import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Todo } from "./Todo";
import { IconButton, List, Stack, TextField } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

function Main() {
  const { user } = useContext(AuthContext);
  const [todos, setTodos] = useState<any[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleToggle = async (todo: any) => {
    const todoRef = doc(db, "users", user.uid, "todos", todo.id);

    await updateDoc(todoRef, {
      done: !todo.done
    });
  }

  const handleDelete = async (todo: any) => {
    await deleteDoc(doc(db, "users", user.uid, "todos", todo.id));
  }

  const handleNewTodo = async () => {
    if (newTodo) {
      await addDoc(collection(db, "users", user.uid, "todos"), {
        title: newTodo,
        done: false
      });
      setNewTodo('');
    }
  }

  useEffect(() => {
    const q = query(collection(db, "users", user.uid, "todos"));
    return onSnapshot(q, (querySnapshot) => {
      const _todos: any[] = [];
      querySnapshot.forEach((doc) => {
        const todo = doc.data();
        _todos.push({
          ...todo,
          id: doc.id
        });
      });
      setTodos(_todos);

    })
  }, [])

  return <Stack sx={{ margin: '20px auto', width: '70%' }} direction={"column"}>
    <form className="todoForm" onSubmit={(e) => { handleNewTodo(); e.preventDefault(); return false }}>
      <TextField
        sx={{ width: '80%' }}
        label="New Todo"
        value={newTodo}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setNewTodo(event.target.value);
        }}
      />
      <IconButton type="submit" aria-label="add">
        <CheckIcon />
      </IconButton>
    </form>
    <List>
      {todos.map((todo: any) => (
        <Todo
          key={todo.id}
          value={todo}
          onToggle={() => handleToggle(todo)}
          onDelete={() => handleDelete(todo)}
        ></Todo>)
      )}
    </List>
  </Stack>
}

export { Main }