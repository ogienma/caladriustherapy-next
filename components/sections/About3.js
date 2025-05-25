'use client'
import CountUp from 'react-countup'
export default function About3() {
	return (
		<>

			{/* .section-box-about */}
			<div className="section-box-about page-home-3 tf-spacing-1">
				<div className="tf-container">
					<div className="wrap-box-about ">
						<div className="row ">
							<div className="col-md-6 ">
								<div className="box-about">
									<div className="icon wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<img src="/images/item/favicon.png" alt="healingy" />
									</div>
									<div className="heading-section text-start ">
										<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
											About Healingy</p>
										<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Trusted
											professionals dedicated to your mental
										</h3>
										<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Healingy is a reputable center for
											counseling and
											psychological therapy, with a team of experienced professionals ready to
											listen and support you. We believe that everyone has the ability to heal and
											grow, with the right guidance.
										</p>
									</div>
									<div className="wrap-counter layout-2">
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
												<p>Awards Winner</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-5 offset-xl-1 offset-0">
								<div className="image-wrap wow fadeInRight effec-overlay" data-wow-duration={1000} data-wow-delay="0s">
									<img className="lazyload" data-src="/images/section/section-benefit.jpg" src="/images/section/section-benefit.jpg" alt="healingy" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> {/* /.section-box-about */}


		</>

	)
}

