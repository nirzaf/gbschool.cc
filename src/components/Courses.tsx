import React from 'react';

const Courses: React.FC = () => {
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
            <h2 className="text-3xl font-bold">Courses</h2>
            <p>Explore our wide range of courses designed to equip you with the skills and knowledge needed to succeed in today's dynamic business environment.</p>
          </div>
        </div>

        <section className="py-8">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">New Courses</h2>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Foundations of AutoCAD</h3>
                  <p>Duration: 16 weeks</p>
                  <p>Level: Beginner</p>
                  <p>Course Objectives:</p>
                  <ul className="list-disc pl-5">
                    <li>Master the AutoCAD interface and basic commands, enabling efficient navigation and operation.</li>
                    <li>Develop proficiency in 2D drafting and documentation, ensuring accurate and professional outputs.</li>
                    <li>Learn industry-standard CAD practices to enhance employability and practical application skills.</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">3D Modeling with Autodesk Fusion 360</h3>
                  <p>Duration: 20 weeks</p>
                  <p>Level: Intermediate</p>
                  <p>Course Objectives:</p>
                  <ul className="list-disc pl-5">
                    <li>Understand 3D modeling concepts to create detailed and complex designs.</li>
                    <li>Master parametric design principles for flexible and efficient modeling.</li>
                    <li>Create complex assemblies that demonstrate advanced design capabilities.</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Building Information Modeling with Revit</h3>
                  <p>Duration: 24 weeks</p>
                  <p>Level: Intermediate to Advanced</p>
                  <p>Course Objectives:</p>
                  <ul className="list-disc pl-5">
                    <li>Master BIM concepts and workflows for efficient project management.</li>
                    <li>Create detailed architectural models that meet industry standards.</li>
                    <li>Develop construction documentation to support project execution.</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Advanced Visualization with 3ds Max</h3>
                  <p>Duration: 16 weeks</p>
                  <p>Level: Advanced</p>
                  <p>Course Objectives:</p>
                  <ul className="list-disc pl-5">
                    <li>Create photorealistic renderings to enhance visual communication.</li>
                    <li>Master advanced lighting techniques for realistic and dynamic scenes.</li>
                    <li>Develop architectural visualizations that effectively convey design intent.</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Digital Prototyping with Inventor</h3>
                  <p>Duration: 20 weeks</p>
                  <p>Level: Intermediate to Advanced</p>
                  <p>Course Objectives:</p>
                  <ul className="list-disc pl-5">
                    <li>Master mechanical design and engineering for innovative solutions.</li>
                    <li>Create complex assemblies and mechanisms with precision.</li>
                    <li>Develop manufacturing documentation to streamline production processes.</li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold">Civil Infrastructure with Civil 3D</h3>
                  <p>Duration: 24 weeks</p>
                  <p>Level: Advanced</p>
                  <p>Course Objectives:</p>
                  <ul className="list-disc pl-5">
                    <li>Master civil engineering design workflows for comprehensive projects.</li>
                    <li>Create infrastructure models and documentation for effective planning.</li>
                    <li>Perform terrain analysis and earthwork calculations for accurate designs.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gray-100">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Top 3 Courses</h2>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img src="https://res.cloudinary.com/dje2zi6ch/image/upload/c_crop,g_north_west,h_511,q_100,w_768/v1706028577/acca_cugou5.jpg" alt="ACCA Fast Track" className="w-full h-auto mb-4" />
                  <h3 className="text-xl font-bold">ACCA Fast Track</h3>
                  <p>Get a real qualification that prepares you for the job market. Total course completion time with 2 1/2 years+ 6 Months for BSc degree from Oxford Brooks University, UK.</p>
                  <p>Lesson Customization: Our ACCA Fast Track course is designed to cater to the unique learning needs of each student. We use a combination of personalized learning plans, interactive sessions, and real-world applications to ensure that students grasp the concepts effectively.</p>
                </div>
              </div>
              <div className="lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img src="https://ik.imagekit.io/d36vkx7c33/revit.jpg?updatedAt=1730305372099" alt="Revit Master Class" className="w-full h-auto mb-4" />
                  <h3 className="text-xl font-bold">Revit Master Class</h3>
                  <p>Master industry-leading Revit software through our comprehensive and detailed program. Perfect for architects, engineers, and design professionals seeking to enhance their BIM skills.</p>
                  <p>Our Revit Master Class combines advanced modeling techniques, practical projects, and industry best practices to ensure students achieve professional expertise in building information modeling and design workflows.</p>
                </div>
              </div>
              <div className="lg:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img src="https://res.cloudinary.com/dje2zi6ch/image/upload/c_crop,g_north_west,h_533,q_100,w_800,x_0/v1706028577/computerized_accounting_liaqsa.jpg" alt="Diploma in Computerised Accounting" className="w-full h-auto mb-4" />
                  <h3 className="text-xl font-bold">Diploma in Computerised Accounting</h3>
                  <p>Master modern accounting software and practices through our comprehensive program. Perfect for aspiring accountants and professionals seeking to enhance their technical skills.</p>
                  <p>Our Computerised Accounting program combines hands-on software training with practical accounting principles, interactive sessions, and real-world applications to ensure students develop professional-level expertise.</p>
                </div>
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

export default Courses;
