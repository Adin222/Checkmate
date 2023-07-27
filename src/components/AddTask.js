export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (task.id) {
      const date = new Date();
      const updateTask = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updateTask);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: event.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
    event.target.task.value = "";
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          value={task.name || ""}
          type="text"
          name="task"
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "ADD"}</button>
      </form>
    </section>
  );
};
