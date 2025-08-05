import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react"

const Hero = () => {
  const contactLinks = [
    {
      icon: Mail,
      href: "mailto:boyidapuvenkatvive132@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      href: "tel:+916301401268",
      label: "Phone",
    },
    {
      icon: Github,
      href: "https://github.com/boyidapuvivek",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/boyidapuvivek",
      label: "LinkedIn",
    },
  ]

  return (
    <section className='min-h-screen flex items-center justify-center px-4 py-20 gradient-hero relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]' />
      <div className='absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent' />

      <div className='relative z-10 text-center max-w-4xl mx-auto'>
        {/* Main heading */}
        <div className='mb-8'>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-4 leading-tight'>
            Venkat Vivek
            <span className='block text-4xl md:text-6xl text-white/90'>
              Boyidapu
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-white/80 font-medium'>
            Full Stack Mobile & Web Developer
          </p>
        </div>

        {/* Description */}
        <div className='mb-12 max-w-2xl mx-auto'>
          <p className='text-lg text-white/70 leading-relaxed'>
            Passionate about building performant and scalable applications.
            Currently pursuing B.Tech in CSE (AI-ML) with expertise in React
            Native, Next.js, and backend APIs.
          </p>
        </div>

        {/* Contact links */}
        <div className='flex flex-wrap justify-center gap-4 mb-8'>
          {contactLinks.map((link) => (
            <Button
              key={link.label}
              variant='outline'
              size='lg'
              asChild
              className='bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300'>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className='flex items-center gap-2'>
                <link.icon size={20} />
                {link.label}
              </a>
            </Button>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href='../public/resume.pdf'
          download>
          <Button
            size='lg'
            className='bg-white text-primary hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300'>
            <Download
              size={20}
              className='mr-2'
            />
            Download Resume
          </Button>
        </a>
      </div>
    </section>
  )
}

export default Hero
