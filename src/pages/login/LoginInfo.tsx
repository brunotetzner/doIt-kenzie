import { Image, Heading, Grid, Text } from "@chakra-ui/react";
export const LoginInfo = () => {
  const LogoSecondary = require("../../assets/logo-secondary.png");

  return (
    <Grid w={["100%", "100%", "50%", "65%"]} paddingRight="100px">
      <Image
        src={LogoSecondary}
        alt="doit"
        boxSize={["120px", "120px", "150px", "150px"]}
      />
      <Heading mt="4" as="h1">
        O jeito facíl, grátis
      </Heading>
      <Text maxW="350px">
        Flexivel e atrativo de gerenciar
        <br />
        <b>Seus projetos em uma unica plataforma</b>
      </Text>
    </Grid>
  );
};
