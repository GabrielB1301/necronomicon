export default function Home() {
    return (
        <div className="flex flex-wrap items-center justify-center h-screen">
            <div className="w-full max-w-lg m-auto text-center p-4">
                <h1 className="text-5xl mb-6 font-semibold">
                    Free D&D Spell Manager
                </h1>
                <p className="text-xl mb-12 leading-8 max-w-md w-full">
                    Character creation can take forever. D&D Beyond's free
                    character builder makes it quick and easy. Create a D&D
                    character in minutes and jump into the action with your
                    digital character sheet. Roll dice right from your sheet,
                    track your spells, inventory, hit points, and more.
                </p>
                <div className="mb-4 max-w-80 mx-auto">
                    <button className="w-full bg-red-700 uppercase py-3 rounded font-bold text-sm">
                        Get Started for Free
                    </button>
                </div>
                <div className="max-w-80 mx-auto">
                    <a className="w-full text-center" href="/login">
                        Already have an account?
                    </a>
                </div>
            </div>
        </div>
    );
}
