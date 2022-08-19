import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => <Input placeHolder="Small" size="small" />;
export const Default = () => <Input placeHolder="Default" size="default" />;
export const Large = () => <Input placeHolder="Large" size="large" />;

Small.storyName = "Small Input"