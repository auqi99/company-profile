"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CustomChakraProvider = ({ children }: Props) => (
  <ChakraProvider>{children}</ChakraProvider>
);

export default CustomChakraProvider;
