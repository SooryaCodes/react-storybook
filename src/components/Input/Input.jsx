import "./Input.css";

export default function Input({ size, ...rest }) {
  return <input className={`input ${size}`} {...rest} />;
}
