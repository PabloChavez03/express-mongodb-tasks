import app from "./app";
import { PORT } from "./config";
import './db';

app.listen(PORT, () => {
  console.log("Server is running on port",PORT);
});
