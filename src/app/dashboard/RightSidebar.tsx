import { useRightSidebarStore } from "@/stores/rightSidebarStore";
import { FiChevronsRight } from "react-icons/fi";
import { motion } from "framer-motion";
import clsx from "clsx";

const RightSidebar = () => {
    const rightSidebarWidth = useRightSidebarStore((s) => s.sidebarWidth);
    const isShowingRightSidebar = useRightSidebarStore(
        (s) => s.computed.isShowing
    );
    const closeRightSidebar = useRightSidebarStore((s) => s.closeSidebar);
    return (
        <div className='absolute md:relative z-50 md:z-1 tlp-0 right-0 h-screen bg-white flex flex-row  shadow-2xl'>
            <motion.div
                initial={{ display: "none" }}
                animate={{
                    width: rightSidebarWidth,
                    display: isShowingRightSidebar ? "block" : "none",
                }}>
                <div className='w-full'>
                    <div className='min-h-[80px] flex items-center p-4'>
                        <button
                            tabIndex={0}
                            type='button'
                            onClick={closeRightSidebar}
                            className={clsx(
                                "z-40 p-2 rounded transition bg-gray-400 bg-opacity-0 hover:bg-opacity-20 mr-4"
                            )}>
                            <FiChevronsRight />
                        </button>
                    </div>
                    <div className='p-4'>Right Sidebar</div>
                </div>
            </motion.div>
        </div>
    );
};

export default RightSidebar;
