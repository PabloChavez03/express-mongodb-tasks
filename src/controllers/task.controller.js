import Task from "../models/Task";

export const renderTasks = (req, res) => {
  Task.find()
    .lean()
    .then((tasks) => {
      res.render("index", {
        tasks,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createTask = (req, res) => {
  const { title, description } = req.body;
  const task = Task({ title, description });
  task
    .save()
    .then(() => res.redirect("/"))
    .catch((error) => res.status(409).send(error));
};

export const renderTaskEdit = (req, res) => {
  const { id } = req.params;
  Task.findById(id)
    .lean()
    .then((task) => {
      res.render("edit", {
        task,
      });
    })
    .catch((error) => res.status(409).send(error));
};

export const editTask = (req, res) => {
  const { id } = req.params;

  Task.findByIdAndUpdate(id, req.body)
    .then(() => res.redirect("/"))
    .catch((error) => res.status(409).send(error));
};

export const deleteTask = (req, res) => {
  const { id } = req.params;
  Task.findByIdAndDelete(id)
    .then(() => res.redirect("/"))
    .catch((error) => res.status(409).send(error));
};

export const taskToogleDone = (req, res) => {
  const { id } = req.params;
  Task.findById(id)
    .then((task) => {
      console.log(task);
      task.done = !task.done;
      task.save();
      return res.redirect("/");
    })
    .catch((error) => res.status(409).send(error));
};
