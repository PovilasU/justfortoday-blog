import Router from "preact-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Help from "../pages/Help";
import Meditation from "../pages/Meditation";
import Checklist from "../pages/Checklist";
import Todo from "../pages/Todo";
import MediaLibrary from "../pages/MediaLibrary";
import DailyReflection from "../pages/DailyReflection";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Router>
      <Home path={`/`} />
      <About path={`/about`} />
      <Checklist path={`/checklist`} />
      <Todo path={`/todo`} />
      <Help path={`/help`} />
      <Meditation path={`/meditation`} />
      <MediaLibrary path={`/medialibrary`} />
      <DailyReflection path={`/dailyreflection`} />
      <NotFound default />
    </Router>
  );
}
