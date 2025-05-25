'use client'
import Layout from "@/components/layout/Layout"
import { sliderTestimonialCenter } from "@/utils/swiperOptions"
import Link from 'next/link'
import CountUp from 'react-countup'
import { Swiper, SwiperSlide } from "swiper/react"
export default function About() {

	return (
		<>

			<Layout breadcrumbTitle="About">
				{/* .section-box-about */}
				<div className="section-box-about page-about">
					<div className="tf-container">
						<div className="row ">
							<div className="col-12 ">
								<div className="heading-section  ">
									<h2 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Welcome The
										Healingy
									</h2>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">It is a trusted counseling and therapy center,
										staffed by experienced professionals dedicated to listening, <br /> supporting, and
										guiding you. We believe in everyone's potential to heal and grow with the right
										care.
									</p>
								</div>
								<div className="box-about">
									<div className="image-wrap wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<img className="lazyload" data-src="/images/section/section-about-3.jpg" src="/images/section/section-about-3.jpg" alt="healingy" />
									</div>
									<div className="wrap-content">
										<div className="item wow fadeInLeft" data-wow-duration={1000} data-wow-delay="0s">
											<h3>Our Mission</h3>
											<p>At Healingy, our mission is to provide compassionate, personalized mental
												health care that helps individuals and families overcome challenges. We are
												committed to creating a safe, supportive space for healing and growth, using
												evidence-based therapy to guide clients toward mental well-being.</p>
											<p>Our team of experienced therapists works with each client to develop tailored
												strategies for resilience and self-awareness. We aim to equip individuals
												with the tools they need to build healthier relationships, manage stress,
												and create lasting change.</p>
										</div>
										<div className="item wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
											<h3>Our Vision</h3>
											<p>Our vision is to be a leading center for mental health, where everyone has
												access to the care and support they need. We strive to create a world where
												mental health is prioritized, free from stigma, and where people feel
												empowered to seek help.</p>
											<p>We aim to build a community where seeking therapy is encouraged and
												supported. By promoting mental health awareness and providing high-quality
												care, we hope to make a lasting positive impact on the lives of our clients.
											</p>
										</div>
									</div>
									<div className="wrap-counter">
										<div className="counter-item has-icon">
											<div className="icon">
												<i className="icon-SketchLogo" />
											</div>
											<div className="count">
												<div className="counter-number">
													<div className="odometer style-1-1"><CountUp enableScrollSpy={true} end={20} />
													</div>
													<span className="sub">Years</span>
												</div>
												<p>Years of Experience</p>
											</div>
										</div>
										<div className="counter-item has-icon">
											<div className="icon">
												<i className="icon-Smiley" />
											</div>
											<div className="count">
												<div className="counter-number">
													<div className="odometer style-1-2"><CountUp enableScrollSpy={true} end={2} />
													</div>
													<span className="sub">k</span>
												</div>
												<p>Happy customers</p>
											</div>
										</div>
										<div className="counter-item has-icon">
											<div className="icon">
												<i className="icon-HandHeart" />
											</div>
											<div className="count">
												<div className="counter-number">
													<div className="odometer style-1-3"><CountUp enableScrollSpy={true} end={46} />
													</div>
												</div>
												<p>Therapy Sessions</p>
											</div>
										</div>
										<div className="counter-item has-icon">
											<div className="icon">
												<i className="icon-Certificate" />
											</div>
											<div className="count">
												<div className="counter-number">
													<div className="odometer style-1-4"><CountUp enableScrollSpy={true} end={15} />
													</div>
												</div>
												<p>Certifications/Awards</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>{/* /.section-box-about */}
				{/* .section-team */}
				<section className="section-team tf-spacing-5">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="heading-section ">
									<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Our
										Teams</p>
									<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Meet Our Expert
										Therapists</h3>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">A team of licensed therapists focused on your mental
										health and growth.
									</p>
								</div>
								<div className="grid-layout-4 gap-30">
									<div className="team-item hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<div className="image-wrap ">
											<Link href="/therapists-details">
												<img className="lazyload" data-src="/images/section/team-item-1.jpg" src="/images/section/team-item-1.jpg" alt="healingy" />
											</Link>
										</div>
										<div className="info">
											<h5 className="name"><Link href="/therapists-details">Dr. Emily Stevens</Link></h5>
											<p className="text-2">Lead Therapist</p>
										</div>
										<ul className="tf-social style-1">
											<li><Link href="/#">
												<i className="icon-FacebookLogo" />
											</Link>
											</li>
											<li><Link href="/#">
												<i className="icon-x" />
											</Link></li>
											<li><Link href="/#">
												<i className="icon-LinkedinLogo" />
											</Link></li>
											<li><Link href="/#">
												<i className="icon-instagram" />
											</Link></li>
										</ul>
									</div>
									<div className="team-item hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
										<div className="image-wrap ">
											<Link href="/therapists-details">
												<img className="lazyload" data-src="/images/section/team-item-2.jpg" src="/images/section/team-item-2.jpg" alt="healingy" />
											</Link>
										</div>
										<div className="info">
											<h5 className="name"><Link href="/therapists-details">Michael Carter</Link></h5>
											<p className="text-2">Family Therapist</p>
										</div>
										<ul className="tf-social style-1">
											<li><Link href="/#">
												<i className="icon-FacebookLogo" />
											</Link>
											</li>
											<li><Link href="/#">
												<i className="icon-x" />
											</Link></li>
											<li><Link href="/#">
												<i className="icon-LinkedinLogo" />
											</Link></li>
											<li><Link href="/#">
												<i className="icon-instagram" />
											</Link></li>
										</ul>
									</div>
									<div className="team-item hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
										<div className="image-wrap ">
											<Link href="/therapists-details">
												<img className="lazyload" data-src="/images/section/team-item-3.jpg" src="/images/section/team-item-3.jpg" alt="healingy" />
											</Link>
										</div>
										<div className="info">
											<h5 className="name"><Link href="/therapists-details">Sarah Martinez</Link></h5>
											<p className="text-2">Child &amp; Adolescent Therapist</p>
										</div>
										<ul className="tf-social style-1">
											<li><Link href="/#">
												<i className="icon-FacebookLogo" />
											</Link>
											</li>
											<li><Link href="/#">
												<i className="icon-x" />
											</Link></li>
											<li><Link href="/#">
												<i className="icon-LinkedinLogo" />
											</Link></li>
											<li><Link href="/#">
												<i className="icon-instagram" />
											</Link></li>
										</ul>
									</div>
									<div className="team-item hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.3s">
										<div className="image-wrap ">
											<Link href="/therapists-details">
												<img className="lazyload" data-src="/images/section/team-item-4.jpg" src="/images/section/team-item-4.jpg" alt="healingy" />
											</Link>
										</div>
										<div className="info">
											<h5 className="name"><Link href="/therapists-details">Dr. James Mcavoy</Link></h5>
											<p className="text-2">Clinical Psychologist</p>
										</div>
										<ul className="tf-social style-1">
											<li><Link href="/#">
												<i className="icon-FacebookLogo" />
											</Link>
											</li>
											<li><Link href="/#">
												<i className="icon-x" />
											</Link></li>
											<li><Link href="/#">
												<i className="icon-LinkedinLogo" />
											</Link></li>
											<li><Link href="/#">
												<i className="icon-instagram" />
											</Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>{/* /.section-team */}
				{/* .section-testimonials */}
				<section className="section-testimonials page-about bg-1  tf-spacing-1 ">
					<div className="heading-section ">
						<p className="text-2 sub">Client Testimonials</p>
						<h3>What Our Clients Are Saying</h3>
						<p className="description text-1 lh-30">Hear firsthand accounts of healing and positive
							change.
						</p>
					</div>
					<Swiper {...sliderTestimonialCenter} className="swiper-container slider-testimonial-center">
						<div className="swiper-wrapper">
							<SwiperSlide>
								<div className="wg-testimonial style-text-center ">
									<div className="rating">
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
									</div>
									<div className="content">
										<p className="text text-1 lh-30  fw-4 mb-16">
											"I am incredibly grateful for the compassionate and professional
											care I
											received. The support from the team was instrumental in my personal
											growth and
											healing journey.
										</p>
										<div className="bot">
											<div className="info">
												<h6 className="title ">
													<Link href="/#"> Sarah M.</Link>
												</h6>
												<p>New York, NY</p>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="wg-testimonial style-text-center ">
									<div className="rating">
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
									</div>
									<div className="content">
										<p className="text text-1 lh-30  fw-4 mb-16">
											"The expertise and encouragement from Healingy made a significant
											difference in
											my
											life. The
											tailored approach and dedicated therapists helped me overcome my
											challenges and
											achieve my
											goals.
										</p>
										<div className="bot">
											<div className="info">
												<h6 className="title ">
													<Link href="/#">John R.</Link>
												</h6>
												<p>Los Angeles, CA</p>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="wg-testimonial style-text-center ">
									<div className="rating">
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
									</div>
									<div className="content">
										<p className="text text-1 lh-30  fw-4 mb-16">
											"Thanks to Healingy’s exceptional team, I have gained valuable
											insights and
											tools to manage my stress effectively. The personalized care and
											understanding
											truly made a positive impact."
										</p>
										<div className="bot">
											<div className="info">
												<h6 className="title ">
													<Link href="/#">Emily T.</Link>
												</h6>
												<p>Chicago, IL</p>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="wg-testimonial style-text-center ">
									<div className="rating">
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
									</div>
									<div className="content">
										<p className="text text-1 lh-30  fw-4 mb-16">
											"I can't thank Healingy enough for their unwavering support and
											guidance. The
											personalized therapy sessions and insightful feedback have been
											crucial in my
											journey towards a more balanced life."
										</p>
										<div className="bot">
											<div className="info">
												<h6 className="title ">
													<Link href="/#">Michael L.</Link>
												</h6>
												<p>Miami, FL</p>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="wg-testimonial style-text-center ">
									<div className="rating">
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
									</div>
									<div className="content">
										<p className="text text-1 lh-30  fw-4 mb-16">
											"I am incredibly grateful for the compassionate and professional
											care I
											received. The support from the team was instrumental in my personal
											growth and
											healing journey.
										</p>
										<div className="bot">
											<div className="info">
												<h6 className="title ">
													<Link href="/#"> Sarah M.</Link>
												</h6>
												<p>New York, NY</p>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="wg-testimonial style-text-center ">
									<div className="rating">
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
									</div>
									<div className="content">
										<p className="text text-1 lh-30  fw-4 mb-16">
											"The expertise and encouragement from Healingy made a significant
											difference in
											my
											life. The
											tailored approach and dedicated therapists helped me overcome my
											challenges and
											achieve my
											goals.
										</p>
										<div className="bot">
											<div className="info">
												<h6 className="title ">
													<Link href="/#">John R.</Link>
												</h6>
												<p>Los Angeles, CA</p>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="wg-testimonial style-text-center ">
									<div className="rating">
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
									</div>
									<div className="content">
										<p className="text text-1 lh-30  fw-4 mb-16">
											"Thanks to Healingy’s exceptional team, I have gained valuable
											insights and
											tools to manage my stress effectively. The personalized care and
											understanding
											truly made a positive impact."
										</p>
										<div className="bot">
											<div className="info">
												<h6 className="title ">
													<Link href="/#">Emily T.</Link>
												</h6>
												<p>Chicago, IL</p>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="wg-testimonial style-text-center ">
									<div className="rating">
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
										<i className="icon-favorite_major" />
									</div>
									<div className="content">
										<p className="text text-1 lh-30  fw-4 mb-16">
											"I can't thank Healingy enough for their unwavering support and
											guidance. The
											personalized therapy sessions and insightful feedback have been
											crucial in my
											journey towards a more balanced life."
										</p>
										<div className="bot">
											<div className="info">
												<h6 className="title ">
													<Link href="/#">Michael L.</Link>
												</h6>
												<p>Miami, FL</p>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</div>
					</Swiper>
				</section>{/* /.section-testimonials */}
				{/* .section-faq */}
				<section className="section-faq tf-spacing-3">
					<div className="tf-container">
						<div className="row justify-center">
							<div className="col-md-8">
								<div className="heading-section ">
									<p className="text-2 sub">Help center</p>
									<h3>Questions and Answers</h3>
									<p className="description text-1 lh-30">Find answers to the most commonly asked questions
										about our services.
									</p>
								</div>
								<div className="tf-accordion" id="accordion">
									<div className="tf-accordion-item">
										<div className="accordion-header">
											<h5 className="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												What types of therapy do you offer at Healingy?
												<span className="icon" />
											</h5>
										</div>
										<div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordion">
											<div className="tf-accordion-body">
												<p>
													Therapy is useful for managing stress, anxiety, or life challenges. It
													offers
													support and helps with personal growth. A consultation can help you
													decide
													if
													it's the right option.
												</p>
											</div>
										</div>
									</div>
									<div className="tf-accordion-item">
										<div className="accordion-header">
											<h5 className=" title " data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												How do I know if therapy is right for me?
												<span className="icon" />
											</h5>
										</div>
										<div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordion">
											<div className="tf-accordion-body">
												<p>
													Therapy is useful for managing stress, anxiety, or life challenges. It
													offers
													support and helps with personal growth. A consultation can help you
													decide
													if
													it's the right option.
												</p>
											</div>
										</div>
									</div>
									<div className="tf-accordion-item">
										<div className="accordion-header">
											<h5 className="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												What should I expect during my first therapy session?
												<span className="icon" />
											</h5>
										</div>
										<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
											<div className="tf-accordion-body">
												<p>
													Therapy is useful for managing stress, anxiety, or life challenges. It
													offers
													support and helps with personal growth. A consultation can help you
													decide
													if
													it's the right option.
												</p>
											</div>
										</div>
									</div>
									<div className="tf-accordion-item">
										<div className="accordion-header">
											<h5 className="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												How long does a typical therapy session last?
												<span className="icon" />
											</h5>
										</div>
										<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion">
											<div className="tf-accordion-body">
												<p>
													Therapy is useful for managing stress, anxiety, or life challenges. It
													offers
													support and helps with personal growth. A consultation can help you
													decide
													if
													it's the right option.
												</p>
											</div>
										</div>
									</div>
									<div className="tf-accordion-item">
										<div className="accordion-header">
											<h5 className="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
												Do you offer online or virtual therapy sessions?
												<span className="icon" />
											</h5>
										</div>
										<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordion">
											<div className="tf-accordion-body">
												<p>
													Therapy is useful for managing stress, anxiety, or life challenges. It
													offers
													support and helps with personal growth. A consultation can help you
													decide
													if
													it's the right option.
												</p>
											</div>
										</div>
									</div>
									<div className="tf-accordion-item">
										<div className="accordion-header">
											<h5 className="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
												How many therapy sessions will I need to see results?
												<span className="icon" />
											</h5>
										</div>
										<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordion">
											<div className="tf-accordion-body">
												<p>
													Therapy is useful for managing stress, anxiety, or life challenges. It
													offers
													support and helps with personal growth. A consultation can help you
													decide
													if
													it's the right option.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>{/* /.section-faq */}
				{/* .section-cta */}
				<section className="section-cta">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="wrap-content  bg-1">
									<div className="box-cta">
										<div className="heading-section text-start wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
											<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
												BEGIN YOUR HEALING JOURNEY</p>
											<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Begin Your
												Transformation to a More Fulfilling Life</h3>
											<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">We offer compassionate, personalized care to
												address your unique needs. We are committed to working with you to find a
												resolution promptly. Let’s take the first step towards a healthier, happier
												you.
											</p>
										</div>
										<Link className="tf-btn style-default btn-color-secondary pd-28 wow fadeInUp " data-wow-duration={1000} data-wow-delay="0s" href="/contact-us">
											<span>Book a Consultation <i className="icon-ArrowRight arr-1" /></span>
										</Link>
									</div>
									<div className="image-wrap wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
										<img className="lazyload" data-src="/images/section/section-cta.png" src="/images/section/section-cta.png" alt="healingy" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>{/* /.section-cta */}

			</Layout>
		</>
	)
}