import React from 'react';

const About: React.FC = () => {
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
            <h2 className="text-3xl font-bold">About Us</h2>
            <p>We are a leading accountancy and business school in Kandy, Sri Lanka. We offer professional certification courses in accounting and finance. We are partnered with UK based GNI International education group <a href="https://londonsbs.org.uk/" className="text-white underline">London School of Business and Social Sciences (LSBSS)</a> to offer professional certification courses in accounting and finance.</p>
          </div>
        </div>

        <section className="py-8">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <img src="assets/img/about.jpg" alt="About GBS" className="w-full h-auto" />
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <h3 className="text-2xl font-bold">About GBS Kandy</h3>
              <p>GBS is a popular accounting academy in Kandy preparing students for ACCA exam for more than 5 years. We are partnered with London based London School of Business and Social Sciences (LSBSS) to offer professional certification courses in accounting and finance.</p>
              <ul className="list-disc pl-5">
                <li>Our panel of lectures have both work and teaching experience more than 20 years with ACCA, Masters and Doctorate degrees.</li>
                <li>GBS is the only ACCA CBA exam center outside Colombo.</li>
                <li>We do exam oriented revision with 3000+ Questions and Answers for each level and mock exams.</li>
              </ul>
              <p>Faculty Excellence: Our dedicated faculty members are industry experts, scholars, and experienced educators who are passionate about shaping the next generation of business leaders.</p>
              <p>Lesson Customization: At GBS, we understand that every student learns differently. That's why we customize our lessons to make them easy to understand in all possible ways. Our methods include personalized learning plans, interactive sessions, and real-world applications to ensure that each student can grasp the concepts effectively.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-8">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Lesson Customization</h2>
              <p>Our Approach to Customized Learning</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center">
              <div className="lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Personalized Learning Plans</h3>
                  <p>We create personalized learning plans tailored to each student's needs, ensuring that they receive the support and resources necessary to succeed.</p>
                </div>
              </div>
              <div className="lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Interactive Sessions</h3>
                  <p>Our interactive sessions engage students in the learning process, making it more enjoyable and effective. We use a variety of teaching methods to cater to different learning styles.</p>
                </div>
              </div>
              <div className="lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Real-World Applications</h3>
                  <p>We incorporate real-world applications into our lessons, helping students understand how the concepts they learn in the classroom apply to real-life situations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-8">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-center text-center">
              <div className="lg:w-1/4 p-4">
                <span className="text-4xl font-bold">614</span>
                <p>Students</p>
              </div>
              <div className="lg:w-1/4 p-4">
                <span className="text-4xl font-bold">12</span>
                <p>Courses</p>
              </div>
              <div className="lg:w-1/4 p-4">
                <span className="text-4xl font-bold">12</span>
                <p>Job Fairs Events</p>
              </div>
              <div className="lg:w-1/4 p-4">
                <span className="text-4xl font-bold">20</span>
                <p>Lecturers</p>
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

export default About;
