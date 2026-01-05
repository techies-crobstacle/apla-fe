import Image from "next/image";
import { ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      {/* Logo top-left */}
      <div className="absolute top-6 left-6">
        <Image
          src="/images/navbarLogo.png"
          alt="Logo"
          width={120}
          height={40}
        />
      </div>

      {children}
    </main>
  );
}
