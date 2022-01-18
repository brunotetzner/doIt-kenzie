import { Grid, Heading, Text, VStack, Button } from "@chakra-ui/react";
import {
  FieldValues,
  FieldError,
  DeepMap,
  UseFormRegister,
} from "react-hook-form";
import { FaEnvelope } from "react-icons/fa";
import { Input } from "../../components/form/input/index";

interface SignUpData {
  handleSignUp: () => void;
  errors: DeepMap<FieldValues, FieldError>;
  register: UseFormRegister<FieldValues>;
  loading: boolean;
}
export const SignUpForm = ({
  handleSignUp,
  errors,
  register,
  loading,
}: SignUpData) => {
  return (
    <Grid
      onSubmit={handleSignUp}
      as="form"
      mt={["4", "4", "0"]}
      w={["100%", "100%", "48%", "40%"]}
      padding="30px 15px"
      border="3px solid"
      borderColor="gray.100"
      bg="white"
      color="gray.900"
    >
      <Heading size="lg">Bem vindo de volta!</Heading>
      <VStack mt="5" spacing="6">
        <Input
          label="Login"
          type="email"
          icon={FaEnvelope}
          placeholder="Digite seu email"
          error={errors?.email}
          {...register("email")}
        />
        <Input
          type="name"
          icon={FaEnvelope}
          placeholder="digite seu nome"
          error={errors?.password}
          {...register("name")}
        />
        {!errors.email && (
          <Text ml="1" mt="1" color="grey.300">
            Exemplo: nome@email.com
          </Text>
        )}
        <Input
          type="password"
          icon={FaEnvelope}
          placeholder="digite sua senha"
          error={errors?.password}
          {...register("password")}
        />
        <Input
          type="password"
          icon={FaEnvelope}
          placeholder="confirme sua senha"
          error={errors?.confirm_password}
          {...register("password")}
        />
      </VStack>
      <VStack mt="4" spacing="5">
        <Button
          isLoading={loading}
          bg="purple.800"
          width="100%"
          color="white"
          h="60px"
          borderRadius="8px"
          _hover={{ background: "purple.900" }}
          type="submit"
        >
          Enter
        </Button>
        <Text>Ainda não possui uma conta</Text>
        <Button
          bg="gray.100"
          w="100%"
          color="gray.300"
          h="60px"
          borderRadius="8px"
          _hover={{ background: "purple.200" }}
        >
          Cadastrar
        </Button>
      </VStack>
    </Grid>
  );
};
