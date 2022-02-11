import React from "react";
import TodoList from "./TodoList";
import ContentFooter from "./ContentFooter";

function Content() {
  return (
    <>
      <section class="main">
        <input class="toggle-all" type="checkbox" />
        <label Hrmlfor="toggle-all">Mark all as complete</label>
        <TodoList />
      </section>
      <ContentFooter/>
    </>
  );
}

export default Content;
