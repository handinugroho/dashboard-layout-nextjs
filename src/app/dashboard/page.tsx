"use client";

import { useSidebarStore } from "../sidebarStore";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import clsx from "clsx";
import { FiChevronsRight } from "react-icons/fi";

export default function Dashboard() {
    const isShowingSidebar = useSidebarStore((s) => s.computed.isShowing);
    const openSidebar = useSidebarStore((s) => s.openSidebar);
    return (
        <main className='flex flex-row h-screen w-full'>
            <Sidebar />
            <div className='flex-grow z-100'>
                <div className='flex flex-row items-center p-4'>
                    <motion.button
                        tabIndex={0}
                        type='button'
                        onClick={openSidebar}
                        className='p-2 rounded transition bg-gray-400 bg-opacity-0 hover:bg-opacity-20 mr-4'
                        initial={{
                            display: "none",
                        }}
                        animate={{
                            display: isShowingSidebar ? "none" : "block",
                        }}>
                        <FiChevronsRight />
                    </motion.button>

                    <h1 className='text-xl'>Header</h1>
                </div>
                <div className='p-4'>Main content</div>
            </div>
        </main>
    );
}
