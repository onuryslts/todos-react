import { useState, useEffect } from "react";

function Form({ addTodo, todo }) {
  const [form, setForm] = useState({ todo: "" });

  useEffect(() => {
    setForm({ todo: "" });
  }, [todo]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.todo === "") {
      return false;
    }
    addTodo([...todo, form]);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div>
          <input
            name="todo"
            placeholder="What needs to be done?"
            value={form.todo}
            onChange={onChangeInput}
          />
        </div>
        
      </div>
    </form>
  );
}

export default Form;
