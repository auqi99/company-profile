"use client";

import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Icon,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";
import {
  FaLeaf,
  FaSeedling,
  FaTree,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaFacebook,
  FaLinkedinIn,
  FaLinkedin,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Company Profile</title>
        <meta
          name="description"
          content="Learn more about our company's history, team, and culture."
        />
      </Head>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Box
          py={20}
          textAlign="center"
          bgImage="url('https://plus.unsplash.com/premium_photo-1669018130695-35cb72f65c05?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          color="white"
          flex="1"
        >
          <Container
            maxW="container.lg"
            bg="rgba(0, 0, 0, 0.7)"
            p={8}
            borderRadius="md"
            boxShadow="2xl"
          >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Box
                bg="white"
                p={6}
                shadow="2xl"
                borderRadius="lg"
                color="black"
                borderWidth="1px"
                borderColor="gray.300"
              >
                <Icon as={FaTree} boxSize={10} color="teal.500" />
                <Heading as="h2" size="lg" mt={4} mb={2}>
                  Our Story
                </Heading>
                <Text>
                  Our journey began with a vision to transform the palm oil
                  industry. Recognizing the growing global demand for
                  sustainable and high-quality palm oil, we set out to create a
                  company that not only meets but exceeds industry standards.
                  Founded in 2021, Auqi Palm Harvest Co. is dedicated to
                  sustainable practices, innovation, and community engagement.
                  Our story is one of commitment to environmental stewardship
                  and a relentless pursuit of excellence, ensuring that our
                  customers receive the best products while contributing to a
                  greener planet.
                </Text>
              </Box>
              <Box
                bg="white"
                p={6}
                shadow="2xl"
                borderRadius="lg"
                color="black"
                borderWidth="1px"
                borderColor="gray.300"
              >
                <Icon as={FaSeedling} boxSize={10} color="teal.500" />
                <Heading as="h2" size="lg" mt={4} mb={2}>
                  Our Vision
                </Heading>
                <Text>
                  In the competitive world of business, many believe that growth
                  demands ruthlessness. At Auqi Palm Harvest Co., we envision a
                  different path. We believe that true growth stems from harmony
                  between profitability and sustainability. Our vision is to
                  lead the palm oil industry with practices that not only
                  bolster our bottom line but also benefit our customers and the
                  environment. By prioritizing ethical sourcing, innovative
                  production methods, and community engagement, we aim to set a
                  new standard. We empower businesses globally to focus on what
                  truly matters: delivering quality, fostering trust, and
                  ensuring a sustainable future for generations to come.
                </Text>
              </Box>
              <Box
                bg="white"
                p={6}
                shadow="2xl"
                borderRadius="lg"
                color="black"
                borderWidth="1px"
                borderColor="gray.300"
              >
                <Icon as={FaLeaf} boxSize={10} color="teal.500" />
                <Heading as="h2" size="lg" mt={4} mb={2}>
                  Our Mission
                </Heading>
                <Text>
                  At Auqi Palm Harvest Co., we believe that growth with
                  integrity is the cornerstone of lasting success. Our mission
                  is to lead the palm oil industry with practices that respect
                  the environment and uplift communities. We have developed a
                  comprehensive ecosystem that combines cutting-edge technology,
                  continuous education, and robust community engagement. This
                  ecosystem ensures that our operations not only meet but exceed
                  the highest standards of sustainability and quality. By
                  nurturing a culture of innovation and responsibility, we aim
                  to drive positive change and help our partners thrive in a
                  conscientious and profitable manner.
                </Text>
              </Box>
            </SimpleGrid>

            <Box
              mt={20}
              p={6}
              bgGradient="linear(to-r, teal.500, green.500)"
              borderRadius="lg"
              color="white"
              boxShadow="2xl"
            >
              <Heading as="h2" size="xl" mb={5} textAlign="center">
                Contact Us
              </Heading>
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={10}
                alignItems="center"
              >
                <VStack spacing={4} align="start">
                  <HStack>
                    <Icon as={FaPhone} boxSize={6} />
                    <Text fontSize="lg">+123-456-7890</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaEnvelope} boxSize={6} />
                    <Text fontSize="lg">aulbg99@gmail.com</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaFacebook} boxSize={6} />
                    <Text fontSize="lg">Auqi Keche</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaInstagram} boxSize={6} />
                    <Text fontSize="lg">@auqi7975</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaLinkedin} boxSize={6} />
                    <Text fontSize="lg">Aulia Rifqi</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaMapMarkerAlt} boxSize={6} />
                    <Text fontSize="lg">
                      JAMBI, KAB: SAROLANGUN KEC: AIR HITAM DESA: LUBUK JERING
                    </Text>
                  </HStack>
                </VStack>
                <Box>
                  <Image
                    src="/images/3wd1olog.webp"
                    width={{ base: "100%", md: "220px" }}
                    marginLeft={{ base: 0, md: "155px" }}
                  />
                </Box>
              </SimpleGrid>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
