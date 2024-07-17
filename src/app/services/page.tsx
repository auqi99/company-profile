import {
  Box,
  Container,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { ContentfulEntry, getEntries } from "../../libs/contentful";

export default async function Services() {
  const contents: ContentfulEntry[] | undefined = await getEntries();

  const RICHTEXT_OPTIONS: Options = {
    renderNode: {
      [BLOCKS.HEADING_3]: (node, children) => {
        return (
          <Text fontSize="30px" fontWeight="semibold" textAlign="left" pb="3">
            {children}
          </Text>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return (
          <Text textAlign="left" pb="4">
            {children}
          </Text>
        );
      },
      [BLOCKS.UL_LIST]: (node, children) => {
        return <UnorderedList pl={6}>{children}</UnorderedList>;
      },
      [BLOCKS.LIST_ITEM]: (node, children) => {
        return <ListItem>{children}</ListItem>;
      },
    },
  };

  return (
    <>
      <Box py={20} textAlign="center" bg="gray.200">
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={10} color="teal.700">
            We Provide Several Products
          </Heading>
          {contents ? (
            contents.map((content, index) => (
              <SimpleGrid
                key={index}
                columns={{ base: 1, md: 1 }}
                spacing={10}
                mb={10}
              >
                <Box
                  bg="white"
                  p={8}
                  borderRadius="md"
                  boxShadow="2xl"
                  borderWidth="1px"
                  borderColor="gray.300"
                >
                  <Heading as="h2" size="lg" color="blue.700" mb={6}>
                    {content.title}
                  </Heading>
                  <Box px="8">
                    {documentToReactComponents(
                      content.content,
                      RICHTEXT_OPTIONS
                    )}
                  </Box>
                </Box>
              </SimpleGrid>
            ))
          ) : (
            <Text>No content available</Text>
          )}

          <Box mt={20} textAlign="center">
            <Heading as="h2" size="xl" mb={10} color="teal.700">
              What People Comment Us
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Box
                bgGradient="linear(to-r, teal.400, blue.400)"
                color="white"
                p={6}
                borderRadius="md"
                boxShadow="2xl"
                borderWidth="1px"
                borderColor="gray.300"
              >
                <Text mt={4}>
                  "Auqi Palm Harvest Co. has been instrumental in boosting our
                  operational efficiency. Their dedication to quality and
                  sustainability is truly commendable. We highly recommend their
                  products and services!"
                </Text>
                <Text mt={2} fontStyle="italic">
                  - Pak De joko
                </Text>
              </Box>
              <Box
                bgGradient="linear(to-r, teal.400, blue.400)"
                color="white"
                p={6}
                borderRadius="md"
                boxShadow="2xl"
                borderWidth="1px"
                borderColor="gray.300"
              >
                <Text mt={4}>
                  "The quality and efficiency of Auqi Palm Harvest Co.'s
                  services are outstanding. We couldn't be happier with the
                  results. Their professional team has made a significant impact
                  on our business."
                </Text>
                <Text mt={2} fontStyle="italic">
                  - Kang Acep
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
