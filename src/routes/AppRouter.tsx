//import { h } from 'preact';
import Router from "preact-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Help from "../pages/Help";
import Meditation from "../pages/Meditation";
import Checklist from "../pages/Checklist";
import Todo from "../pages/Todo";
import NotFound from "../pages/NotFound";

//const BASE_PATH = "/justfortoday-preact-app";

export default function AppRouter() {
  return (
    <Router>
      <Home path={`/`} />
      <About path={`/about`} />
      <Checklist path={`/checklist`} />
      <Todo path={`/todo`} />
      <Help path={`/help`} />
      <Meditation path={`/meditation`} />
      <NotFound default />
    </Router>
  );
}
