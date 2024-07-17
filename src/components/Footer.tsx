import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={1}>
      <Flex justify="space-between" align="center">
        <Text>Copyright © 2021 - 2024 Auqi Palm Harvest Co.</Text>
        <Text>Powered by Purwadhika</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
