import Link from 'next/link';

const Footer = ({ darkMode = false }) => {
  return (
    <footer className={`p-8 transition-colors duration-300 ${
      darkMode ? 'bg-gray-800 text-gray-300' : 'bg-[#f8f5ff] text-gray-700'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Description */}
          <div className="col-span-1">
            <h1 className={`text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Foundiv
            </h1>
            <p className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              There are many variations of passages of Lorem Ipsum available.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h2 className={`font-semibold mb-4 text-lg ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Pages
            </h2>
            <ul className="space-y-2">
              {['Name', 'About Us', 'Services', 'Products'].map((item) => (
                <li key={item}>
                  <Link href="#" className={`hover:text-purple-400 transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h2 className={`font-semibold mb-4 text-lg ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Socials
            </h2>
            <ul className="space-y-2">
              {['Instagram', 'LinkedIn', 'Twitter'].map((item) => (
                <li key={item}>
                  <Link href="#" className={`hover:text-purple-400 transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className={`font-semibold mb-4 text-lg ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Services
            </h2>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Mobile Development',
                'UI/UX',
                'SEO',
                'Web Security'
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className={`hover:text-purple-400 transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className={`my-6 ${
          darkMode ? 'border-gray-700' : 'border-gray-300'
        }`} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Copyright © {new Date().getFullYear()} Fondiv
            </p>
          </div>
          <div className="flex space-x-4">
            {['Privacy Policy', 'Terms of Service', 'Go To Top'].map((item) => (
              <Link 
                key={item} 
                href="#"
                className={`hover:text-purple-400 transition-colors text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;