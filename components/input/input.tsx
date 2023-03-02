interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    label: string;
    required?: boolean;
}

const Input: React.FC<InputProps> = ({ id, label, required = false }) => {
    return (
        <div className="flex justify-between gap-1 m-2">
            <label className="font-mono text-neutral-900 mr-1" htmlFor={id}>{label}&nbsp;</label>
            <input className="font-mono w-3/4 h-10 rounded border-solid border-cyan-400 bg-slate-50 text-slate-800 p-2 focus:border-slate-600" id={id} required={required} />
        </div>
    )
}

export default Input;