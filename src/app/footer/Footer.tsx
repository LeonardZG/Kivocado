import { MailIcon, MapPinIcon, InstagramIcon, TwitterIcon, TiktokIcon } from "./Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fef9ec] text-sm text-black px-6 py-6 border-t border-gray-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        
        {/* Links: Icons + E-Mail */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="X (Twitter)" className="hover:opacity-80">
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="TikTok" className="hover:opacity-80">
              <TiktokIcon className="w-5 h-5" />
            </a>
          </div>
          <p className="flex justify-center md:justify-start items-center gap-2 text-sm">
            <MailIcon className="w-4 h-4" />
            kivocado@outlook.de
          </p>
        </div>

        {/* Mitte */}
        <div className="text-center space-y-1">
          <p className="font-medium">Dein KI-Kompass für smarte Tools</p>
          <p className="flex justify-center items-center gap-1 text-sm">
            Made with <span role="img" aria-label="green heart">💚</span> for DACH
          </p>
        </div>

        {/* Rechts: Rechtliches */}
        <div className="text-center md:text-right space-y-1 text-sm">
          <Link href="/datenschutz" className="underline block">Datenschutzerklärung</Link>
          <Link href="/impressum" className="underline block">Impressum</Link>
        </div>
      </div>

      <div className="text-center mt-4 text-xs text-gray-600">
        © {new Date().getFullYear()} by Kivocado.
      </div>
    </footer>
  );
};

export default Footer;
