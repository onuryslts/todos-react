import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import {} from "../todo/style.css";
function TODO() {
  
  const [todo, setTodo] = useState([
    {
      todo: "Kitap Oku",
    },
    {
      todo: "Yemek ye",
    },
    {
      todo: "Kod yaz",
    },
  ]);

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <div id="container">
      <h1>todos</h1>
      <Form addTodo={setTodo} todo={todo} />
      <List todo={todo}/>
    </div>
  );
}

export default TODO;
