// import { Sidebar } from "flowbite-react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Test from "./components/Test";
import Sidebar from "./components/Sidebar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Next JS Sidebar- Tailwindcss" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
    </div>
  );
}
