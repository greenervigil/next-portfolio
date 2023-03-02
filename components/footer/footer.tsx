const Footer: React.FC = () => {
    return (
        <footer className="bottom-0 w-full flex justify-center align-baseline border-t border-t-teal-600">
            <p className="font-mono text-slate-400 m-3 ">Greener-Vigil &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer