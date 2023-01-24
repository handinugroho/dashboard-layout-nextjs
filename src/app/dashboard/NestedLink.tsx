import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface Props {
    id?: string;
    href: string;
    title: string;
    dataChildren?: Props[];
}

const NestedLink = ({ href, title, dataChildren }: Props) => {
    const [isToggle, setToggle] = useState(false);
    if (dataChildren) {
        return (
            <div>
                <Link href={href}>
                    <div className='w-full rounded-lg hover:bg-gray-500 hover:bg-opacity-10 px-4 py-2'>
                        <div
                            className={clsx(
                                `flex flex-row space-x-2 items-center`
                            )}>
                            <svg
                                viewBox='0 0 12 12'
                                role={"button"}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.nativeEvent.preventDefault();
                                    setToggle((prev) => !prev);
                                }}
                                className={clsx(
                                    "w-[12px] h-[12px] transition font-bold",
                                    isToggle ? "rotate-0" : "-rotate-90"
                                )}>
                                <path d='M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z'></path>
                            </svg>
                            <span>{title}</span>
                        </div>
                    </div>
                </Link>
                <motion.div
                    className={"w-full overflow-hidden pl-4"}
                    initial={{ height: "0" }}
                    animate={{ height: isToggle ? "fit-content" : 0 }}>
                    {dataChildren.map((child) => {
                        return (
                            <NestedLink
                                key={child.id}
                                href={href + child.href}
                                title={child.title}
                                dataChildren={child.dataChildren}
                            />
                        );
                    })}
                </motion.div>
            </div>
        );
    }
    return (
        <div className='flex flex-col space-4'>
            <Link
                href={href}
                className='w-full rounded-lg px-4 py-2 flex flex-row space-x-2 items-center hover:bg-gray-500 hover:bg-opacity-10'>
                <span>{title}</span>
            </Link>
        </div>
    );
};

export default NestedLink;
