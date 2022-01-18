import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import { FaExclamation } from "react-icons/fa";
import {
  useState,
  useEffect,
  useCallback,
  useRef,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type InputVariationProps = {
  [key: string]: string;
};
const InputVariation: InputVariationProps = {
  error: "red.500",
  default: "gray.200",
  focus: "purple.800",
  filled: "green.500",
};
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error, icon: Icon, ...rest },
  ref
) => {
  const [variation, setVariation] = useState("default");
  const [value, setValue] = useState("");
  const InputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);
  return (
    <FormControl insInvalid={!!error}>
      {!!label && <FormLabel>{label}</FormLabel>}

      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement color={InputVariation[variation]} mt="2.5">
            <Icon />
          </InputLeftElement>
        )}

        <ChakraInput
          name={name}
          bg="gray.50"
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          color={InputVariation[variation]}
          borderColor={InputVariation[variation]}
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          variant={"outline"}
          _hover={{ bgColor: "gray.100" }}
          _placeholder={{ color: "gray.200" }}
          size="lg"
          h="60px"
          ref={ref}
          {...rest}
        />

        {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
