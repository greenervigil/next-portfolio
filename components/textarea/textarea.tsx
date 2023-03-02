const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = () => {
  return (
    <div className="flex justify-between m-2">
      <label className="font-mono text-neutral-900 mr-1" htmlFor='message'>Message</label>
      <textarea className="font-mono w-3/4 h-48 rounded border-solid border-cyan-400 bg-slate-50 text-slate-700 p-2" name="message" id='message' placeholder="Send me your details" required></textarea>
    </div>
  )
}

export default Textarea;