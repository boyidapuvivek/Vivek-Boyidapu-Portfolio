import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/boyidapuvivek",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/boyidapuvivek",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:boyidapuvenkatvive132@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+916301401268",
      label: "Phone"
    }
  ];

  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Venkat Vivek Boyidapu</h3>
            <p className="text-background/80 leading-relaxed mb-6">
              Full Stack Mobile & Web Developer passionate about creating 
              innovative solutions with modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  variant="outline"
                  size="sm"
                  asChild
                  className="bg-background/10 border-background/20 text-background hover:bg-background/20 hover:border-background/30"
                >
                  <a 
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                  >
                    <link.icon size={16} />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Education', 'Experience', 'Projects'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-background/80">
              <p>
                <strong>Email:</strong><br />
                boyidapuvenkatvive132@gmail.com
              </p>
              <p>
                <strong>Phone:</strong><br />
                +91 6301401268
              </p>
              <p>
                <strong>Location:</strong><br />
                India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Venkat Vivek Boyidapu. All rights reserved.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-1">
              Built with <Heart size={14} className="text-red-400" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;