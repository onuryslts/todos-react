import {useState} from 'react'

function List({todo}) {
  const [filterText, setFilterText] = useState("");
  const filtered = todo.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });
  return (
    <div>
      <input
        placeholder="Filter Job"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
      {filtered.map((todo, i) => (
          <li key={i}>{todo.todo}</li>
        ))}
      </ul>
      <p>Total Job : {filtered.length}</p>
    </div>
  )
}

export default List