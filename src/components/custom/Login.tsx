import { ButtonLogin } from "../ui/button";
import Input from "./Input";

type Props = {
    className?: string
}

function Login({ className }: Props) {

    const MotionForm = " animate-fade-up animate-duration-500 animate-ease-out animate-normal"

    return (
        <form action="" className={` ${className} flex-col gap-4 || w-full || ${MotionForm} `}>
            <Input type="email" id="email" placeholder="Email" />
            <Input type="Password" id="password" placeholder="Password" />

            <ButtonLogin />
        </form>
    );
}

export default Login;