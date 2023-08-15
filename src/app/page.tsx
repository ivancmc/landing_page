"use client";

import About from "@/components/about";
import FeaturesIcons from "@/components/featuresIcons";
import FeaturesImages from "@/components/featuresImages";
import Footer from "@/components/footer";
import MainForm from "@/components/mainForm";
import Testimonials from "@/components/testimonials";
import {
  Center,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Center>
      <Flex w={"1200px"} direction={"column"}>
        <VStack
          h={["600px", "721px"]}
          backgroundImage={"/images/topo.jpg"}
          backgroundSize={"cover"}
          backgroundPosition={["top left", "top center"]}
          alignItems={"flex-start"}
          pt={["30px", "50px", "80px"]}
        >
          <Stack
            align={"flex-start"}
            spacing={[10, 10, 16]}
            pl={["15px", "15px", "100px"]}
            minH={["550px"]}
          >
            <Image
              src="/images/logo-no-background.svg"
              alt="Logo"
              w={"150px"}
              h={"100px"}
            />
            <Text
              color={"rgb(21, 47, 46)"}
              fontWeight={600}
              lineHeight={["60px", "85px"]}
              letterSpacing={"-5px"}
              fontSize={["60px", "82px"]}
              maxW={"650px"}
            >
              Describe the value of booking an appointment
            </Text>
            <Text
              color={"rgb(21, 47, 46)"}
              fontWeight={400}
              lineHeight={"28px"}
              fontSize={useBreakpointValue({ base: "20px", md: "20px" })}
              maxW={"464px"}
            >
              No need to get clever. Tell people exactly what you're offering,
              then use this space to communicate your key value proposition.
            </Text>
          </Stack>
        </VStack>
        <Stack
          align={"center"}
          justifyContent={["flex-end", "flex-end", "space-around"]}
          direction={["column-reverse", "column-reverse", "row"]}
          minH={["1150px", "1100px", "auto"]}
          mt={["-10px", "-50px"]}
        >
          <FeaturesIcons />
          <MainForm />
        </Stack>

        <VStack
          h={["400px", "645px"]}
          w={"full"}
          bgColor={"rgba(232,251,251,1)"}
          align={"center"}
          pt={["50px", "120px"]}
          spacing={5}
          mb={["150px", "200px", "300px"]}
        >
          <Text
            color={"rgb(21, 47, 46)"}
            fontWeight={600}
            lineHeight={"1em"}
            fontSize={["30px", "48px"]}
            maxW={["280px", "580px"]}
            textAlign={"center"}
          >
            Show visitors what they're signing up for
          </Text>
          <Text
            color={"rgb(21, 47, 46)"}
            fontWeight={400}
            lineHeight={"30px"}
            fontSize={useBreakpointValue({ base: "18px", md: "18px" })}
            maxW={["295px", "550px"]}
            textAlign={"center"}
          >
            Include a video or photo from one of your sessions to help people
            understand your service (or just to hype ‘em up).
          </Text>
          <Image
            src="/images/video.jpg"
            alt="Video"
            width={["380px", "940px"]}
            height={["250px", "530px"]}
            pt={["10px", "50px"]}
          />
        </VStack>
        <Testimonials />
        <FeaturesImages />
        <About />
        <Footer />
      </Flex>
    </Center>
  );
}
