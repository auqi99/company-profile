"use client";

import {
  Box,
  HStack,
  Link as ChakraLink,
  Flex,
  Container,
  Image,
  Button,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.800" color="white" py={4}>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <HStack spacing={8}>
            <Link href="/">
              <Image
                src="/images/palm_oil_company_logo.webp"
                alt="Company Logo"
                boxSize={isMobile ? "40px" : "50px"}
                borderRadius="full"
                objectFit="cover"
              />
            </Link>
          </HStack>
          {isMobile ? (
            <>
              <IconButton
                aria-label="Open Menu"
                icon={<HamburgerIcon />}
                onClick={onOpen}
                colorScheme="teal"
              />
              <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay>
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                      <VStack spacing={4} align="start">
                        <ChakraLink
                          as={Link}
                          href="/"
                          _hover={{ textDecoration: "none", color: "gray.300" }}
                          onClick={onClose}
                        >
                          Home
                        </ChakraLink>
                        <ChakraLink
                          as={Link}
                          href="/about"
                          _hover={{ textDecoration: "none", color: "gray.300" }}
                          onClick={onClose}
                        >
                          About Us
                        </ChakraLink>
                        <ChakraLink
                          as={Link}
                          href="/teams"
                          _hover={{ textDecoration: "none", color: "gray.300" }}
                          onClick={onClose}
                        >
                          Teams
                        </ChakraLink>
                        <Button
                          as="a"
                          href="mailto:aulbg99@gmail.com"
                          colorScheme="teal"
                          variant="outline"
                          size="sm"
                          _hover={{ bg: "teal.500", color: "white" }}
                          onClick={onClose}
                        >
                          CONTACT US
                        </Button>
                      </VStack>
                    </DrawerBody>
                  </DrawerContent>
                </DrawerOverlay>
              </Drawer>
            </>
          ) : (
            <HStack spacing={6}>
              <ChakraLink
                as={Link}
                href="/"
                _hover={{ textDecoration: "none", color: "gray.300" }}
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={Link}
                href="/about"
                _hover={{ textDecoration: "none", color: "gray.300" }}
              >
                About Us
              </ChakraLink>
              <ChakraLink
                as={Link}
                href="/teams"
                _hover={{ textDecoration: "none", color: "gray.300" }}
              >
                Teams
              </ChakraLink>
              <Button
                as="a"
                href="mailto:aulbg99@gmail.com"
                colorScheme="teal"
                variant="outline"
                _hover={{ bg: "teal.500", color: "white" }}
              >
                CONTACT US
              </Button>
            </HStack>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
