import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      
      {/* Logo - top left */}
      <div className="absolute top-6 left-6">
        <Image
          src="/images/navbarLogo.png"
          alt="Logo"
          width={100}
          height={200}
        />
      </div>

      {/* Auth content */}
      {children}
    </main>
  );
}
