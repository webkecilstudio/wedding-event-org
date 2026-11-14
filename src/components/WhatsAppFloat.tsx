import { FaWhatsapp } from 'react-icons/fa6'
import { WA_LINK } from '../data/content'

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat WhatsApp dengan Selaras"
      className="fixed bottom-6 right-6 z-[200] grid size-14 place-items-center rounded-full bg-forest text-white shadow-lg transition duration-200 hover:scale-105 hover:bg-[#43a047]"
    >
      <FaWhatsapp className="size-7" />
    </a>
  )
}
