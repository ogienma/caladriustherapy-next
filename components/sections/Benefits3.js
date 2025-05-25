import Link from "next/link"

export default function Benefits3() {
	return (
		<>

			<div className="section-benefits page-home-2 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-12 ">
							<div className="heading-section">
								<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Benefits
								</p>
								<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Why Healingy Works
								</h3>
								<p className="description text-1 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
									Effective therapy with proven results, designed to address
									your unique needs.
								</p>
							</div>
							<div className="grid-layout-3 gap-30">
								<div className="icons-box effec-icon wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
									<div className="heading">
										<h5><Link href="#">Personalized <br />
											Care</Link></h5>
										<div className="icon">
											<i className="icon-HandHeart
                                      " />
										</div>
									</div>
									<p>We create customized treatment plans tailored to your unique needs and goals,
										ensuring an
										approach that aligns with your personal journey toward healing and growth.</p>
								</div>
								<div className="icons-box effec-icon wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
									<div className="heading">
										<h5><Link href="#">Experienced <br />
											Professionals</Link></h5>
										<div className="icon">
											<i className="icon-SketchLogo
                                      " />
										</div>
									</div>
									<p>Our therapists offer extensive training &amp; diverse expertise in various
										techniques, providing top-quality care and effective strategies tailored to your
										needs.</p>
								</div>
								<div className="icons-box effec-icon wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
									<div className="heading">
										<h5><Link href="#">Supportive <br />
											Environment</Link></h5>
										<div className="icon">
											<i className="icon-Lifebuoy
                                      " />
										</div>
									</div>
									<p>We offer a safe, compassionate space where you can feel comfortable and supported
										throughout your healing process, fostering positive and lasting change."</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>



		</>

	)
}

