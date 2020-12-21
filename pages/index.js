import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import SaveToImg from "./components/SaveToImg";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [hideElements, setHideElements] = useState(false);

  function addNewTask(newTask) {
    console.log(newTask);
    setTasks((prevState) => [
      ...prevState,
      { value: newTask, finished: false }
    ]);
  }

  function changeElemVisibility(value) {
    if (value) {
      setHideElements(value);
    } else {
      setHideElements((prevState) => !prevState);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Resumen 2020 y metas 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SaveToImg changeElemVisibility={changeElemVisibility} />
      <div id="render">
        <Title value="Metas 2021" />
        {!hideElements && <AddTask addNewTask={addNewTask} />}
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}
