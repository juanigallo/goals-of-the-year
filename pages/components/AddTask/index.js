import Button from "../Button";
import Input from "../Input";
import { useState } from "react";
import style from "./style.module.scss";

export default function ({ addNewTask }) {
  const [value, setValue] = useState("");

  function newTask() {
    addNewTask(value);
    setValue("");
  }

  function onKeyPress(e) {
    if (e.key == "Enter") {
      newTask();
    }
  }

  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Agregar nueva meta"
          onKeyPress={onKeyPress}
        />
      </div>

      <div className={style.buttonContainer}>
        <Button onClick={() => newTask()} value="Agregar" />
      </div>
    </div>
  );
}
