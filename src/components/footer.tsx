import { mulish } from "@/app/layout";
import { Flex, Image, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      mt={["50px", "100px", "150px"]}
      bg={"rgba(21,47,46,1)"}
      h={"135px"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack
        direction={["column", "column", "row"]}
        justifyContent={"space-between"}
        align={"center"}
        w={["auto", "auto", "940px"]}
      >
        <Image
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/77034ff2-multor-logo-footer.svg"
          alt="Logo"
        />
        <Text
          fontSize={"12px"}
          className={mulish.className}
          color={"rgb(162, 172, 172)"}
          lineHeight={"20px"}
        >
          © 2023 Insert Name Here. All rights reserved
        </Text>
      </Stack>
    </Flex>
  );
}
