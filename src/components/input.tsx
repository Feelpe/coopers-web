import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label: string;
  placeholder: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, placeholder, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel
          htmlFor={name}
          fontWeight={400}
          fontSize="16px"
          lineHeight="20px"
          textColor="gray.900"
        >
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        placeholder={placeholder}
        fontSize="16px"
        lineHeight="20px"
        borderColor="gray.900"
        focusBorderColor="gray.500"
        bgColor="white"
        variant="filled"
        _hover={{
          bgColor: "gray.200",
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
