"use client";

import { mulish } from "@/util/fonts";
import { Center, Image, Stack, Text, VStack } from "@chakra-ui/react";

interface FeatureImageProps {
  imageUrl: string;
  title: string;
  text: string;
}

const FeatureImage = ({ title, text, imageUrl }: FeatureImageProps) => {
  return (
    <VStack align={"flex-start"} spacing={5}>
      <Image src={imageUrl} alt="Feature" w={"300px"} h={"169px"} />
      <Text
        fontSize="18px"
        lineHeight="1em"
        color="rgb(21, 47, 46)"
        font-style="normal"
        fontWeight={600}
        mt={"10px"}
      >
        {title}
      </Text>
      <Text
        fontSize="15px"
        lineHeight="22px"
        color="rgb(21, 47, 46)"
        font-style="normal"
        fontWeight={400}
        className={mulish.className}
        maxW={"220px"}
      >
        {text}
      </Text>
    </VStack>
  );
};

export default function FeaturesImages() {
  return (
    <Center>
      <Stack
        direction={["column", "column", "row"]}
        spacing={[35, 10, 5]}
        mt={["100px", "110px"]}
        maxW={"940px"}
        align={"center"}
        justify={"center"}
      >
        <FeatureImage
          imageUrl="/images/feature1.jpg"
          title="Característica 1"
          text="Fale sobre alguns detalhes de sua oferta com foco no valor que as pessoas recebem."
        />
        <FeatureImage
          imageUrl="/images/feature2.jpg"
          title="Característica 2"
          text="Existe um problema que seu serviço resolve? Conte aos visitantes sobre isso aqui."
        />
        <FeatureImage
          imageUrl="/images/feature3.jpg"
          title="Característica 3"
          text="Você pode usar esta seção para responder a algumas perguntas frequentes."
        />
      </Stack>
    </Center>
  );
}
