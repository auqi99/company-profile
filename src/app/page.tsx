"use client";

import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Icon,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Company Profile</title>
        <meta
          name="description"
          content="Welcome to our company. Learn more about our services and team."
        />
      </Head>
      <Box>
        <Box
          as="section"
          bgImage="url('/images/allphoto-bangkok-vfU-zRRwt60-unsplash.webp')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          color="white"
          py={{ base: 20, md: 40 }}
          textAlign="center"
          position="relative"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)"
          ></Box>
          <Container maxW="container.lg" position="relative">
            <Heading
              as="h1"
              size="2xl"
              color="yellow.300"
              textShadow="1px 1px 3px rgba(0, 0, 0, 0.7)"
            >
              Auqi Palm Harvest Co
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              mt={4}
              maxW="2xl"
              mx="auto"
              color="yellow.100"
              textShadow="1px 1px 3px rgba(0, 0, 0, 0.7)"
            >
              Let's Go Green
            </Text>
          </Container>
        </Box>

        <Box
          as="section"
          py={{ base: 10, md: 20 }}
          textAlign="center"
          bgImage="url('/images/WhatsApp Image 2024-07-15 at 10.21.07_b7ace6e4.webp')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          color="white"
        >
          <Container maxW="container.lg">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box
                bg="rgba(0, 0, 0, 0.6)"
                p={5}
                borderRadius="md"
                boxShadow="xl"
              >
                <Heading as="h2" size="lg" color="yellow.300" mb={4}>
                  Company Overview
                </Heading>
                <Text maxW="3xl" mx="auto" color="white">
                  The palm oil industry is a vital component of the global
                  economy, playing a crucial role in the production of edible
                  oils, cosmetics, and biofuels. Our company, established in
                  2021, is dedicated to advancing this industry through
                  sustainable and innovative practices. We prioritize
                  environmental stewardship, community engagement, and
                  high-quality production standards to meet the growing demand
                  for palm oil products. Our team of experienced professionals
                  works tirelessly to ensure the highest levels of customer
                  satisfaction and to uphold our core values of integrity,
                  commitment, and excellence.
                </Text>
              </Box>
              <Box
                bg="rgba(0, 0, 0, 0.6)"
                p={5}
                borderRadius="md"
                boxShadow="xl"
              >
                <Heading as="h2" size="lg" color="yellow.300" mb={4}>
                  Our Products
                </Heading>
                <Text maxW="3xl" mx="auto" color="white">
                  We provide a wide array of high-quality palm oil products and
                  services to cater to various needs. From sustainably sourced
                  crude palm oil to refined palm products, our offerings are
                  designed to deliver excellence at every step. Discover more
                  about our products and services to see how we can support your
                  business's growth and success.
                </Text>
                <Button mt={8} colorScheme="yellow" as={Link} href="/services">
                  Learn More
                </Button>
              </Box>
            </SimpleGrid>
          </Container>
        </Box>

        <Box as="section" py={20} textAlign="center" bg="green.200">
          <Container maxW="container.md">
            <Flex justify="center">
              <Box
                bgGradient="linear(to-r, teal.300, green.900)"
                color="white"
                p={8}
                borderRadius="lg"
                boxShadow="2xl"
                maxW="lg"
                textAlign="left"
              >
                <Icon as={FaQuoteLeft} boxSize={6} color="white" />
                <Text mt={4} fontSize="lg" fontWeight="semibold">
                  Our experience with Auqi Palm Harvest Co. has been
                  exceptional. Their industry-leading services have
                  significantly enhanced our business operations, setting a new
                  standard of excellence in the palm oil sector. Their team
                  demonstrates unparalleled professionalism, delivering
                  innovative solutions that drive sustainable growth. We
                  wholeheartedly endorse Auqi Palm Harvest Co. as a trusted
                  partner for advancing success in palm oil production.
                </Text>
                <Icon as={FaQuoteRight} boxSize={6} color="white" mt={4} />
                <Text mt={2} fontStyle="italic" color="gray.200">
                  - Mang Udin 'CEO of PT Jaya Indah'
                </Text>
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box as="section" py={10} textAlign="center" bg="white">
          <Container maxW="container.md">
            <Image
              src="/images/png-transparent-illustration-of-palm-oil-thumbnail-removebg-preview.webp"
              alt="Company Logo"
              mx="auto"
              boxSize="150px"
              borderRadius="full"
            />
            <Text fontSize="xl" mt={4} color="gray.700">
              "The Greener, The Richer"
            </Text>
          </Container>
        </Box>
      </Box>
    </>
  );
}
