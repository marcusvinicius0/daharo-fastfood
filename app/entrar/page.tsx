import Button from "@/components/button";
import { FormInput } from "@/components/form-input";
import { Form } from "@/components/form";

import Link from "next/link";

export default function UserRegister() {
  return (
    <div className="mt-32 h-full flex flex-col justify-center">
      <div className="flex flex-col p-4 space-y-6 w-full">
        <h1 className="text-center text-3xl">Conectar-se</h1>
        <Form
        >
          <FormInput name="email" placeholder="Seu melhor email *" />
          <FormInput name="password" type="password" placeholder="Credencial de segurança *" />
          <Button size="md" className="w-full bg-red-500 text-white font-bold hover:bg-red-500/50" rounded="md">
            Entrar
          </Button>
         

          <footer className="text-sm flex space-x-2">
            <p>Ainda não possui uma conta?</p>
            <Link href="/registro" className="font-semibold">
              Crie uma!
            </Link>
          </footer>
        </Form>
      </div>
    </div>
  );
}
