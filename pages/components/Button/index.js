import style from "./style.module.scss";

export default function ({ onClick, value }) {
  return (
    <button onClick={onClick} className={style.button}>
      {value}
    </button>
  );
}
