import Task from "../Task";
import style from "./style.module.scss";

export default function ({ tasks }) {
  return (
    <ul className={style.list}>
      {tasks &&
        tasks.map((task, key) => {
          return <Task value={task.value} finished={task.finished} key={key} />;
        })}
    </ul>
  );
}
