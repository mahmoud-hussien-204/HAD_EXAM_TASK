"use client";

import {authSliceActions} from "@/app/(auth)/slice";

import IconLogout from "@/components/icons/IconLogout";

import {useAppStoreDispatch} from "@/hooks/useAppStore";

import {useRouter} from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const dispatch = useAppStoreDispatch();

  const handleLogout = () => {
    dispatch(authSliceActions.logout());
    router.replace("/auth/login");
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="w-full flex items-center gap-0.75rem text-error"
    >
      <IconLogout />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
