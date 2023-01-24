import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className='flex items-center justify-center h-screen w-screen'>
            <Link
                href='/dashboard'
                className='px-4 py-2 rounded-lg bg-fuchsia-400 hover:scale-105 transition-all'>
                Dashboard
            </Link>
        </main>
    );
}
