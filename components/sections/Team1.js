import Link from 'next/link'

export default function Team1() {
	return (
		<>


			<section className="section-team tf-spacing-1">
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
			</section>

		</>

	)
}

