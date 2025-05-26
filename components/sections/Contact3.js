import Link from 'next/link'

export default function Contact3() {
	return (
		<>


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
									<Link href="/contact-us" className="tf-btn-link z-5 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
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
			</section>

		</>

	)
}

