"use client";

import { workSans } from "@/app/layout";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function MainForm() {
  return (
    <Box
      position={"relative"}
      pb={[0, 0, "150px"]}
      // pr={["15px", "15px", "120px"]}
      mb={["80px", "80px", "-20px"]}
      px={["10px"]}
    >
      <Container as={SimpleGrid} maxW={"400px"} px={0}>
        <Stack
          bg={"#152F2E"}
          rounded={"md"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
        >
          <Stack spacing={6}>
            <Heading
              color={"white"}
              lineHeight={1}
              fontSize={{ base: "2xl", sm: "3xl", md: "32px" }}
              textAlign={"center"}
              className={workSans.className}
              fontWeight={600}
            >
              Schedule an Appointment
            </Heading>
            <Text
              textAlign={"center"}
              color={"white"}
              fontSize={{ base: "sm", sm: "15px" }}
              lineHeight={"22px"}
              fontWeight={400}
              className={workSans.className}
            >
              Here, let visitors know what will happen when they complete your
              form.
            </Text>
          </Stack>
          <Box as={"form"}>
            <Stack spacing={4}>
              <Input
                placeholder="First name*"
                size={"lg"}
                bg={"white"}
                border={0}
                color={"#152F2E"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="Last name*"
                size={"lg"}
                bg={"white"}
                border={0}
                color={"#152F2E"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="Email*"
                size={"lg"}
                bg={"white"}
                border={0}
                color={"#152F2E"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="Phone Number*"
                size={"lg"}
                bg={"white"}
                border={0}
                color={"#152F2E"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Select
                placeholder="Type of Appointment"
                bgColor={"white"}
                size={"lg"}
                color={"#152F2E"}
              >
                <option value="Type 1">Type 1</option>
                <option value="Type 2">Type 2</option>
                <option value="Type 3">Type 3</option>
              </Select>
            </Stack>
            <Button
              fontSize={"18px"}
              mt={8}
              w={"full"}
              bgColor={"rgba(0,194,197,1)"}
              color={"white"}
              height={"55px"}
              _hover={{
                bgColor: "rgba(0,184,187,1)",
              }}
            >
              SCHEDULE NOW
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
