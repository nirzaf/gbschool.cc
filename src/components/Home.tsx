import React from 'react';

const Home: React.FC = () => {
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

      <section id="hero" className="d-flex justify-content-center align-items-center">
        <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
          <h2>Learning Today, Leading Tomorrow</h2>
          <a href="/courses" className="btn-get-started">Get Started</a>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                <img src="assets/img/about.jpg" className="img-fluid" alt="About GBS" />
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>Welcome to Global Business School (GBS)!</h3>
                <p className="fst-italic">
                  Global Business School (GBS) is a premier institution committed to nurturing future business leaders and entrepreneurs.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> Our Vision: To be a globally recognized hub for business education, fostering creativity, critical thinking, and ethical leadership in our students.</li>
                  <li><i className="bi bi-check-circle"></i> Mission Statement: At GBS, our mission is to empower students with knowledge, skills, and values essential for success in the global business arena. We strive to create an inclusive and collaborative community that encourages intellectual curiosity, innovation, and responsible business practices.</li>
                  <li><i className="bi bi-check-circle"></i> Academic Programs: GBS offers a range of UG & PG courses designed to meet the diverse needs of aspiring business professionals. Our curriculum is carefully crafted to blend theoretical knowledge with practical applications, ensuring that students are well-prepared for the challenges of the business world.</li>
                </ul>
                <p>
                  Recognised Certification: We are partnered with UK based <a href="https://londonsbs.org.uk/" className="text-blue-700 underline">London School of Business and Social Sciences (LSBSS)</a> to offer professional certification courses in accounting and finance.
                </p>
                <p>
                  Lesson Customization: At GBS, we understand that every student learns differently. That's why we customize our lessons to make them easy to understand in all possible ways. Our methods include personalized learning plans, interactive sessions, and real-world applications to ensure that each student can grasp the concepts effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="lesson-customization" className="lesson-customization">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Lesson Customization</h2>
              <p>Our Approach to Customized Learning</p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="box" data-aos="fade-up" data-aos-delay="100">
                  <h3>Personalized Learning Plans</h3>
                  <p>We create personalized learning plans tailored to each student's needs, ensuring that they receive the support and resources necessary to succeed.</p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="box" data-aos="fade-up" data-aos-delay="200">
                  <h3>Interactive Sessions</h3>
                  <p>Our interactive sessions engage students in the learning process, making it more enjoyable and effective. We use a variety of teaching methods to cater to different learning styles.</p>
                </div>
              </div>
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="box" data-aos="fade-up" data-aos-delay="300">
                  <h3>Real-World Applications</h3>
                  <p>We incorporate real-world applications into our lessons, helping students understand how the concepts they learn in the classroom apply to real-life situations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="courses">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Top 3 Courses</h2>
            </div>
            <div className="row" data-aos="zoom-in" data-aos-delay="100">
              <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="course-item">
                  <img src="https://res.cloudinary.com/dje2zi6ch/image/upload/c_crop,g_north_west,h_511,q_100,w_768/v1706028577/acca_cugou5.jpg" className="img-fluid" alt="ACCA Fast Track" />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>ACCA Fast Track</h4>
                    </div>
                    <h3><a href="/courses">Fast Track ACCA Course in Kandy</a></h3>
                    <p>Get a real qualification that prepares you for the job market. Total course completion time with 2 1/2 years+ 6 Months for BSc degree from Oxford Brooks University, UK.</p>
                    <p>Lesson Customization: Our ACCA Fast Track course is designed to cater to the unique learning needs of each student. We use a combination of personalized learning plans, interactive sessions, and real-world applications to ensure that students grasp the concepts effectively.</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center"></div>
                      <div className="trainer-rank d-flex align-items-center"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="course-item">
                  <img src="https://ik.imagekit.io/d36vkx7c33/revit.jpg?updatedAt=1730305372099" className="img-fluid" alt="Revit Master Class" />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>Revit Master Class</h4>
                    </div>
                    <h3><a href="/courses">Advanced Master Class in Revit</a></h3>
                    <p>Master industry-leading Revit software through our comprehensive and detailed program. Perfect for architects, engineers, and design professionals seeking to enhance their BIM skills.</p>
                    <p>Our Revit Master Class combines advanced modeling techniques, practical projects, and industry best practices to ensure students achieve professional expertise in building information modeling and design workflows.</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="course-item">
                  <img src="https://res.cloudinary.com/dje2zi6ch/image/upload/c_crop,g_north_west,h_533,q_100,w_800,x_0/v1706028577/computerized_accounting_liaqsa.jpg" className="img-fluid" alt="Diploma in Computerised Accounting" />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4>Diploma in Computerised Accounting</h4>
                    </div>
                    <h3><a href="/courses">Computerised Accounting</a></h3>
                    <p>Master modern accounting software and practices through our comprehensive program. Perfect for aspiring accountants and professionals seeking to enhance their technical skills.</p>
                    <p>Our Computerised Accounting program combines hands-on software training with practical accounting principles, interactive sessions, and real-world applications to ensure students develop professional-level expertise.</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="why-us">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Why GBS Kandy</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 d-flex align-items-stretch">
                <div className="content">
                  <h3>Why Choose Global Business School (GBS)?</h3>
                  <p>Choosing GBS for your career development is a decision that will set you apart in the competitive business world. Here's why:</p>
                  <div className="text-center">
                    <a href="/about" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-receipt"></i>
                        <h4>Recognized curriculums</h4>
                        <p style={{ textAlign: 'justify' }}>Our curriculum is designed by industry experts, ensuring you receive a world-class education that prepares you for real-world business challenges.</p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-cube-alt"></i>
                        <h4>Global Perspectives</h4>
                        <p style={{ textAlign: 'justify' }}>With a focus on global business trends and practices, we equip our students with the knowledge and skills to succeed in a globalized business environment.</p>
                      </div>
                    </div>
                    <div className="col-xl-4 d-flex align-items-stretch">
                      <div className="icon-box mt-4 mt-xl-0">
                        <i className="bx bx-images"></i>
                        <h4>Career Opportunities</h4>
                        <p style={{ textAlign: 'justify' }}>Our strong industry connections and dedicated career services ensure that our students have ample opportunities for internships and job placements.</p>
                      </div>
                    </div>
                  </div>
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

export default Home;
