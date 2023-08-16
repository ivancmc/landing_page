import { mulish } from "@/util/fonts";
import { Center, Image, Stack, Text, VStack } from "@chakra-ui/react";

export default function About() {
  return (
    <Center>
      <Stack
        direction={["column", "column", "row"]}
        spacing={[35, 10, "80px"]}
        mt={["80px", "110px"]}
        maxW={"940px"}
        align={"center"}
        justify={"flex-start"}
      >
        <Image
          src="/images/about.jpg"
          alt="About"
          w={["350px", "460px"]}
          h={["280px", "400px"]}
        />
        <VStack align={"flex-start"} spacing={5}>
          <Text
            fontSize={"12px"}
            letterSpacing={"2px"}
            color={"rgb(0, 194, 197)"}
            fontWeight={600}
            align={"center"}
          >
            ABOUT
          </Text>
          <Text
            fontSize="32px"
            maxW={"285px"}
            lineHeight="1em"
            color="rgb(21, 47, 46)"
            font-style="normal"
            fontWeight={600}
          >
            Some more information about your business
          </Text>
          <Text
            fontSize="15px"
            lineHeight="22px"
            color="rgb(21, 47, 46)"
            font-style="normal"
            fontWeight={400}
            className={mulish.className}
            maxW={"340px"}
          >
            Share a little about yourself as a business owner, or maybe describe
            what makes your service unique. Give visitors one more reason to
            care about your offer and want to work with you.
          </Text>
        </VStack>
      </Stack>
    </Center>
  );
}
