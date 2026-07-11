import Link from "next/link"
import type { MDXComponents } from "mdx/types"
import { CodeTabs } from "./code-tabs"

export const mdxComponents: MDXComponents = {
  CodeTabs,
  h2: ({ children, ...props }) => (
    <h2
      className="font-orbitron text-xl sm:text-2xl font-bold text-cyan-400 tracking-wide mt-12 mb-4 scroll-mt-24"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="font-orbitron text-lg font-bold text-orange-400 tracking-wide mt-8 mb-3 scroll-mt-24"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p className="text-cyan-100 font-inter leading-relaxed mb-5" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#")
    if (isInternal && href) {
      return (
        <Link href={href} className="text-orange-400 underline underline-offset-4 hover:text-orange-300 transition-colors">
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-400 underline underline-offset-4 hover:text-orange-300 transition-colors"
        {...props}
      >
        {children}
      </a>
    )
  },
  ul: ({ children, ...props }) => (
    <ul className="text-cyan-100 font-inter mb-5 ml-6 space-y-2 list-disc marker:text-cyan-400" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="text-cyan-100 font-inter mb-5 ml-6 space-y-2 list-decimal marker:text-cyan-400" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="pl-1 leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-2 border-cyan-400/50 pl-4 my-6 text-cyan-100/80 italic font-inter" {...props}>
      {children}
    </blockquote>
  ),
  strong: ({ children, ...props }) => (
    <strong className="text-cyan-400 font-semibold" {...props}>
      {children}
    </strong>
  ),
  code: ({ children, className, ...props }) => {
    // rehype-pretty-code marks fenced code blocks with a `data-language` attribute
    // (not a className), so anything without it is inline code.
    const isFencedBlock = "data-language" in props
    if (!isFencedBlock) {
      return (
        <code
          className="bg-black/60 border border-cyan-400/20 text-orange-400 rounded px-1.5 py-0.5 text-sm font-mono"
          {...props}
        >
          {children}
        </code>
      )
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
  pre: ({ children, ...props }) => (
    <pre
      className="bg-black/70 border border-cyan-400/20 rounded-lg p-4 overflow-x-auto mb-6 text-sm leading-relaxed [&_code]:bg-transparent [&_code]:border-none [&_code]:p-0"
      {...props}
    >
      {children}
    </pre>
  ),
  hr: (props) => <hr className="border-cyan-400/20 my-10" {...props} />,
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto mb-6 border border-cyan-400/20 rounded-lg">
      <table className="w-full text-sm font-inter" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-cyan-400/10 text-cyan-400 font-orbitron text-xs tracking-wider uppercase" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }) => (
    <th className="text-left px-4 py-2 border-b border-cyan-400/20" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-4 py-2 border-b border-cyan-400/10 text-cyan-100" {...props}>
      {children}
    </td>
  ),
}
