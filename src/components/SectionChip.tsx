export default function SectionChip({ label }: { label: string }) {
  return (
    <span className="inline-block font-accent text-xs font-medium tracking-[0.1em] uppercase text-pink-soft border border-pink-soft/50 rounded-full px-[15px] py-1.5 mb-6">
      {label}
    </span>
  )
}