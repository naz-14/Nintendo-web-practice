import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">
        ¡Hola, Tailwind CSS en Next.js!
      </h1>
    </div>
  );
}
