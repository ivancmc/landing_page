"use client";

import { mulish } from "@/app/layout";
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
          title="FEATURE 1"
          text="Talk about some of the details of your offer with a focus on the value people get back."
        />
        <FeatureImage
          imageUrl="/images/feature2.jpg"
          title="FEATURE 2"
          text="Is there a pain point that your service resolves? Tell visitors about it here."
        />
        <FeatureImage
          imageUrl="/images/feature3.jpg"
          title="FEATURE 3"
          text="Alternatively, you could use this section to address some frequently asked questions."
        />
      </Stack>
    </Center>
  );
}
