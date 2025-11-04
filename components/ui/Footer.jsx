export default function Footer() {
    return (
      <footer className="bg-foreground text-background pt-16 pb-6">
      {/* Main Footer Section */}
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 border-b border-gray-800 pb-10">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-400 mb-4">About Us</h3>
          <p className="text-sm leading-relaxed mb-6">
            For over 25 years, Value Homes Renovations has offered an innovative and professional approach
            to home renovations. From kitchens and baths to whole house projects, we can transform
            any room in your home.
          </p>
          {/* <p className="text-sm mb-2"> Home Renovations</p> */}
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-400 mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>+ Kitchen Renovations</li>
            <li>+ Bathroom Renovations</li>
            <li>+ Basement Renovations</li>
            <li>+ Whole House Renovations</li>
            <li>+ Exterior Renovations</li>
          </ul>

        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold text-gray-400 mb-4">Get In Touch</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Toronto: <span className="text-white font-semibold">128-23-688585</span>
            </li>
           
          </ul>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="w-full px-6 mt-6 text-center text-xs text-gray-300">
        <p>© 2023 Value Homes</p>
       
      </div>
    </footer>
    );
  }
  