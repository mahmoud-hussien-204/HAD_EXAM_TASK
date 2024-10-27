import Divider from "@/app/(auth)/_components/Divider";

import HaveAndNotHaveAccount from "@/app/(auth)/_components/HaveAndNotHaveAccount";

import LoginForm from "@/app/(auth)/_components/LoginForm";

import {Title} from "@/app/(auth)/_components/Title";

import WithGoogle from "@/app/(auth)/_components/WithGoogle";

import TransitionPage from "@/components/TransitionPage";

const LoginPage = () => {
  return (
    <TransitionPage>
      <Title title="Welcome back!" subtitle="We are glad to see you again!" className="mb-3rem" />
      <WithGoogle title="Sign in with Google" className="mb-2rem" />
      <Divider className="mb-2rem" />
      <LoginForm />
      <HaveAndNotHaveAccount className="mt-2rem" />
    </TransitionPage>
  );
};

export default LoginPage;
