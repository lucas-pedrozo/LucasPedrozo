import { useState, useEffect } from "react";
import Login from "@/components/custom/Login";
import Register from "@/components/custom/Register";
import ImageLogin from "@/assets/image/ImagemLogin.webp";

function LoginUser() {

    // True: Login ativo; false: Register ativo
    const [isLoginActive, setIsLoginActive] = useState(true);

    // UseEffect para quando ouver  a troca detenas
    useEffect(() => {
        console.log(isLoginActive ? "Login ativo" : "Register ativo");
    }, [isLoginActive]);

    // Style dos button
    const styleButtonActive = "bg-white rounded-full px-5 py-2 font-bold text-black shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_0_8px_rgba(255,255,255,0.6)] transition duration-500 transform hover:scale-105";
    const styleButtonNull = "bg-black rounded-full px-5 py-2 font-bold text-white shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_0_8px_rgba(255,255,255,0.6)] transition duration-500 transform hover:scale-105";

    return (
        <main className="py-14 px-2.5">
            <section className="max-w-[500px] min-[880px]:max-w-[860px] mx-auto p-2.5 flex items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-3xl border border-white">

                <img src={ImageLogin} alt="imagem Login" className="rounded-2xl hidden min-[880px]:flex" />

                <div className="w-full">
                    <h2 className="text-4xl font-bold text-center pb-8" style={{ letterSpacing: "10px" }} >LOGIN</h2>

                    <div className="flex justify-center gap-5 pb-8">
                        <button onClick={() => setIsLoginActive(true)} className={`${isLoginActive ? styleButtonActive : styleButtonNull} cursor-pointer`}>Log in</button>

                        <button onClick={() => setIsLoginActive(false)} className={`${!isLoginActive ? styleButtonActive : styleButtonNull} cursor-pointer`}>Register</button>
                    </div>

                    {isLoginActive ? (<Login className="flex" />) : (<Register className="flex" />)}
                </div>
            </section>
        </main>
    );
}

export default LoginUser;