import {EnumAppKeys, EnumDefaultConfig} from "@/enums";

import AppStoreProvider from "@/providers/AppStoreProvider";

import type {Metadata} from "next";

import {Poppins} from "next/font/google";

import {cookies} from "next/headers";

import {Toaster} from "react-hot-toast";

import "./globals.css";

const font = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HAD - Exam Task",
    template: "HAD - Exam Task | %s",
  },
  description: "HAD - Examination front-end task",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // get them from cookies
  const getCookies = await cookies();

  const theme = getCookies.get(EnumAppKeys.THEME)?.value || EnumDefaultConfig.THEME;

  const userCookies = getCookies.get(EnumAppKeys.USER_DATA)?.value;

  let userData = null;

  try {
    userData = userCookies ? JSON.parse(userCookies) : null;
  } catch (error) {
    console.log("error occurred while parsing user data", error);
  }

  console.log("user data", userData);

  return (
    <AppStoreProvider user={userData}>
      <html lang="en" data-theme={theme}>
        <body className={font.className}>
          <main>{children}</main>
          <div id="modal-root"></div>
          <Toaster position="top-right" />
        </body>
      </html>
    </AppStoreProvider>
  );
}
