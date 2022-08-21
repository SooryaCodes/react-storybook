const { Button } = require("@chakra-ui/react");

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    variant: { control: "text" },
    colorScheme: { control: "text" },
    children: { control: "text" },
    onClick : {action: "clicked"}
  },
};

const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  variant: "solid",
  colorScheme: "green",
  children: "Success",
};

export const Danger = Template.bind({});
Danger.args = {
  ...Success.args,
  colorScheme: "red",
  children: "Danger",
};
