// components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white pt-20 pb-6 px-4 font-poppins ">
      <div className="bg-teal-800 p-15 rounded-lg max-w-7xl mx-auto text-center mb-12 border border-teal-100">
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-white/80  ">
          Subscribe to our newsletter
        </h2>
        <form className="flex flex-col md:flex-row justify-center gap-3">
          <input
            type="text"
            placeholder="First name"
            className="px-6 py-3  rounded border border-white bg-transparent text-white placeholder-white/70 focus:outline-none font-poppins"
          />
          <input
            type="email"
            placeholder="Email address"
            className="px-6 py-3 rounded border border-white bg-transparent text-white placeholder-white/70 focus:outline-none"
          />
          <button
            type="submit"
            className="px-9 py-2 rounded bg-white/75 text-teal-900 font-semibold hover:bg-teal-100"
          >
            Subscribe Now
          </button>
        </form>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-15 text-sm text-white ">
        <div>
          <h3 className="text-lg font-weight:600 tracking-wide font-serif text-white/70 ">
            PROPERTY BAZAR
          </h3>
          <p className="mt-2 text-gray-200 text-white/70">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
        </div>

        <div>
          <h4 className="font-weight:600 mb-8 underline underline-offset-4 text-white/80 ">
            COMPANY
          </h4>
          <ul className="space-y-5 text-white/70">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-8 underline underline-offset-4 text-white/80">
            HELP
          </h4>
          <ul className="space-y-5 text-white/70">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-8 underline underline-offset-4 text-white/80">
            RESOURCES
          </h4>
          <ul className="space-y-5 text-white/70">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-white/70 pt-4 font-poppins">
        <div className="mx-auto w-70 sm:w-24 md:w-150 lg:w-250 xl:w-300 border-t border-white/80"></div>
        <p className="mt-4">
          © Copyright 2025, All Rights Reserved by property bazar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
