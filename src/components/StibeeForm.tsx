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
          className="flex items-center gap-1 font-accent"
        >
          <input
            type="email"
            name="email"
            placeholder="hello@email.com"
            required
            className="bg-white/10 border-none rounded-full px-[15px] text-[15px] font-accent font-normal text-white w-[210px] h-[44px] outline-none"
          />
          <input type="hidden" name="stb_policy" value="stb_policy_true" />
          <button
            type="submit"
            disabled={sending}
            className={`bg-[#D3B9C4] text-[#382A25] border-none rounded-full w-[72px] h-[42px] text-[15px] font-accent font-medium whitespace-nowrap ${sending ? 'cursor-default' : 'cursor-pointer'}`}
          >
            {sending ? '...' : '구독'}
          </button>
        </form>
      ) : (
        <div className="bg-white/20 rounded-full px-[23px] text-[15px] font-accent font-normal text-white w-[286px] h-[44px] leading-[44px] text-left">
          Check your email ✦ Thanks💖
        </div>
      )}
      <iframe ref={iframeRef} name="stibee_hidden" className="hidden" />
    </>
  )
}
