"use client";

import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";
import { GoHeart } from "react-icons/go";
import { SlBadge, SlScreenDesktop } from "react-icons/sl";

interface FeatureIconProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const FeatureIcon = ({ title, text, icon }: FeatureIconProps) => {
  return (
    <HStack align={"flex-start"} spacing={5}>
      {icon}
      <VStack align={"flex-start"} spacing={3} pt={"5px"}>
        <Text
          fontSize="20px"
          lineHeight="1em"
          color="rgb(21, 47, 46)"
          font-style="normal"
          fontWeight={600}
        >
          {title}
        </Text>
        <Text
          fontSize="15px"
          lineHeight="22px"
          color="rgb(21, 47, 46)"
          font-style="normal"
          fontWeight={400}
        >
          {text}
        </Text>
      </VStack>
    </HStack>
  );
};

export default function FeaturesIcons() {
  return (
    <Box maxW={["300px", "450px"]} px={["10px"]}>
      <VStack spacing={10}>
        <FeatureIcon
          icon={<Icon as={SlScreenDesktop} w={10} h={10} color={"#2FCDD0"} />}
          title={"Benefício 1"}
          text={
            "Destaque os benefícios de se inscrever para uma consultoria, aula online ou consultoria por video."
          }
        />
        <FeatureIcon
          icon={<Icon as={GoHeart} w={10} h={10} color={"#2FCDD0"} />}
          title={"Benefício 2"}
          text={
            "Por exemplo, instrutores de academia podem descrever como suas rotinas tornam as pessoas mais saudáveis e mais felizes."
          }
        />
        <FeatureIcon
          icon={<Icon as={SlBadge} w={10} h={10} color={"#2FCDD0"} />}
          title={"Benefício 3"}
          text={
            "Lembre aos visitantes como é fácil adquirir seus serviços e começar a aproveitar os benefícios."
          }
        />
      </VStack>
    </Box>
  );
}
