import Shape from "@/app/(auth)/_components/Shape";

import Container from "@/components/Container";

import Logo from "@/components/Logo";

const AuthLayout = ({children}: React.PropsWithChildren) => {
  return (
    <section className="relative min-h-dvh overflow-hidden flex flex-col">
      <Shape />
      <Container className="z-10 relative flex-1 flex flex-col">
        <div className="py-2rem flex-1 flex flex-col">
          <Logo className="mb-3rem" />
          <div className="flex-1 flex flex-col justify-center w-full max-w-[500px]">{children}</div>
        </div>
      </Container>
    </section>
  );
};

export default AuthLayout;
