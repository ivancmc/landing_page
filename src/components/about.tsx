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
            SOBRE
          </Text>
          <Text
            fontSize="32px"
            maxW={"295px"}
            lineHeight="1em"
            color="rgb(21, 47, 46)"
            font-style="normal"
            fontWeight={600}
          >
            Mais algumas informações sobre o seu negócio
          </Text>
          <Text
            fontSize="15px"
            lineHeight="22px"
            color="rgb(21, 47, 46)"
            font-style="normal"
            fontWeight={400}
            className={mulish.className}
            maxW={"350px"}
          >
            Compartilhe um pouco sobre você como proprietário de uma empresa ou
            talvez descreva o que torna seu serviço único. Dê aos visitantes
            mais uma razão para se atentarem à sua oferta e quererem trabalhar
            com você.
          </Text>
        </VStack>
      </Stack>
    </Center>
  );
}
