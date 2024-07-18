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
import { FaQuoteLeft, FaQuoteRight, FaBuilding, FaProductHunt, FaThumbsUp, FaLeaf, FaSeedling } from "react-icons/fa";

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
          bg="linear-gradient(to right, #2c3e50, #4ca1af)"
          color="white"
          py={{ base: 20, md: 40 }}
          textAlign="center"
          position="relative"
        >
          <Container maxW="container.lg" position="relative">
            <Heading
              as="h1"
              size="2xl"
              color="yellow.300"
              textShadow="1px 1px 3px rgba(0, 0, 0, 0.7)"
            >
              Auqi Palm Harvest Co
            </Heading>
            <Flex justify="center" mt={4}>
              <Icon as={FaLeaf} boxSize={8} color="yellow.300" mx={2} />
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="yellow.100"
                textShadow="1px 1px 3px rgba(0, 0, 0, 0.7)"
              >
                Let's Go Green
              </Text>
              <Icon as={FaSeedling} boxSize={8} color="yellow.300" mx={2} />
            </Flex>
          </Container>
        </Box>

        <Box
          as="section"
          py={{ base: 10, md: 20 }}
          textAlign="center"
          bg="linear-gradient(to right, #283048, #859398)"
          color="white"
          position="relative"
        >
          <Container maxW="container.lg" position="relative">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box
                bg="rgba(0, 0, 0, 0.7)"
                p={8}
                borderRadius="lg"
                boxShadow="2xl"
              >
                <Icon as={FaBuilding} boxSize={10} color="yellow.300" mb={4} />
                <Heading as="h2" size="lg" color="yellow.300" mb={4}>
                  Company Overview
                </Heading>
                <Text
                  maxW="3xl"
                  mx="auto"
                  color="white"
                  fontSize="lg"
                  fontWeight="semibold"
                >
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
                bg="rgba(0, 0, 0, 0.7)"
                p={8}
                borderRadius="lg"
                boxShadow="2xl"
              >
                <Icon as={FaProductHunt} boxSize={10} color="yellow.300" mb={4} />
                <Heading as="h2" size="lg" color="yellow.300" mb={4}>
                  Our Products
                </Heading>
                <Text
                  maxW="3xl"
                  mx="auto"
                  color="white"
                  fontSize="lg"
                  fontWeight="semibold"
                >
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

        <Box
          as="section"
          py={20}
          textAlign="center"
          bg="linear-gradient(to right, #283048, #859398)"
        >
          <Container maxW="container.md">
            <Flex justify="center">
              <Box
                bg="rgba(0, 0, 0, 0.7)"
                p={8}
                borderRadius="lg"
                boxShadow="2xl"
                maxW="lg"
                textAlign="left"
              >
                <Icon as={FaThumbsUp} boxSize={6} color="yellow.300" />
                <Text mt={4} fontSize="lg" fontWeight="semibold" color="white">
                  Our experience with Auqi Palm Harvest Co. has been
                  exceptional. Their industry-leading services have
                  significantly enhanced our business operations, setting a new
                  standard of excellence in the palm oil sector. Their team
                  demonstrates unparalleled professionalism, delivering
                  innovative solutions that drive sustainable growth. We
                  wholeheartedly endorse Auqi Palm Harvest Co. as a trusted
                  partner for advancing success in palm oil production.
                </Text>
                <Icon as={FaThumbsUp} boxSize={6} color="yellow.300" mt={4} />
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
              loading="lazy"
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
