import "./Button.css";

export default function Button({ variant = "primary", children, ...rest }) {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}
