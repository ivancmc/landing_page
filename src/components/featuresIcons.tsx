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
          title={"Benefit 1"}
          text={
            "Highlight the benefits of signing up for an appointment, online class, or video consultation."
          }
        />
        <FeatureIcon
          icon={<Icon as={GoHeart} w={10} h={10} color={"#2FCDD0"} />}
          title={"Benefit 2"}
          text={
            "For example, fitness instructors might describe how their routines make people healthier *and* happier."
          }
        />
        <FeatureIcon
          icon={<Icon as={SlBadge} w={10} h={10} color={"#2FCDD0"} />}
          title={"Benefit 3"}
          text={
            "Remind visitors how easy it is to claim your offer and start enjoying the benefits."
          }
        />
      </VStack>
    </Box>
  );
}
