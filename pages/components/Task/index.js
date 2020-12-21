import style from "./style.module.scss";

export default function ({ value, finished }) {
  return <li className={style.item}>- {value}</li>;
}
