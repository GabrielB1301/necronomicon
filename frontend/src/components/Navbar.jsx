export default function Navbar() {
    return (
        <nav className="h-16 flex bg-neutral-900 w-full items-center justify-between px-24 border-b-2 border-red-700">
            <h1 className="text-lg font-bold">Necronomicon</h1>
            <div className="flex gap-8">
                <a className="font-normal text-base px-6 py-1" href="">
                    Sign In
                </a>
                <a className="bg-red-700 font-bold text-base px-6 py-1" href="">
                    Sign Up
                </a>
            </div>
        </nav>
    );
}
