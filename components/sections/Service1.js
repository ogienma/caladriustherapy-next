import Link from "next/link"

export default function Service1() {
	return (
		<>

			<section className="section-service  tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-12">
							<div className="wrap-heading">
								<div className="heading-section text-start wow fadeInUp" data-wow-duration={1000}>
									<p className="text-2 sub wow fadeInUp" data-wow-duration={1000}>What We Do</p>
									<h3 className="wow fadeInUp" data-wow-duration={1000}>Counseling &amp; Therapy Services
									</h3>
									<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000}>We
										offer a
										wide range of services to meet your
										personal needs
									</p>
								</div>
								<Link className="tf-btn  style-default btn-color-white has-boder pd-26 wow fadeInUp" data-wow-duration={1000} href="/#">
									<span>Explore Our Services</span>
								</Link>
							</div>
							<div className="grid-layout-3 multi-item">
								<div className="service-item style-2 h-280 wow fadeInUp" data-wow-duration={1000}>
									<div className="image-wrap">
										<img className="lazyload" data-src="/images/section/service-item-1.jpg" src="/images/section/service-item-1.jpg" alt />
									</div>
									<div className="content z-5">
										<h5 className="title">
											<Link href="/service-details"> Individual Counseling</Link>
										</h5>
										<p>Personal psychological support to help you overcome stress, anxiety, and
											regain
											confidence.</p>
									</div>
									<Link href="/service-details" className="tf-btn-link z-5">
										<span data-text="Read More">Read More</span>
										<i className="icon-ArrowRight" />
									</Link>
								</div>
								<div className="service-item style-2 h-280 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
									<div className="image-wrap">
										<img className="lazyload" data-src="/images/section/service-item-1.jpg" src="/images/section/service-item-1.jpg" alt />
									</div>
									<div className="content z-5">
										<h5 className="title">
											<Link href="/service-details">Family Therapy</Link>
										</h5>
										<p>Improve family relationships, resolve conflicts, and build a healthy
											living
											environment.</p>
									</div>
									<Link href="/service-details" className="tf-btn-link z-5">
										<span data-text="Read More">Read More</span>
										<i className="icon-ArrowRight" />
									</Link>
								</div>
								<div className="service-item style-2 h-280  wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
									<div className="image-wrap">
										<img className="lazyload" data-src="/images/section/service-item-1.jpg" src="/images/section/service-item-1.jpg" alt />
									</div>
									<div className="content z-5">
										<h5 className="title">
											<Link href="/service-details"> Couples Therapy</Link>
										</h5>
										<p>Enhance understanding affection between couples, helping to strengthen
											the
											relationship.</p>
									</div>
									<Link href="/service-details" className="tf-btn-link z-5">
										<span data-text="Read More">Read More</span>
										<i className="icon-ArrowRight" />
									</Link>
								</div>
								<div className="service-item style-2 h-280  wow fadeInUp" data-wow-duration={1000} data-wow-delay={0}>
									<div className="image-wrap">
										<img className="lazyload" data-src="/images/section/service-item-1.jpg" src="/images/section/service-item-1.jpg" alt />
									</div>
									<div className="content z-5">
										<h5 className="title">
											<Link href="/service-details"> Group Therapy</Link>
										</h5>
										<p>Join others with similar challenges, sharing experiences and support in a
											guided group setting.</p>
									</div>
									<Link href="/service-details" className="tf-btn-link z-5">
										<span data-text="Read More">Read More</span>
										<i className="icon-ArrowRight" />
									</Link>
								</div>
								<div className="service-item style-2 h-280  wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
									<div className="image-wrap">
										<img className="lazyload" data-src="/images/section/service-item-1.jpg" src="/images/section/service-item-1.jpg" alt />
									</div>
									<div className="content z-5">
										<h5 className="title">
											<Link href="/service-details">Child &amp; Adolescent Therapy</Link>
										</h5>
										<p>Specialized support for children and teens, helping them navigate
											emotional
											challenges and build resilience.</p>
									</div>
									<Link href="/service-details" className="tf-btn-link z-5">
										<span data-text="Read More">Read More</span>
										<i className="icon-ArrowRight" />
									</Link>
								</div>
								<div className="service-item style-2 h-280  wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
									<div className="image-wrap">
										<img className="lazyload" data-src="/images/section/service-item-1.jpg" src="/images/section/service-item-1.jpg" alt />
									</div>
									<div className="content z-5">
										<h5 className="title">
											<Link href="/service-details">Trauma Counseling</Link>
										</h5>
										<p>Focused therapy to help you heal from past trauma and regain control over
											your life.</p>
									</div>
									<Link href="/service-details" className="tf-btn-link z-5">
										<span data-text="Read More">Read More</span>
										<i className="icon-ArrowRight" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


		</>

	)
}

