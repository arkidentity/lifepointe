import { PageLayout } from '@/components/layout/PageLayout'

export const metadata = {
  title: 'About — Lifepointe Church',
  description: 'Lifepointe exists to point people to abundant life in Christ.',
}

const eyebrow = { fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }
const heading = { fontFamily: 'var(--font-display)', color: 'var(--lp-text)' }
const body = { fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }

// Carried over from lpcwestfield.com/about/our-beliefs.
const beliefs = [
  {
    title: 'The Bible',
    text: 'We believe the Bible is inspired by God in its every word, inerrant in its original text, and by Divine preservation is the only infallible and authoritative Word of God.',
  },
  {
    title: 'God',
    text: 'We believe that there is only one true and living God, the creator, and sustainer of all that is, who exists as three persons: the Father, the Son, and the Holy Spirit.',
  },
  {
    title: 'Jesus',
    text: 'We believe that Jesus Christ is the Son of God, existing from all eternity and born into this earth by a virgin, that he lived a sinless life, was crucified, shed His blood, and died as a substitute for His people whom He redeemed at the cross, that He was buried and rose from the dead on the third day, that after appearing to His disciples He rose bodily to Heaven where He is the intercessor and advocate for believers, and that He will someday bodily return to judge the world and set up His Kingdom.',
  },
  {
    title: 'The Holy Spirit',
    text: 'We believe that the Holy Spirit indwells every believer at the moment of conversion, that He empowers them to live lives honoring God and that He gives gifts to every Christian for service in the church. And we believe the Holy Spirit convicts those who have not believed in Jesus, of sin, of the righteousness of Jesus, and the certainty of judgment.',
  },
  {
    title: 'Salvation',
    text: "We believe that salvation is by faith alone in Jesus Christ and that no one comes to the Father except through Jesus Christ. And we believe when people are, by God's grace, redeemed that they cannot lose their salvation. We believe that people die only once and that everyone will stand before God, those who have believed in Jesus being given entrance into Heaven and those who have not believed in being condemned and consigned to Hell.",
  },
  {
    title: 'The Church',
    text: "We believe the local church is intended by God to be the primary place of worship, training, care, and evangelistic activity for every believer, and, therefore, it is God's will for every believer to be a member of a local church. We believe that the local church is comprised of people who have believed in Jesus and been baptized, who have joined together as a family under the leadership of God. We believe every church is an autonomous body of believers that may, under the leadership of God, choose to associate with other churches for a common mission.",
  },
  {
    title: 'Baptism',
    text: "We believe baptism is an act of obedience and testimony by people who have consciously received Jesus Christ as Savior. We believe that baptism is not necessary for salvation, but rather a significant act of public identification with Jesus, an initiation into the visible church, and the first step of Christian growth. It is the New Testament's means of making a public profession of faith. We believe the scriptural mode of baptism is immersion.",
  },
  {
    title: "The Lord's Supper",
    text: "We believe the Lord's Supper is given to the local church by our Savior as an opportunity of remembrance, examination, and celebration of His redemptive work. We believe this supper can be taken with meaning only by believers in Jesus. And we believe the elements of the Lord's Supper to be symbolic of Jesus' body and blood and that the Lord's Supper does not confer grace or further salvation.",
  },
  {
    title: 'Marriage and Family',
    text: 'We believe the family is the foundational institution of human society. It is composed of persons related to one another by marriage, blood, or adoption. We believe that marriage is the uniting of one man and one woman in a covenant of commitment designed to last a lifetime, made before God, and recognized by the state. We believe that the purposes of marriage are to express the relationship between Christ and His church, to provide the God-ordained context for sexual intimacy and marital companionship, to establish a home into which new life can be born or adopted and nurtured, and therefore the family is the foundational building block of society.',
  },
]

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Mission */}
      <section
        id="vision"
        className="px-5 py-[72px] md:py-[110px] md:px-12 border-b"
        style={{ background: 'var(--lp-bg)', borderColor: 'var(--lp-border)' }}
      >
        <div className="md:max-w-[860px]">
          <p className="text-[13px] font-medium tracking-[0.16em] uppercase mb-4" style={eyebrow}>
            Our Mission
          </p>
          <h1 className="font-black leading-[1.1]" style={{ ...heading, fontSize: 'clamp(30px, 4.4vw, 60px)' }}>
            Lifepointe exists to point people to abundant life in Christ.
          </h1>
        </div>
      </section>

      {/* Story + values */}
      <section
        id="story"
        className="px-5 py-[72px] md:py-[100px] md:px-12 border-b"
        style={{ background: 'var(--lp-surface)', borderColor: 'var(--lp-border)' }}
      >
        <div className="md:grid md:grid-cols-2 md:gap-16 md:max-w-[1100px]">
          <div>
            <p className="text-[13px] font-medium tracking-[0.16em] uppercase mb-4" style={eyebrow}>
              Our Story
            </p>
            <p className="text-[17px] leading-[1.85]" style={body}>
              Lifepointe began as a prayer group. A handful of faithful believers began meeting in 2004 to pray
              together for the community. The Lord inspired them to begin a new church in the northwest area of
              Hamilton County.
            </p>
          </div>
          <div id="values" className="mt-12 md:mt-0">
            <p className="text-[13px] font-medium tracking-[0.16em] uppercase mb-4" style={eyebrow}>
              Our Values
            </p>
            <p className="text-[17px] leading-[1.85]" style={body}>
              Rooted in God&apos;s Word and empowered by His Spirit, we are committed to life-giving ministry,
              authentic relationships, and the expansion of His kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section
        id="beliefs"
        className="px-5 py-[72px] md:py-[100px] md:px-12 border-b"
        style={{ background: 'var(--lp-bg)', borderColor: 'var(--lp-border)' }}
      >
        <div className="md:max-w-[860px]">
          <p className="text-[13px] font-medium tracking-[0.16em] uppercase mb-4" style={eyebrow}>
            What We Believe
          </p>
          <h2 className="font-black leading-[1.15] mb-10" style={{ ...heading, fontSize: 'clamp(24px, 3vw, 40px)' }}>
            Our Beliefs
          </h2>
          <div className="border-t" style={{ borderColor: 'var(--lp-border)' }}>
            {beliefs.map(({ title, text }) => (
              <details key={title} className="group border-b py-5" style={{ borderColor: 'var(--lp-border)' }}>
                <summary
                  className="flex justify-between items-center cursor-pointer list-none font-bold text-[18px] md:text-[20px]"
                  style={heading}
                >
                  {title}
                  <span className="ml-4 text-[22px] transition-transform group-open:rotate-45" style={eyebrow}>
                    +
                  </span>
                </summary>
                <p className="text-[16px] leading-[1.8] mt-4" style={body}>
                  {text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Team — bios and photos requested from Tom */}
      <section id="team" className="px-5 py-[72px] md:py-[100px] md:px-12" style={{ background: 'var(--lp-surface)' }}>
        <div className="md:max-w-[860px]">
          <p className="text-[13px] font-medium tracking-[0.16em] uppercase mb-4" style={eyebrow}>
            Our Team
          </p>
          <p className="font-bold mb-0.5" style={{ ...heading, fontSize: 'clamp(20px, 2.2vw, 26px)' }}>
            Josh Howard
          </p>
          <p className="text-[14px]" style={eyebrow}>
            Lead Pastor
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
