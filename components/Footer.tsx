export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 mb-2 flex flex-col items-center space-y-2">
      <hr className="mb-1.5 w-full" />
      <h4 className="uppercase tracking-[4px] text-center font-semibold">
        Daharo Foods
      </h4>
      <span className="text-sm text-center">
        © {currentYear} - Todos os direitos reservados
      </span>
    </footer>
  );
}
