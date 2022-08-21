const { Button } = require("@chakra-ui/react");

export default {
  title: "Chakra/Button",
  component: Button,
};

export const Success = () => (
  <Button colorScheme="green" variant="solid">
    Success
  </Button>
);

export const Danger = () => (
  <Button colorScheme="red" variant="solid">
    Danger
  </Button>
);
