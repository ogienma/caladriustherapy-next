import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function OurTherapists() {

	return (
		<>

			<Layout breadcrumbTitle="Therapists">
				{/* .section-hero */}
				<section className="section-hero">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="image-wrap wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
									<img className="lazyload" data-src="/images/section/section-hero-2.jpg" src="/images/section/section-hero-2.jpg" alt="healingy" />
								</div>
								<p className="text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Explore
									the diverse backgrounds and expertise of our licensed
									professionals, each committed to providing personalized care and guidance to support
									your mental health and well-being.</p>
							</div>
						</div>
					</div>
				</section>{/* /.section-hero */}
				{/* .section-team */}
				<section className="section-team tf-spacing-3">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="heading-section ">
									<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Meet Our Expert
										Therapists</h3>
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
												<img className="lazyload" data-src="/images/section/team-item-5.jpg" src="/images/section/team-item-5.jpg" alt="healingy" />
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
									<div className="team-item hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<div className="image-wrap ">
											<Link href="/therapists-details">
												<img className="lazyload" data-src="/images/section/team-item-6.jpg" src="/images/section/team-item-6.jpg" alt="healingy" />
											</Link>
										</div>
										<div className="info">
											<h5 className="name"><Link href="/therapists-details">Dr. Lisa Thompson</Link></h5>
											<p className="text-2">Senior Therapis</p>
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
												<img className="lazyload" data-src="/images/section/team-item-3.jpg" src="/images/section/team-item-3.jpg" alt="healingy" />
											</Link>
										</div>
										<div className="info">
											<h5 className="name"><Link href="/therapists-details">Andrew Collins</Link></h5>
											<p className="text-2">Marriage Counselor</p>
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
												<img className="lazyload" data-src="/images/section/team-item-7.jpg" src="/images/section/team-item-7.jpg" alt="healingy" />
											</Link>
										</div>
										<div className="info">
											<h5 className="name"><Link href="/therapists-details">Jessica Rivera</Link></h5>
											<p className="text-2"> Adolescent Therapist</p>
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
												<img className="lazyload" data-src="/images/section/team-item-8.jpg" src="/images/section/team-item-8.jpg" alt="healingy" />
											</Link>
										</div>
										<div className="info">
											<h5 className="name"><Link href="/therapists-details">Dr. Robert Evans</Link></h5>
											<p className="text-2">Clinical Director</p>
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
				{/* .section-contact */}
				<section className="section-contact">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="wrap-content">
									<div className="box-contact">
										<div className="heading-section text-start">
											<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
												Book a Consultation</p>
											<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Free
												Consultation - Begin Your Healing Journey</h3>
											<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Connect with a dedicated specialist today
												and
												take the first step towards a healthier, more fulfilling life.
											</p>
										</div>
										<ul className="list-info">
											<li className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s"><i className="icon-Envelope" /> <Link href="/#">hello@caladriustherapy.com</Link></li>
											<li className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s"><i className="icon-PhoneCall" />1-704-980-3082</li>
											<li className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s"><i className="icon-MapPin" />200 Queens Road, Suite 300
Charlotte NC 28204
											</li>
										</ul>
										<Link href="/#" className="tf-btn-link z-5 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
											<span data-text="Open map">Open map</span>
											<i className="icon-ArrowRight" />
										</Link>
									</div>
									<form className="form-consultation wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s" method="post" id="contactform" action="./contact/contact-process.php">
										<h4 className="mb-20 text-center">Get A Free Consultation</h4>
										<fieldset className="name">
											<input type="text" name="name" className="tf-input style-1" placeholder="Your Name*" tabIndex={2} aria-required="true" required />
										</fieldset>
										<fieldset className="phone">
											<input type="number" name="phone" className="tf-input style-1" placeholder="Phone Number" tabIndex={2} aria-required="true" required />
										</fieldset>
										<div className="select-custom mb-20">
											<select id="service" data-default name="select">
												<option value="---">Choose Services</option>
												<option value="Individual Counseling">Individual Counseling</option>
												<option value="Family Therapy">Family Therapy</option>
												<option value="Couples Therapy">Couples Therapy</option>
												<option value="Group Therapy">Group Therapy</option>
												<option value="Child & Adolescent Therapy">Child &amp; Adolescent Therapy
												</option>
												<option value="Trauma Counseling">Trauma Counseling</option>
											</select>
										</div>
										<fieldset className="message">
											<textarea id="message" className="tf-input" name="message" rows={4} placeholder="Your mesage" tabIndex={4} aria-required="true" required />
										</fieldset>
										<button className="tf-btn style-default btn-color-secondary pd-40 boder-8 send-wrap" type="submit">
											<span>
												Submit
											</span>
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>{/* /.section-contact */}

			</Layout>
		</>
	)
}