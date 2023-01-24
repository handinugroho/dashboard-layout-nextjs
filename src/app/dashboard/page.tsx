import Image from "next/image";
import Sidebar from "./Sidebar";

export default function Dashboard() {
    return (
        <main className='flex flex-row h-screen w-full'>
            <Sidebar />
            <div className='p-4 flex-grow bg-white z-100 '>
                <div className=''>Header</div>
                <div className='max-w-5xl m-auto'>Main content</div>
            </div>
        </main>
    );
}
