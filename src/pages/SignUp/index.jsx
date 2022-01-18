import { Flex } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
// import LogoSecondary from "../../assets/logo-secondary.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SignUpInfo } from "./SignUpInfo";
import { SignUpForm } from "./SignUpForm";

// interface SignUpData {
//   password: string;
//   email: string;
//   name: string;
// }
const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatório").email("Senha inválida"),
  confirm_password: yup
    .string()
    .required("Confrimação de senha obrigatoria")
    .oneOf([yup.ref("password")], "senhas diferentes"),
});

export const SignUp = () => {
  const LogoSecondary = require("../../assets/logo-secondary.png");
  const [loading, setLoading] = useState(false);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const handleSignUp = (data) => {
    console.log(data);
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
        <SignUpForm
          errors={errors}
          handleSignUp={handleSubmit(handleSignUp)}
          loading={loading}
          register={register}
        />
      </Flex>
      <SignUpInfo />
    </Flex>
  );
};
