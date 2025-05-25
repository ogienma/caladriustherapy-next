import Link from 'next/link'

export default function Process4() {
	return (
		<>


			<section className="section-process home-page-4 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section ">
								<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">How WE
									Work</p>
								<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Counseling &amp;
									Therapy Process</h3>
								<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Supporting you from consultation to care for a
									smooth path
									to mental well-being.
								</p>
							</div>
							<div className="wrap-process ">
								<div className="process-item style-has-icon inactive effec-icon">
									<div className="item">
										<i className="icon-Lifebuoy" />
										<span className="number">4</span>
										<span className="line" />
									</div>
									<div className="content">
										<h5 className="title"><Link href="/#">Ongoing Support</Link></h5>
										<p>We’ll provide continuous support, regularly review your progress, and adjust
											the
											plan as needed to help you.</p>
									</div>
								</div>
								<div className="process-item style-has-icon inactive effec-icon">
									<div className="item">
										<i className="icon-FlowerLotus" />
										<span className="line" />
										<span className="number">3</span>
									</div>
									<div className="content">
										<h5 className="title"><Link href="/#">Therapy Sessions</Link></h5>
										<p>Attend regular therapy sessions where we’ll collaboratively address
											challenges and work towards enhancing.</p>
									</div>
								</div>
								<div className="process-item style-has-icon effec-icon">
									<div className="item">
										<i className="icon-ListChecks" />
										<span className="number">2</span>
										<span className="line" />
									</div>
									<div className="content">
										<h5 className="title"><Link href="/#">Customized Plan</Link></h5>
										<p>We’ll develop a personalized therapy plan based on your specific needs and
											goals
											to ensure the most support.</p>
									</div>
								</div>
								<div className="process-item style-has-icon effec-icon">
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
							</div>
						</div>
					</div>
				</div>
			</section>

		</>

	)
}

