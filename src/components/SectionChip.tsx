// src/components/SectionChip.tsx
export default function SectionChip({ label }: { label: string }) {
    return (
      <span style={{
        display: 'inline-block',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '12px',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#FDCADE',
        border: '1px solid rgba(253,202,222,0.5)',
        borderRadius: '50px',
        padding: '4px 15px',
        marginBottom: '24px'
      }}>{label}</span>
    )
  }
  