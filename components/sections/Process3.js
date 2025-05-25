import Link from 'next/link'

export default function Process3() {
	return (
		<>


			<section className="section-process home-page-3 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-md-4">
							<div className="wrap-content">
								<div className="heading-section text-start">
									<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">How
										WE Work</p>
									<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s"><Link href="/#">An
										Easy-to-Follow Therapy Approach</Link></h3>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Supporting you from consultation to care for a
										smooth
										path to mental well-being.
									</p>
								</div>
								<Link className="tf-btn style-default btn-color-white has-boder pd-26 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s" href="/contact-us">
									<span>Get In Touch</span>
								</Link>
							</div>
						</div>
						<div className="col-md-7 offset-md-1 offset-0">
							<div className="wrap-process list">
								<div className="process-item style-no-line style-has-icon effec-icon wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
									<div className="item">
										<i className="icon-AddressBook" />
										<span className="number">1</span>
									</div>
									<div className="content">
										<h5 className="title"><Link href="/#">Contact Consultation</Link></h5>
										<p>Contact us via phone, email to schedule an initial consultation where we’ll
											explore your needs.</p>
									</div>
								</div>
								<div className="process-item style-no-line style-has-icon effec-icon wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
									<div className="item">
										<i className="icon-ListChecks" />
										<span className="number">2</span>
									</div>
									<div className="content">
										<h5 className="title"><Link href="/#">Customized Plan</Link></h5>
										<p>We’ll develop a personalized therapy plan based on your specific needs and
											goals
											to ensure the most support.</p>
									</div>
								</div>
								<div className="process-item style-no-line style-has-icon effec-icon wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
									<div className="item">
										<i className="icon-FlowerLotus" />
										<span className="number">3</span>
									</div>
									<div className="content">
										<h5 className="title"><Link href="/#">Therapy Sessions</Link></h5>
										<p>Contact us via phone, email to schedule an initial consultation where we’ll
											explore your needs.</p>
									</div>
								</div>
								<div className="process-item style-no-line style-has-icon  effec-icon wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
									<div className="item">
										<i className="icon-Lifebuoy" />
										<span className="number">4</span>
									</div>
									<div className="content">
										<h5 className="title"> <Link href="/#">Ongoing Support</Link></h5>
										<p>We’ll provide continuous support, regularly review your progress, and adjust
											the
											plan as needed to help you.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* /.section-process */}

		</>

	)
}

