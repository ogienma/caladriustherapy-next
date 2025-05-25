import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function ServiceDetails() {

	return (
		<>

			<Layout breadcrumbTitle="Individual Counseling">
				{/* .section-service-details */}
				<section className="section-service-details">
					<div className="tf-container">
						<div className="row">
							<div className="col-lg-8">
								<div className="content-inner">
									<div className="image-wrap">
										<img className="lazyload" data-src="/images/section/section-service-details.jpg" src="/images/section/section-service-details.jpg" alt="healingy" />
									</div>
									<div className="heading">
										<h4 className="mb-16">About Individual Counseling Services</h4>
										<p className="text-1 lh-30">At Healingy, our Family Therapy services focus on improving
											communication, resolving conflicts, and fostering stronger family relationships.
											Our licensed therapists work with all members of the family to identify
											underlying issues and create a supportive environment where everyone feels heard
											and understood. Through tailored strategies, we help families navigate
											challenges, strengthen bonds, and build a healthier, more harmonious home life.
											Whether you're dealing with everyday struggles or complex dynamics, our family
											therapy is designed to guide you toward lasting resolution and growth.</p>
									</div>
									<div className="benefits">
										<div className="heading">
											<h4 className="mb-16">The Benefits They Have Gained From Using It</h4>
											<p className="text-1 lh-30">Clients who have used Healingy's therapy services have
												experienced reduced stress and anxiety, better communication, and stronger
												relationships. They’ve gained self-awareness, resilience, and a renewed
												sense of purpose. Our personalized approach ensures clients leave with the
												tools they need for lasting emotional and mental well-being.</p>
										</div>
										<div className="wrap-icons-box-list">
											<div className="icons-box-list effec-icon">
												<div className="icon">
													<i className="icon-HandHeart
									" />
												</div>
												<div className="content">
													<h5 className="title"><Link href="/#">Personalized
														Care</Link></h5>
													<p className="text-1 lh-30">We create customized treatment plans tailored to
														your unique needs
														and goals,
														ensuring an
														approach that aligns with your personal journey toward healing and
														growth.</p>
												</div>
											</div>
											<div className="icons-box-list effec-icon">
												<div className="icon">
													<i className="icon-SketchLogo
									" />
												</div>
												<div className="content">
													<h5 className="title"><Link href="/#">Experienced Professionals</Link></h5>
													<p className="text-1 lh-30">Our therapists offer extensive training &amp;
														diverse expertise in
														various techniques,
														providing top-quality care and effective strategies tailored to your
														needs.</p>
												</div>
											</div>
											<div className="icons-box-list effec-icon">
												<div className="icon">
													<i className="icon-Lifebuoy
									" />
												</div>
												<div className="content">
													<h5 className="title"><Link href="/#">Supportive Environment</Link></h5>
													<p className="text-1 lh-30">We offer a safe, compassionate space where you
														can feel comfortable
														and supported
														throughout your healing process, fostering positive and lasting
														change."</p>
												</div>
											</div>
										</div>
									</div>
									<div className="faq">
										<h4>Frequently Asked Questions?</h4>
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
															Therapy is useful for managing stress, anxiety, or life
															challenges. It
															offers
															support and helps with personal growth. A consultation can help
															you
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
															Therapy is useful for managing stress, anxiety, or life
															challenges. It
															offers
															support and helps with personal growth. A consultation can help
															you
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
															Therapy is useful for managing stress, anxiety, or life
															challenges. It
															offers
															support and helps with personal growth. A consultation can help
															you
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
															Therapy is useful for managing stress, anxiety, or life
															challenges. It
															offers
															support and helps with personal growth. A consultation can help
															you
															decide
															if
															it's the right option.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="therapists">
										<h4>Expert Therapists</h4>
										<div className="wrap-team">
											<div className="team-item hover-img">
												<div className="image-wrap ">
													<Link href="/therapists-details">
														<img className="lazyload" data-src="/images/section/team-item-2.jpg" src="/images/section/team-item-2.jpg" alt="healingy" />
													</Link>
												</div>
												<div className="info">
													<h5 className="name"><Link href="/#">Michael Carter</Link></h5>
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
											<div className="team-item hover-img">
												<div className="image-wrap ">
													<Link href="/therapists-details">
														<img className="lazyload" data-src="/images/section/team-item-3.jpg" src="/images/section/team-item-3.jpg" alt="healingy" />
													</Link>
												</div>
												<div className="info">
													<h5 className="name"><Link href="/#">Sarah Martinez</Link></h5>
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
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="service-siderbar sticky">
									<form className="form-consultation">
										<h5 className="mb-16">Get A Free Consultation</h5>
										<fieldset className="name">
											<input type="text" className="tf-input style-1" placeholder="Your Name*" tabIndex={2} aria-required="true" name="name" required />
										</fieldset>
										<fieldset className="phone">
											<input type="number" className="tf-input style-1" placeholder="Phone Number" tabIndex={2} aria-required="true" name="phone" required />
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
										<fieldset>
											<textarea id="message" className="tf-input" name="message" rows={4} placeholder="Your mesage" tabIndex={4} aria-required="true" required />
										</fieldset>
										<button className="tf-btn style-default btn-color-secondary pd-40 boder-8 send-wrap" type="submit">
											<span>
												Submit
											</span>
										</button>
										<div className="info">
											<h5>Infomation</h5>
											<ul className="list-info">
												<li><i className="icon-Envelope" /> <Link href="/#">themesflat@gmail.com</Link></li>
												<li><i className="icon-PhoneCall" />1-333-345-6868</li>
												<li><i className="icon-MapPin" />101 E 129th St, East Chicago, IN 46312, US
												</li>
											</ul>
										</div>
									</form>
									<div className="list-service">
										<h5>More Services</h5>
										<ul>
											<li><Link href="/#">Individual Counseling</Link></li>
											<li><Link href="/#">Family Therapy</Link></li>
											<li><Link href="/#">Couples Therapy</Link></li>
											<li><Link href="/#">Group Therapy</Link></li>
											<li><Link href="/#">Child &amp; Adolescent Therapy</Link></li>
											<li><Link href="/#">Trauma Counseling</Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

			</Layout>
		</>
	)
}