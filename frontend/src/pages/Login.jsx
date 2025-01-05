export default function Login() {
    return (
        <section className="w-full h-screen flex flex-row">
            <div className="w-2/5"></div>
            <div className="w-3/5 bg-white">
                <div className="flex flex-col justify-center max-w-sm m-auto">
                    <form class="w-full mx-auto mb-16">
                        <div class="mb-5">
                            <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-neutral-600"
                            >
                                Email
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
                                placeholder="exemple@email.com"
                            ></input>
                        </div>
                        <div class="mb-5">
                            <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-neutral-600"
                            >
                                Password
                            </label>
                            <input
                                required
                                type="password"
                                id="email"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
                            ></input>
                        </div>
                        <div class="mb-5">
                            <label
                                for="confirm-password"
                                class="block mb-2 text-sm font-medium text-neutral-600"
                            >
                                Confirm Password
                            </label>
                            <input
                                required
                                type="password"
                                id="confirm-password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5"
                            ></input>
                        </div>
                        <button className="w-full bg-sky-600 font-bold py-2">
                            Send
                        </button>
                    </form>
                    <button className="bg-sky-600 h-20 relative text-xl font-bold flex pl-1 rounded items-center justify-start">
                        <div className="size-[74px] bg-[url('../public/images/svg/google.svg')] rounded bg-white bg-no-repeat bg-[length:35px] bg-center"></div>
                        <span className="px-8"> Sign up with Google</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
