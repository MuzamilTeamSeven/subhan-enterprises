const brands = ["CFMOTO", "CAN-AM", "LINHAI", "Kawasaki", "POLARIS", "YAMAHA"]

export function Brands() {
  return (
    <section className="px-3 py-6 sm:px-6">
      <div className="mx-auto max-w-7xl rounded-2xl border border-border bg-card/40 p-6 sm:p-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Authorized Dealer Of Global Brands
        </p>
        <div className="mt-6 grid grid-cols-3 items-center gap-6 md:grid-cols-6">
          {brands.map((b) => (
            <span
              key={b}
              className="text-center text-lg font-extrabold uppercase tracking-wide text-muted-foreground/70 transition hover:text-foreground"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
