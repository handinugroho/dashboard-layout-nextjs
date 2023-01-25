"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";
import RightSidebar from "./RightSidebar";
import { useSidebarStore } from "@/stores/sidebarStore";
import { useRightSidebarStore } from "@/stores/rightSidebarStore";

export default function Dashboard() {
    const sidebarWidth = useSidebarStore((state) => state.sidebarWidth);
    const rightSidebarWidth = useRightSidebarStore(
        (state) => state.sidebarWidth
    );
    return (
        <main className='flex flex-row h-screen w-screen'>
            <Sidebar />
            <div className='flex flex-grow flex-row'>
                <div className='flex flex-grow flex-col z-100'>
                    <Header />
                    <div className='flex flex-row h-full p-4 overflow-auto max-h-screen w-full overflow-x-scroll'>
                        <div className='flex-1 overflow-x-auto'>
                            <p>
                                Do incididunt et qui do dolore do elit pariatur
                                duis cupidatat. Cupidatat consequat nisi aliqua
                                esse cillum nulla exercitation eiusmod laborum
                                duis pariatur. Non deserunt laboris exercitation
                                sunt in quis incididunt. Laboris aute voluptate
                                ad voluptate sunt. Labore ullamco eiusmod
                                consectetur deserunt officia anim nulla laboris
                                ipsum ipsum esse. Pariatur officia consequat
                                proident pariatur laborum ut ullamco deserunt ut
                                Lorem eiusmod commodo velit. Ipsum ut ex labore
                                aute veniam duis pariatur sunt excepteur mollit.
                                Proident magna minim sunt voluptate exercitation
                                sunt veniam labore fugiat non ad aute laboris
                                enim. Enim velit sint eu id esse exercitation
                                cupidatat elit nulla. Proident pariatur culpa
                                eiusmod excepteur duis occaecat. Velit et id
                                occaecat irure aliqua laboris voluptate irure
                                officia tempor in sint nisi deserunt.
                                Reprehenderit officia labore ullamco commodo.
                                Cillum commodo do et ullamco. Ex nulla enim
                                velit laborum eu pariatur veniam veniam ut Lorem
                                cupidatat. Pariatur amet et amet velit ad
                                occaecat laborum exercitation ipsum. Nisi elit
                                nisi sit excepteur aute irure incididunt ex elit
                                enim in minim. Esse consequat duis id nostrud
                                nisi officia minim minim culpa. Adipisicing in
                                ipsum dolore reprehenderit dolor qui. Ipsum
                                labore ipsum laborum in laboris do labore
                                occaecat irure pariatur consequat duis nisi.
                                Dolore cupidatat officia eiusmod tempor enim
                                enim. Ut tempor mollit eiusmod tempor. Non
                                veniam ex minim minim magna fugiat eu mollit.
                                Cupidatat incididunt deserunt occaecat veniam
                                esse pariatur nulla ullamco adipisicing. Non
                                proident sit duis ad enim labore sit
                                exercitation mollit cillum. Dolor magna mollit
                                est velit ex laborum occaecat adipisicing
                                eiusmod cupidatat.
                            </p>
                        </div>
                    </div>
                </div>
                <RightSidebar />
            </div>
        </main>
    );
}
