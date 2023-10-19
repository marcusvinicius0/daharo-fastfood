import { ReactNode } from "react";

type Form = {
  children: ReactNode;
};

// ver tipagem completa para formulario

export const Form = ({ children }: Form) => {
  return (
    <form className="flex flex-col justify-center items-center space-y-5 w-full">
      {children}
    </form>
  );
};
