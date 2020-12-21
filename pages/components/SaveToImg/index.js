import style from "./style.module.scss";
import Button from "../Button";
import { toPng } from "html-to-image";

export default function ({ changeElemVisibility }) {
  function onClick() {
    const node = document.getElementById("render");
    const download = require("downloadjs");

    console.log(node);
    changeElemVisibility(true);
    toPng(node)
      .then((dataUrl) => {
        console.log(changeElemVisibility);
        changeElemVisibility(false);

        download(dataUrl, "metas2021.png");
      })
      .catch((error) => {
        changeElemVisibility(false);

        console.error("oops, something went wrong!", error);
      });
  }

  return (
    <div className={style.floatingContainer}>
      <Button onClick={onClick} value="Guardar a imagen" />
    </div>
  );
}
