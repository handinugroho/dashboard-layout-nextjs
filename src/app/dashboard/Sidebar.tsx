"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import NestedLink from "./NestedLink";
const MIN_WIDTH_IN_PX = 280;
const DEFAULT_WIDTH_IN_PX = 400;
const MAX_WIDTH_IN_PX = 500;

const links = [
    {
        id: "0",
        title: "Home",
        href: "/",
    },
    {
        id: "1",
        title: "Tweets",
        href: "/tweets",
        dataChildren: [
            {
                id: "1-1",
                title: "Tweet 1",
                href: "/tweet-1",
                dataChildren: [
                    {
                        id: "1-1-1",
                        title: "Tweet 1-a",
                        href: "/tweet-1/a",
                    },
                ],
            },
            {
                id: "1-2",
                title: "Tweet 2",
                href: "/tweet-2",
            },
            {
                id: "1-3",
                title: "Tweet 3",
                href: "/tweet-3",
            },
            {
                id: "1-4",
                title: "Tweet 4",
                href: "/tweet-4",
            },
            {
                id: "1-5",
                title: "Tweet 5",
                href: "/tweet-5",
            },
        ],
    },
    {
        id: "2",
        title: "Books To Read",
        href: "/books",
    },
    {
        id: "3",
        title: "2023 Goals",
        href: "/2023-goals",
    },
];

const Sidebar = () => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_WIDTH_IN_PX);

    const startResizing = useCallback(() => {
        setIsResizing(true);
    }, []);

    const stopResizing = useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = useCallback(
        (mouseMoveEvent: MouseEvent) => {
            if (isResizing) {
                if (sidebarRef.current != null) {
                    let width = Math.min(
                        Math.max(
                            MIN_WIDTH_IN_PX,
                            mouseMoveEvent.clientX -
                                sidebarRef.current.getBoundingClientRect().left
                        ),
                        MAX_WIDTH_IN_PX
                    );
                    setSidebarWidth(width);
                }
            }
        },
        [isResizing]
    );

    useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [resize, stopResizing]);

    const isShowingSidebar = sidebarWidth > 0;
    return (
        <div
            className='relative flex flex-row z-1 bg-white shadow-2xl'
            ref={sidebarRef}
            onMouseDown={(e) => e.preventDefault()}>
            <motion.div
                className={clsx("h-full max-h-full overflow-hidden")}
                initial={{ width: DEFAULT_WIDTH_IN_PX }}
                animate={{
                    width: sidebarWidth,
                }}
                transition={{ bounce: 0, damping: 100 }}>
                <div className='flex flex-row justify-between items-center p-4'>
                    <h1 className='font-medium text-xl'>Sidebar</h1>
                    <button
                        type='button'
                        onClick={() => {
                            setSidebarWidth(0);
                        }}>
                        Hide
                    </button>
                </div>
                <div className='mt-4'>
                    {links.map((link) => {
                        return (
                            <NestedLink
                                key={link.id}
                                title={link.title}
                                href={link.href}
                                dataChildren={link.dataChildren}
                            />
                        );
                    })}
                </div>
            </motion.div>
            <div
                className='flex-grow-0 absolute top-0 right-0 mr-[6px] w-0 ease-in-out duration-500'
                onMouseDown={startResizing}>
                <div className='cursor-col-resize h-screen w-[12px] resize-x hover:bg-opacity-30 hover:bg-gray-400 transition ease-in-out'></div>
            </div>
            <motion.button
                tabIndex={0}
                className={clsx(
                    "absolute top-0 left-0 p-3 bg-white border z-0"
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: isShowingSidebar ? 0 : 100 }}
                type='button'
                onClick={() => {
                    setSidebarWidth(DEFAULT_WIDTH_IN_PX);
                }}>
                Show
            </motion.button>
        </div>
    );
};
export default Sidebar;
