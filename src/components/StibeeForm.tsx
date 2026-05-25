import { useRef, useState } from 'react'

export default function StibeeForm() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleSubmit = () => {
    setSending(true)
    setTimeout(() => {
      setSubmitted(true)
    }, 1500)
  }

  return (
    <>
      {!submitted ? (
        <form
          action="https://stibee.com/api/v1.0/lists/oQpmquds9bhyiLdseTBCKWzhkpjEbw==/public/subscribers"
          method="POST"
          target="stibee_hidden"
          acceptCharset="utf-8"
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            width: '288px',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="hello@email.com"
            required
            style={{
              background: 'rgba(187, 187, 187, 0.33)',
              border: 'none',
              borderRadius: '50px',
              padding: '0 16px',
              fontSize: '16px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              color: '#FFFFFF',
              width: '196px',
              height: '52px',
              outline: 'none',
            }}
          />
          <input type="hidden" name="stb_policy" value="stb_policy_true" />
          <button
            type="submit"
            disabled={sending}
            style={{
              background: '#F0D8D5',
              color: '#382A25',
              border: 'none',
              borderRadius: '50px',
              width: '88px',
              height: '52px',
              fontSize: '16px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              cursor: sending ? 'default' : 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {sending ? '...' : 'Join ✦'}
          </button>
        </form>
      ) : (
        <div
          style={{
            background: 'rgba(187, 187, 187, 0.33)',
            borderRadius: '50px',
            padding: '0 23px',
            fontSize: '16px',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            color: '#FFFFFF',
            width: '288px',
            height: '52px',
            lineHeight: '52px',
            textAlign: 'left',
          }}
        >
          Check your email ✦ Thanks💖
        </div>
      )}
      <iframe
        ref={iframeRef}
        name="stibee_hidden"
        style={{ display: 'none' }}
      />
    </>
  )
}
