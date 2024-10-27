"use client";

import LogoutButton from "@/app/(dashboard)/_components/LogoutButton";

import imageDefaultUserAvatar from "@/app/assets/default-user-avatar.svg";

import DropdownContent from "@/components/DropdownContent";

import IconAngleBottom from "@/components/icons/IconAngleBottom";

import AppHelper from "@/helpers/AppHelper";

import {useAppStoreSelector} from "@/hooks/useAppStore";

import Image from "next/image";

interface IProps {
  className?: string;
}

const Profile = ({className}: IProps) => {
  const userData = useAppStoreSelector((state) => state.authReducer.userData);

  return (
    <div className={AppHelper.classes("dropdown z-50", className)}>
      <div
        tabIndex={0}
        role="button"
        className="flex items-center gap-0.5rem bg-base-100 rounded-full pe-1rem py-0.25rem ps-0.25rem border"
      >
        <Image
          src={userData?.avatar_url || imageDefaultUserAvatar}
          alt="default avatar"
          width={45}
          height={45}
          className="rounded-full"
        />
        <div className="">
          <h6 className="mb-[-5px] tracking-wide">{AppHelper.sliceName(userData?.name)}</h6>
          <span className="text-14 text-gray-500">{userData?.email}</span>
        </div>

        <IconAngleBottom
          svgProps={{
            className: "w-0.75rem me-[-5px]",
          }}
          pathProps={{
            className: "fill-gray-500",
          }}
        />
      </div>
      <DropdownContent>
        <Image
          src={userData?.avatar_url || imageDefaultUserAvatar}
          alt="default avatar"
          width={70}
          height={70}
          className="mx-auto rounded-full"
        />
        <h5 className="text-center mt-1rem">{userData?.name}</h5>

        <h5 className="text-center text-gray-500">{userData?.email}</h5>

        <nav className="my-1rem border-y py-1rem"></nav>

        <LogoutButton />
      </DropdownContent>
    </div>
  );
};

export default Profile;
