import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";

export default {
  title: "Form/Subscription",
};

export const PrimarySubscription = () => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Large />
    <Primary />
  </div>
);
