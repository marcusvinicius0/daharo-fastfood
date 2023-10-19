import Button from "@/components/button";
import { Form } from "@/components/form";
import { FormInput } from "@/components/form-input";

import Link from "next/link";

import { FcGoogle } from "react-icons/fc";

export default function Register({}) {
  return (
    <div className="mt-32 h-full flex flex-col justify-center">
      <div className="flex flex-col p-4 space-y-6 w-full">
        <h1 className="text-center text-3xl">Quase matando a fome...</h1>
        <Form>
          <FormInput type="text" name="name" placeholder="Seu nome *" />
          <FormInput type="email" name="email" placeholder="Seu email *" />
          <FormInput
            name="password"
            type="password"
            placeholder="Credencial de segurança *"
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Repetir Credencial de segurança *"
          />
          <Button
            size="md"
            className="w-full bg-red-500 text-white font-bold hover:bg-red-500/50"
            rounded="md"
          >
            Registrar
          </Button>

          <span className="font-semibold">ou</span>

          <div>
            <Button
              icon
              size="md"
              className="w-48 flex items-center gap-2 hover:opacity-90 text-sm"
            >
              <FcGoogle size={20} />
              Registre com o google
            </Button>
          </div>

          <footer className="text-sm flex space-x-2">
            <p>Já possui uma conta?</p>
            <Link href="/entrar" className="font-semibold">
              Conecte-se agora!
            </Link>
          </footer>
        </Form>
      </div>
    </div>
  );
}
