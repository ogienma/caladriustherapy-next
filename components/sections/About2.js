import Link from 'next/link'

export default function About2() {
	return (
		<>


			<div className="section-box-about page-home-2">
				<div className="tf-container">
					<div className="wrap-box-about">
						<div className="row ">
							<div className="col-md-6">
								<div className="image-wrap  wow fadeInLeft effec-overlay" data-wow-duration={1000} data-wow-delay="0s">
									<img className="lazyload" data-src="/images/section/section-about.jpg" src="/images/section/section-about.jpg" alt="healingy" />
								</div>
							</div>
							<div className="col-md-6 ">
								<div className="box-about">
									<div className="icon  wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<img src="/images/item/favicon.png" alt="healingy" />
									</div>
									<div className="heading-section text-start  wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
											About Healingy</p>
										<h3>Trusted professionals dedicated to your mental well-being
										</h3>
										<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">With a team of licensed therapists and a
											personalized approach to mental health, Healingy provides you with the tools
											and support to overcome life's challenges. We believe in empowering every
											individual to find balance, healing, and growth
										</p>
									</div>
									<Link className="tf-btn  style-default btn-color-white has-boder pd-26 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s" href="/about">
										<span>Learn More About Us</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>

	)
}

