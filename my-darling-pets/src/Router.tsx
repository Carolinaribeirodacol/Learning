import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pets } from "./pages/Pets";
import { Task } from "./pages/Task";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/tarefas" element={<Task />}/>
      <Route path="/pets" element={<Pets />}/>
    </Routes>
  );
}