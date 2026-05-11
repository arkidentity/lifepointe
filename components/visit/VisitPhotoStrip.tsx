import Image from 'next/image'
import lobbyImg from '@/images/lp-kids3.jpg'

export function VisitPhotoStrip() {
  return (
    <div className="relative w-full h-[220px] md:h-[300px] overflow-hidden">
      <Image
        src={lobbyImg}
        alt="Lifepointe Church community gathering"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent 50%, rgba(0,0,0,0.18) 100%)' }}
      />
    </div>
  )
}
