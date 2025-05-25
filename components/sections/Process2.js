import Link from 'next/link'

export default function Process2() {
	return (
		<>

			{/* .section-process */}
			<section className="section-process bg-1 home-page-2 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-md-6">
							<div className="wrap-content">
								<div className="heading-section text-start">
									<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">How
										WE Work</p>
									<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Simple Process
										For
										Great Results</h3>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">A clear and straightforward approach that
										simplifies
										the therapy process, ensuring you make meaningful and lasting progress on your
										journey to better mental health.
									</p>
								</div>
								<Link className="tf-btn style-default btn-color-white has-boder pd-26 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s" href="/contact-us">
									<span>Contact Us</span>
								</Link>
							</div>
						</div>
						<div className="col-md-6">
							<div className="wrap-process list wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
								<div className="process-item style-no-line style-no-icon">
									<div className="item">
										<span className="step text-2">STEP 1</span>
										<span className="number">01</span>
									</div>
									<div className="content">
										<h5 className="title"><Link href="/#">Contact Consultation</Link></h5>
										<p>Contact us via phone, email to schedule an initial consultation where we’ll
											explore your needs.</p>
									</div>
								</div>
								<div className="process-item style-no-line style-no-icon wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
									<div className="item">
										<span className="step text-2">STEP 2</span>
										<span className="number">02</span>
									</div>
									<div className="content">
										<h5 className="title"><Link href="/#">Customized Plan</Link></h5>
										<p>We’ll develop a personalized therapy plan based on your specific needs and
											goals to ensure the most support.</p>
									</div>
								</div>
								<div className="process-item style-no-line style-no-icon  wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
									<div className="item">
										<span className="step text-2">STEP 3</span>
										<span className="number">03</span>
									</div>
									<div className="content">
										<h5 className="title"><Link href="/#">Therapy Sessions</Link></h5>
										<p>Attend regular therapy sessions where we’ll collaboratively address
											challenges and work towards enhancing.</p>
									</div>
								</div>
								<div className="process-item style-no-line style-no-icon wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
									<div className="item">
										<span className="step text-2">STEP 4</span>
									</div>
									<span className="number">04</span>
									<div className="content">
										<h5 className="title"><Link href="/#">Ongoing Support</Link></h5>
										<p>We’ll provide continuous support, regularly review your progress, and adjust
											the
											plan as needed to help you.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>{/* /.section-process */}


		</>

	)
}

