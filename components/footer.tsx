import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 mt-12 sm:mt-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center text-slate-600 flex justify-between">
        <p className="text-xs sm:text-sm flex justify-center items-center gap-2">
          Made with
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 fill-red-400" />
          by Angshu
        </p>
        <p className="text-xs sm:text-sm flex justify-center items-center gap-2">
          <a
            href="https://github.com/Angshuman09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://x.com/AngshumanSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://discord.com/users/1085467785389420615"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            Discord
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
