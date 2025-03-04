"use client";

import { ConfigedToastContainer } from "@/app/lib/config/toast";
import { StoreProvider } from "@/app/lib/store/store-provider";
import { JSX, useEffect } from "react";

function ClientProviderLayout({
  header,
  children,
}: Readonly<{
  header?: JSX.Element;
  children: React.ReactNode;
}>) {
  const logoutWhenLeave = () => {
    fetch("/api/logout");
  };

  useEffect(() => {
    window.addEventListener("beforeunload", logoutWhenLeave);

    return () => window.removeEventListener("beforeunload", logoutWhenLeave);
  }, []);
  return (
    <StoreProvider>
      <ConfigedToastContainer />
      {children}
    </StoreProvider>
  );
}

export default ClientProviderLayout;
