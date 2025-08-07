
export function Todo({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo._id}>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>

            {/* Completed status */}
            <button >
              {todo.completed ? "Completed ✅" : "Not Completed ❌"}
            </button>

            {/* Toggle button */}
            {todo.completed ? (
              <button
                onClick={() =>
                  fetch("http://localhost:3000/notcompleted", {
                    method: "PUT",
                    body: JSON.stringify({ id: todo._id }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                }
              >
                Mark as Not Completed
              </button>
            ) : (
              <button
                onClick={() =>
                  fetch("http://localhost:3000/completed", {
                    method: "PUT",
                    body: JSON.stringify({ id: todo._id }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                }
              >
                Mark as Completed
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
