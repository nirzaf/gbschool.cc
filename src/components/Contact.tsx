import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <header className="fixed top-0 w-full bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold"><a href="/">GBS</a></h1>
          <nav className="flex space-x-4">
            <a href="/" className="text-gray-700 hover:text-blue-700">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-700">About</a>
            <a href="/courses" className="text-gray-700 hover:text-blue-700">Courses</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-700">Contact</a>
          </nav>
          <a href="/courses" className="bg-blue-700 text-white py-2 px-4 rounded-full">Get Started</a>
        </div>
      </header>

      <main className="mt-16">
        <div className="bg-blue-700 text-white py-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold">Contact Us</h2>
          </div>
        </div>

        <section className="py-8">
          <div className="container mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.472708088047!2d80.63361057460988!3d7.300667992707008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367d45aa69fc3%3A0x5e9f75c1a902b81!2sGBS%20Kandy!5e0!3m2!1sen!2sqa!4v1706018413808!5m2!1sen!2sqa"
              width="100%" height="350" style={{ border: 0 }} allowFullScreen={true} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="container mx-auto mt-5">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <i className="bi bi-geo-alt text-blue-700 text-2xl"></i>
                    <h4 className="text-xl font-bold">Location:</h4>
                    <p>291 DS Senanayake Veediya, <br /> Kandy, Sri Lanka, 20000</p>
                  </div>

                  <div className="mb-4">
                    <i className="bi bi-envelope text-blue-700 text-2xl"></i>
                    <h4 className="text-xl font-bold">Email:</h4>
                    <p>info@gbschool.cc</p>
                  </div>

                  <div className="mb-4">
                    <i className="bi bi-phone text-blue-700 text-2xl"></i>
                    <h4 className="text-xl font-bold">Call:</h4>
                    <p>+94 77 102 0580</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 mt-5 lg:mt-0 lg:pl-8">
                <form action="https://formspree.io/f/xayrqegg" method="POST" className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col lg:flex-row mb-4">
                    <div className="lg:w-1/2 lg:pr-2 mb-4 lg:mb-0">
                      <input type="text" name="name" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" required />
                    </div>
                    <div className="lg:w-1/2 lg:pl-2">
                      <input type="email" name="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="mb-4">
                    <input type="text" name="subject" className="w-full p-2 border border-gray-300 rounded" placeholder="Subject" required />
                  </div>
                  <div className="mb-4">
                    <textarea name="message" rows={5} className="w-full p-2 border border-gray-300 rounded" placeholder="Message" required></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-full">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="lg:w-1/3">
              <h3 className="text-xl font-bold">Contact</h3>
              <p>291 DS Senanayake Veediya<br />Kandy, Sri Lanka, 20000<br /><strong>Phone:</strong> +94 77 102 0580<br /><strong>Email:</strong> info@gbschool.cc</p>
            </div>
            <div className="lg:w-1/3">
              <h4 className="text-lg font-bold">Useful Links</h4>
              <ul className="list-none">
                <li><a href="/" className="text-white hover:underline">Home</a></li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <h4 className="text-lg font-bold">Our Courses</h4>
              <ul className="list-none">
                <li><a href="/contact" className="text-white hover:underline">Contact us for more details</a></li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <h4 className="text-lg font-bold">Join Our Newsletter</h4>
              <p>Join our newsletter to receive updates on our new courses and events!</p>
              <form action="" method="post">
                <input type="email" name="email" className="p-2 rounded" placeholder="Your email" />
                <input type="submit" value="Subscribe" className="bg-blue-700 text-white py-2 px-4 rounded-full mt-2" />
              </form>
            </div>
          </div>
          <div className="text-center mt-8">
            <p>Designed by <a href="https://quadrate.lk" className="text-white underline">QTS Solutions</a> &copy; Copyright <strong>GBS Kandy</strong>. All Rights Reserved</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://www.facebook.com/gbskandyy" className="text-white hover:text-blue-700"><i className="bx bxl-facebook"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
