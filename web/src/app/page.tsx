import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl sm:text-5xl font-bold text-center">
        Welcome to <span className="text-blue-600">3DForge</span>
      </h1>
    </div>
  );
}
