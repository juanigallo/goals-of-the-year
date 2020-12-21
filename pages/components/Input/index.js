import style from "./style.module.scss";

export default function ({ value, onChange, onKeyPress, placeholder }) {
  return (
    <input
      type="text"
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={style.input}
    />
  );
}
