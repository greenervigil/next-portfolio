interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ id, label}) => {
    return (
        <div className="flex justify-between m-2">
            <label className="font-mono mr-1" htmlFor={id}>{label}&nbsp;</label>
            <input className="font-mono w-2/3 h-10 rounded border-solid border-cyan-400 bg-slate-50 p-2 focus:border-slate-600"  id={id} maxLength={length}/>
        </div>
    )
}

export default Input;