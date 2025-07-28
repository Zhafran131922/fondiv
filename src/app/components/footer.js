import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#f8f5ff] text-gray-700 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Bagian Atas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Description */}
          <div className="col-span-1">
            <h1 className="text-2xl font-bold mb-4">Foundiv</h1>
            <p className="text-sm">
              There are many variations of passages of Lorem Ipsum available.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h2 className="font-semibold mb-4 text-lg">Pages</h2>
            <ul className="space-y-2">
              {['Name', 'About Us', 'Services', 'Products'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h2 className="font-semibold mb-4 text-lg">Socials</h2>
            <ul className="space-y-2">
              {['Instagram', 'Link', 'Think'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-semibold mb-4 text-lg">Services</h2>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Mobile Development',
                'UI/UX',
                'SEO',
                'Web Security'
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="border-gray-300 my-6" />

        {/* Bagian Bawah */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>Copyright © 2025 Fondiv</p>
          </div>
          <div className="flex space-x-4">
            {['Privacy Policy', 'Terms of Service', 'Go To Top'].map((item) => (
              <Link 
                key={item} 
                href="#"
                className="hover:text-blue-600 transition-colors text-sm"
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