"use client";

import {authSliceActions} from "@/app/(auth)/slice";

import {constantTimer} from "@/constants";

import {useAppStoreDispatch} from "@/hooks/useAppStore";

import {yupResolver} from "@hookform/resolvers/yup";

import {useRouter} from "next/navigation";

import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {ILoginForm} from "../interfaces";

const schema = Yup.object().shape({
  email: Yup.string().email("Enter valid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const useLoginForm = () => {
  const dispatch = useAppStoreDispatch();

  const router = useRouter();

  const form = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: {
      email: "m.hus.dev@gmail.com",
      password: "123123",
    },
  });

  async function onSubmit(data: ILoginForm) {
    await new Promise((resolve) => {
      setTimeout(() => {
        dispatch(
          authSliceActions.login({
            name: "Mahmoud Hussien",
            email: data.email,
            id: "1",
            access_token: "access-token",
            avatar_url: "",
          })
        );
        resolve(null);
      }, constantTimer);
    });
    router.replace("/");
  }

  const emailError = form.formState.errors.email?.message;

  const passwordError = form.formState.errors.password?.message;

  return {...form, onSubmit, emailError, passwordError};
};

export default useLoginForm;
