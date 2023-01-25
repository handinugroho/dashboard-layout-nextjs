import { useSidebarStore } from "@/stores/sidebarStore";
import clsx from "clsx";
import { FiClock } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRightSidebarStore } from "@/stores/rightSidebarStore";

const Header = () => {
    const isShowingSidebar = useSidebarStore((s) => s.computed.isShowing);
    const openSidebar = useSidebarStore((s) => s.openSidebar);

    const openRightSidebar = useRightSidebarStore((s) => s.openSidebar);
    return (
        <div className='flex flex-row items-center justify-between p-4 z-30 min-h-[80px]'>
            <div className='flex flex-row items-center group'>
                <button
                    tabIndex={0}
                    type='button'
                    onClick={openSidebar}
                    className={clsx(
                        "p-2 rounded transition bg-gray-400 bg-opacity-0 hover:bg-opacity-20 mr-4",
                        isShowingSidebar ? "hidden" : "block"
                    )}>
                    <GiHamburgerMenu />
                </button>

                <h1 className='text-xl'>Header</h1>
            </div>
            <div className='flex flex-row items-center gap-3 h-[45px]'>
                <div className=''>
                    <button
                        className='p-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-20'
                        type='button'>
                        Share
                    </button>
                </div>
                <div className=''>
                    <button
                        className='p-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-20'
                        type='button'
                        onClick={openRightSidebar}>
                        <FiClock size={"1.2em"} />
                    </button>
                </div>
                <div className=''>
                    <button
                        className='p-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-20'
                        type='button'>
                        <FaRegStar size={"1.2em"} />
                    </button>
                </div>
                <div className=''>
                    <button
                        className='p-2 rounded-lg hover:bg-gray-400 hover:bg-opacity-20'
                        type='button'>
                        <BsThreeDots size={"1.2em"} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
