"use client";
import {
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  Box,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const professions = [
  "Mandor",
  "Admin",
  "Pemuat 1",
  "Pemuat 2",
  "Pemuat 3",
  "Pemuat 4",
  "Pelangsir 1",
  "Pelangsir 2",
  "Pelangsir 3",
  "Driver 1",
  "Driver 2",
  "Driver 3",
];

const getRandomProfession = () => {
  return professions[Math.floor(Math.random() * professions.length)];
};

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  profession: string;
}

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=12");
        const data = await response.json();
        const membersWithProfessions = data.results.map((member: any) => ({
          ...member,
          profession: getRandomProfession(),
        }));
        setTeamMembers(membersWithProfessions);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTeamMembers();
  }, []);

  const bg = useColorModeValue("white", "gray.800");
  const boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const cardBg = useColorModeValue("white", "gray.700");
  const headingColor = useColorModeValue("teal.600", "teal.300");

  return (
    <Box bgGradient="linear(to-r, teal.500, green.500)" minH="100vh" py={10}>
      <Container maxW="7xl">
        <Heading as="h1" size="2xl" textAlign="center" mb={10} color="white">
          Our Gorgeous Teams
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {teamMembers.map((member, index) => (
            <GridItem key={index}>
              <Box
                p={6}
                boxShadow={boxShadow}
                borderRadius="lg"
                bg={cardBg}
                textAlign="center"
                borderColor={borderColor}
                borderWidth="1px"
                transition="transform 0.2s"
                _hover={{ transform: "scale(1.05)" }}
                minH="360px"
              >
                <Image
                  borderRadius="full"
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  boxSize="150px"
                  mx="auto"
                />
                <Heading as="h3" size="md" mt={4} color={headingColor}>
                  {member.name.first} {member.name.last}
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  {member.profession}
                </Text>
                <Stack mt={2} fontSize="sm" spacing={1} textAlign="left">
                  <Text>Email: {member.email}</Text>
                  <Text>IG: @auqi7975</Text>
                  <Text>FB: Auqi Keche</Text>
                </Stack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Teams;
