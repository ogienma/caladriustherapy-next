'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Service2() {
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i) => {
		setIsTab(i)
	}
	return (
		<>


			{/* .section-service */}
			<section className="section-service page-home-2 tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section ">
								<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">What We
									Do</p>
								<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Our Therapy
									Services</h3>
								<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">We offer range of personalized therapy options
									tailored
									to meet the unique needs of individuals, couples, <br /> and families, helping you
									overcome challenges and achieve mental well-being.
								</p>
							</div>
							<div className="widget-tabs ">
								<ul className="widget-menu-tab overflow-x-auto">
									<li className={`item-title ${isTab === 1 ? "active" : ""}`} onClick={() => handleTab(1)}>
										Individual Counseling
									</li>
									<li className={`item-title ${isTab === 2 ? "active" : ""}`} onClick={() => handleTab(2)}>
										Family Therapy
									</li>
									<li className={`item-title ${isTab === 3 ? "active" : ""}`} onClick={() => handleTab(3)}>
										Couples Therapy
									</li>
									<li className={`item-title ${isTab === 4 ? "active" : ""}`} onClick={() => handleTab(4)}>
										Group Therapy
									</li>
									<li className={`item-title ${isTab === 5 ? "active" : ""}`} onClick={() => handleTab(5)}>
										Child &amp; Adolescent Therapy
									</li>
									<li className={`item-title ${isTab === 6 ? "active" : ""}`} onClick={() => handleTab(6)}>
										Trauma Counseling
									</li>
								</ul>
								<div className="widget-content-tab">
									<div className="widget-content-inner" style={{ display: `${isTab == 1 ? "block" : "none"}` }}>
										<div className="box-service">
											<div className="image-wrap wow fadeInLeft effec-overlay" data-wow-duration={1000} data-wow-delay="0s">
												<img className="lazyload" data-src="/images/section/section-service.jpg" src="/images/section/section-service.jpg" alt="healingy" />
											</div>
											<div className="content">
												<div className="heading-section text-start ">
													<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Family Therapy</p>
													<h4 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s"><Link href="/blog-details">Experienced
														Therapists Dedicated To
														Your Family’s Emotional
														Well-Being.</Link></h4>
													<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">At Healingy, our
														licensed
														therapists
														specialize in customized family therapy, helping families
														address conflicts, enhance communication, and build deeper
														connections. We equip your family with the tools and guidance
														needed to navigate challenges and create a balanced, supportive
														home environment.
													</p>
												</div>
												<Link href="/blog-details" className="tf-btn-link z-5 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
													<span data-text="Read More">Read More</span>
													<i className="icon-ArrowRight" />
												</Link>
											</div>
										</div>
									</div>
									<div className="widget-content-inner " style={{ display: `${isTab == 2 ? "block" : "none"}` }}>
										<div className="box-service">
											<div className="image-wrap effec-overlay">
												<img className="lazyload" data-src="/images/section/section-service.jpg" src="/images/section/section-service.jpg" alt="healingy" />
											</div>
											<div className="content">
												<div className="heading-section text-start ">
													<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Family Therapy</p>
													<h4 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s"><Link href="/blog-details">Experienced
														Therapists Dedicated To
														Your Family’s Emotional
														Well-Being.</Link></h4>
													<p className="description text-1 lh-30 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">At Healingy, our
														licensed
														therapists
														specialize in customized family therapy, helping families
														address conflicts, enhance communication, and build deeper
														connections. We equip your family with the tools and guidance
														needed to navigate challenges and create a balanced, supportive
														home environment.
													</p>
												</div>
												<Link href="/blog-details" className="tf-btn-link z-5 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
													<span data-text="Read More">Read More</span>
													<i className="icon-ArrowRight" />
												</Link>
											</div>
										</div>
									</div>
									<div className="widget-content-inner " style={{ display: `${isTab == 3 ? "block" : "none"}` }}>
										<div className="box-service">
											<div className="image-wrap effec-overlay">
												<img className="lazyload" data-src="/images/section/section-service.jpg" src="/images/section/section-service.jpg" alt="healingy" />
											</div>
											<div className="content">
												<div className="heading-section text-start ">
													<p className="text-2 sub">Family Therapy</p>
													<h4><Link href="/blog-details">Experienced Therapists Dedicated To
														Your Family’s Emotional
														Well-Being.</Link></h4>
													<p className="description text-1 lh-30">At Healingy, our licensed
														therapists
														specialize in customized family therapy, helping families
														address conflicts, enhance communication, and build deeper
														connections. We equip your family with the tools and guidance
														needed to navigate challenges and create a balanced, supportive
														home environment.
													</p>
												</div>
												<Link href="/blog-details" className="tf-btn-link z-5">
													<span data-text="Read More">Read More</span>
													<i className="icon-ArrowRight" />
												</Link>
											</div>
										</div>
									</div>
									<div className="widget-content-inner " style={{ display: `${isTab == 4 ? "block" : "none"}` }}>
										<div className="box-service">
											<div className="image-wrap effec-overlay">
												<img className="lazyload" data-src="/images/section/section-service.jpg" src="/images/section/section-service.jpg" alt="healingy" />
											</div>
											<div className="content">
												<div className="heading-section text-start ">
													<p className="text-2 sub">Family Therapy</p>
													<h4><Link href="/blog-details">Experienced Therapists Dedicated To
														Your Family’s Emotional
														Well-Being.</Link></h4>
													<p className="description text-1 lh-30">At Healingy, our licensed
														therapists
														specialize in customized family therapy, helping families
														address conflicts, enhance communication, and build deeper
														connections. We equip your family with the tools and guidance
														needed to navigate challenges and create a balanced, supportive
														home environment.
													</p>
												</div>
												<Link href="/blog-details" className="tf-btn-link z-5">
													<span data-text="Read More">Read More</span>
													<i className="icon-ArrowRight" />
												</Link>
											</div>
										</div>
									</div>
									<div className="widget-content-inner " style={{ display: `${isTab == 5 ? "block" : "none"}` }}>
										<div className="box-service">
											<div className="image-wrap effec-overlay">
												<img className="lazyload" data-src="/images/section/section-service.jpg" src="/images/section/section-service.jpg" alt="healingy" />
											</div>
											<div className="content">
												<div className="heading-section text-start ">
													<p className="text-2 sub">Family Therapy</p>
													<h4><Link href="/blog-details">Experienced Therapists Dedicated To
														Your Family’s Emotional
														Well-Being.</Link></h4>
													<p className="description text-1">At Healingy, our licensed therapists
														specialize in customized family therapy, helping families
														address conflicts, enhance communication, and build deeper
														connections. We equip your family with the tools and guidance
														needed to navigate challenges and create a balanced, supportive
														home environment.
													</p>
												</div>
												<Link href="/blog-details" className="tf-btn-link z-5">
													<span data-text="Read More">Read More</span>
													<i className="icon-ArrowRight" />
												</Link>
											</div>
										</div>
									</div>
									<div className="widget-content-inner " style={{ display: `${isTab == 6 ? "block" : "none"}` }}>
										<div className="box-service">
											<div className="image-wrap effec-overlay">
												<img className="lazyload" data-src="/images/section/section-service.jpg" src="/images/section/section-service.jpg" alt="healingy" />
											</div>
											<div className="content">
												<div className="heading-section text-start ">
													<p className="text-2 sub">Family Therapy</p>
													<h4><Link href="/blog-details">Experienced Therapists Dedicated To
														Your Family’s Emotional
														Well-Being.</Link></h4>
													<p className="description text-1">At Healingy, our licensed therapists
														specialize in customized family therapy, helping families
														address conflicts, enhance communication, and build deeper
														connections. We equip your family with the tools and guidance
														needed to navigate challenges and create a balanced, supportive
														home environment.
													</p>
												</div>
												<Link href="/blog-details" className="tf-btn-link z-5">
													<span data-text="Read More">Read More</span>
													<i className="icon-ArrowRight" />
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>{/* /.section-service */}

		</>

	)
}

