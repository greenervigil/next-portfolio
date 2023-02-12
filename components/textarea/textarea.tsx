const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = () => {
  return (
    <div className="flex justify-between m-2">
      <label className="font-mono mr-1" htmlFor='message'>Message</label>
      <textarea className="font-mono w-2/3 h-48 rounded border-solid border-cyan-400 bg-slate-50" name="message" id='message' placeholder="Send me your details"></textarea>
    </div>
  )
}

export default Textarea;