import style from "./style.module.scss";

export default function ({ value }) {
  return <h1 className={style.title}>{value}</h1>;
}
