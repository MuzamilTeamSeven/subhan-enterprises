const brands = ["CFMOTO", "LINHAI", "KAYO", "TAO MOTOR", "LONCIN", "APOLLO"]

export function Brands() {
  return (
    <section className="px-3 py-6 sm:px-6">
      <div className="glass mx-auto max-w-7xl rounded-2xl p-6 sm:p-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Authorized Dealer Of Global Brands
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-6 items-center justify-items-center">
          {brands.map((b) => (
            <span
              key={b}
              className="text-center text-base sm:text-lg font-extrabold uppercase tracking-wide text-muted-foreground/70 transition hover:text-foreground"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
