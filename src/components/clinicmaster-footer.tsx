import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export default function ClinicMasterFooter() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/dr_soma_logo_small.png"
                alt="Dr. Soma Clinical Aesthetics Logo"
                className="w-12 h-12"
              />
              <span className="font-semibold">Dr. Soma</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Plastic and aesthetic clinic in Malaysia combining clinical skill with artistry.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#services" className="hover:text-primary transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition">
                  About Dr. Soma
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Clinic Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Monday - Friday: 9am - 5pm</li>
              <li>Saturday: 9am - 1pm</li>
              <li>Closed Sunday & Public Holidays</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+60 3 XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>info@drsoma.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>Subang Jaya, Selangor, Malaysia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 Dr. Soma Clinical Aesthetics. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

