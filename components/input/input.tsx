interface InputProps {
    type: string;
    name: string;
    id?: string;
    required?: boolean;
    label: string;
}

const Input: React.FC<InputProps> = ({ type, name, id, required = true, label}) => {
    return (
        <div className="flex justify-between m-2">
            <label className="font-mono mr-1" htmlFor={id}>{label}&nbsp;</label>
            <input className="font-mono w-2/3 rounded border-solid border-cyan-400 bg-slate-50" type={type} name={name} id={id} required={required} />
        </div>
    )
}

export default Input;