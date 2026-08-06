import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

export function BlogArticleContent({ post }: { post: BlogPost }) {
  return (
    <article className="prose prose-invert max-w-none">
      {post.sections.map((section) => (
        <section key={section.heading} className="mt-8">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">{section.heading}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {p.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, j) => {
                const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
                if (linkMatch) {
                  const [, label, href] = linkMatch
                  const isExternal = href.startsWith("http")
                  return isExternal ? (
                    <a
                      key={j}
                      href={href}
                      className="link-underline font-medium text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link key={j} href={href} className="link-underline font-medium text-primary">
                      {label}
                    </Link>
                  )
                }
                return part
              })}
            </p>
          ))}
          {section.list && (
            <ul className="mt-4 space-y-2">
              {section.list.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {post.faqs.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-3">
            {post.faqs.map((faq) => (
              <details key={faq.question} className="glass group rounded-xl p-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-foreground marker:hidden sm:text-base">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <div className="glass-tint mt-10 flex flex-col items-start gap-4 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-foreground">{post.cta.heading}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{post.cta.text}</p>
        <Link
          href={post.cta.href}
          className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
        >
          {post.cta.buttonLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
