import Image from "next/image"

export function Spinner({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span
      role="status"
      aria-label="Loading"
      className={`inline-block animate-spin rounded-full border-[3px] border-border border-t-primary ${className}`}
    />
  )
}

export function PageLoader({ label = "Loading" }: { label?: string }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-6">
      <div className="relative flex items-center justify-center">
        <Spinner className="h-16 w-16" />
        <Image
          src="/logo-quad.png"
          alt=""
          aria-hidden="true"
          width={32}
          height={32}
          className="absolute h-8 w-8 object-contain"
        />
      </div>
      <p className="text-sm font-medium tracking-wide text-muted-foreground">
        {label}
        <span className="animate-pulse">...</span>
      </p>
    </div>
  )
}
