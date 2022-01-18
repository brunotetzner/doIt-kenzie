import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
// import LogoSecondary from "../../assets/logo-secondary.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { LoginInfo } from "./LoginInfo";
import { LoginForm } from "./LoginForm";

// interface SignData {
//   password: string;
//   email: string;
// }
const signInSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatório").email("Senha inválida"),
});

export const Login = () => {
  const LogoSecondary = require("../../assets/logo-secondary.png");
  const [loading, setLoading] = useState(false);

  const { signIn, accessToken } = useAuth();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(signInSchema) });

  const handleSignIn = (data) => {
    setLoading(true);
    signIn(data)
      .then((_) => setLoading(false))
      .catch((_) => setLoading(false));
  };
  return (
    <Flex
      padding={["10px 15px", "10 15px", "0px", "0px"]}
      alignItems="center"
      height={["auto", "auto", "100vh", "100vh"]}
      justifyContent="center"
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35%)",
      ]}
    >
      <Flex
        w={["100%", "100%", "90%", "60%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
      >
        <LoginInfo />
        <LoginForm
          errors={errors}
          handleSignIn={handleSubmit(handleSignIn)}
          loading={loading}
          register={register}
        />
      </Flex>
    </Flex>
  );
};
