"use client";

import useLoginForm from "@/app/(auth)/_hooks/useLoginForm";

import Button from "@/components/Button";

import ErrorMessage from "@/components/ErrorMessage";

import Input from "@/components/Input";

import Label from "@/components/Label";

import Link from "next/link";

type Props = {};

const LoginForm = ({}: Props) => {
  const {
    onSubmit,
    handleSubmit,
    register,
    emailError,
    passwordError,
    formState: {isSubmitting},
  } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate name="login-form">
      <div className="mb-1rem">
        <Label htmlFor="form-email-input">Email</Label>
        <Input
          type="email"
          placeholder="Enter your email"
          id="form-email-input"
          isError={Boolean(emailError)}
          autoComplete="username"
          {...register("email")}
        />
        <ErrorMessage message={emailError} />
      </div>

      <div>
        <Label htmlFor="form-password-input">Password</Label>
        <Input
          type="password"
          placeholder="Enter your password"
          id="form-password-input"
          isError={Boolean(passwordError)}
          autoComplete="current-password"
          {...register("password")}
        />
        <ErrorMessage message={passwordError} />
      </div>

      <div className="mb-2rem flex justify-end">
        <Link href="" className="link-primary text-14">
          Forgot Password ?
        </Link>
      </div>

      <Button type="submit" className="w-full" isLoading={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
