import { mulish } from "@/util/fonts";
import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";

interface TestimonialProps {
  ratingUrl: string;
  text: string;
  avatarUrl: string;
  name: string;
  location: string;
}

const Testimonial = ({
  ratingUrl,
  text,
  avatarUrl,
  name,
  location,
}: TestimonialProps) => {
  return (
    <VStack align={"flex-start"} px={"10px"}>
      <Image src={ratingUrl} alt="Rating" />
      <Text
        className={mulish.className}
        fontSize={"24px"}
        color={"rgb(21, 47, 46)"}
        fontStyle={"italic"}
        fontWeight={400}
        maxW={"335px"}
      >
        {text}
      </Text>
      <HStack mt={"20px"} align={"center"} justify={"flex-start"} spacing={1}>
        <Image src={avatarUrl} alt="Avatar" />
        <VStack align={"flex-start"} px={"10px"} gap={0}>
          <Text fontSize={"12px"} color={"rgb(21, 47, 46)"} fontWeight={600}>
            {name}
          </Text>
          <Text
            className={mulish.className}
            fontSize={"12px"}
            color={"rgb(21, 47, 46)"}
            fontWeight={400}
          >
            {location}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default function Testimonials() {
  return (
    <VStack spacing={[8, 20]}>
      <Text
        fontSize={"12px"}
        letterSpacing={"2px"}
        color={"rgb(0, 194, 197)"}
        fontWeight={600}
        maxW={["180px", "full"]}
        align={"center"}
      >
        NÃO FIQUE APENAS COM NOSSA PALAVRA
      </Text>
      <Stack direction={["column", "column", "row"]} spacing={[20, 20, 40]}>
        <Testimonial
          ratingUrl="/images/rating1.svg"
          text="Compartilhe um depoimento real que atinja alguns de seus benefícios."
          avatarUrl="/images/avatar1.jpg"
          name="Nome real"
          location="Cidade"
        />
        <Testimonial
          ratingUrl="/images/rating2.svg"
          text="Inclua alguém falando sobre como foi fácil se inscrever e participar."
          avatarUrl="/images/avatar2.jpg"
          name="Nome real"
          location="Cidade"
        />
      </Stack>
    </VStack>
  );
}
