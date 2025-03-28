
interface InputProps {
    placeholder?: string;
    type?: string;
    className?: string;
    id?: string;
    title?: string;
}

function Input({ placeholder, type, className, id, title }: InputProps) {

    const styleInput = 'bg-white/20 backdrop-blur-xl || border-1 border-white rounded-full || text-white || py-2 px-5 || placeholder:text-white placeholder:font-medium ';

    return (
        <input type={type} placeholder={placeholder} id={id} title={title} className={`${className} ${styleInput}`} />
    );
}

export default Input;