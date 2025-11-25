/**
 * components
 */

import { ButtonPrimary } from "./Button";

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact me', href: '#contact' }
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/kluckysingh' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucky-singh-920846242/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/singhrimjim33/' },
  { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/singhrimjim33' }

];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Ready to bring value to your engineering team!
            </h2>

            <ButtonPrimary
              href="mailto:singhluckyy4444@gmail.com"
              label="Get in Touch"
              icon="chevron_right"
            />
          </div>

          {/* RIGHT SIDE — both Sitemap + Socials together */}
          <div className="grid grid-cols-2 gap-8 lg:pl-20">

            {/* Sitemap */}
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                     href={href}
                     className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                     >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>

                    <a
                     href={href}
                     target="_blank"
                     className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                       >

                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Logo */}
        <div className="mt-8 flex items-center justify-center pt-10 mb-8">
          <a
           href=""
           className=""
           >
            <img
              src="/images/clover.png"
              width={40}
              height={40}
              alt="Logo"
            />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
