import Link from "next/link";

export default function Home() {
    return (
        <main className='flex flex-col gap-4 items-center justify-center h-screen w-screen'>
            <h1 className='text-4xl font-bold'>Dashboard template for apps</h1>
            <p>
                Inspired by{" "}
                <Link
                    href={"https://notion.so"}
                    target='_blank'
                    className='underline'>
                    <strong>Notion</strong>
                </Link>
            </p>
            <div className=''>
                <h3 className='text-xl font-medium'>Features</h3>
                <ul className='list-decimal list-inside'>
                    <li>Resizable sidebar with show and hide</li>
                    <li>Nested link</li>
                    <li>Responsive</li>
                    <li>Use Typescript</li>
                    <li>NextJS 13</li>
                </ul>
            </div>
            <div className=''>
                <Link
                    href='/dashboard'
                    className='px-4 py-2 rounded-lg bg-blue-400 scale-100 hover:scale-150 transition'>
                    Check the dashboard here
                </Link>
            </div>
        </main>
    );
}
