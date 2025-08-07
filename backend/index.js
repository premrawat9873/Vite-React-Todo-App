const {createTodo, updateTodo} = require("./types");
const {todoModel} = require("./db");

const express= require("express");
const app = express();
const cors = require("cors");
app.use(cors({
  origin: "http://localhost:5173" // Adjust this to your frontend's URL
}));

const port = 3000;
app.use(express.json());

app.post("/todo", async (req, res) => {
  const todo = req.body;
  const parsedTodo = createTodo.safeParse(todo);
  if (!parsedTodo.success) {
    res.status(400).json({
      message: "Invalid todo data"
    });
    return;
  }
      // Here you would typically save the todo to a database
      await todoModel.create({
        title: todo.title,
        description: todo.description,
        completed: false
      })
      res.json({
        message: "Todo created successfully", 
      })
});

app.get("/todos", async (req, res) => {
      const todos = await todoModel.find();
      res.json({
        todos
      });
});


app.put("/completed", async (req, res) => {
      const parsed = req.body;
      
      const parsedUpdate = updateTodo.safeParse(parsed);
      if (!parsedUpdate.success) {
        res.status(400).json({
          message: "Invalid update data"
        });
        return;
      }
    
    const result = await todoModel.updateOne(
    { _id: req.body.id },
    { completed: true }
  );

      if (result.modifiedCount === 0) {
        res.status(404).json({
          message: "Todo not found"
        });
        return;
      }

      res.json({
        message: "Todo updated successfully"
      });
});

app.put("/notcompleted", async (req, res) => {
  const parsed = req.body;

  const parsedUpdate = updateTodo.safeParse(parsed); 
  if (!parsedUpdate.success) {
    res.status(400).json({
      message: "Invalid not completed data"
    });
    return;
  }

  const result = await todoModel.updateOne(
    { _id: req.body.id },
    { completed: false }
  );

  if (result.modifiedCount === 0) {
    res.status(404).json({
      message: "Todo not found"
    });
    return;
  }

  res.json({
    message: "Todo marked as not completed"
  });
});









app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`);
});