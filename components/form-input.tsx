import { ComponentProps } from "react";
import { Input } from "./input";

type FormInputProps = ComponentProps<"input"> & {
  name: string;
  type?: string;
}

export const FormInput = ({ name, placeholder, type }: FormInputProps) => {
  // const { register, formState: {errors}, } = useFormContext()
  return (
    <Input 
      placeholder={placeholder}
      type={type}
      // error={errors[name]?.message as string}
    />
  )
}