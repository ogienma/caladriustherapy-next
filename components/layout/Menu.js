'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Menu() {
	const pathname = usePathname()

	const checkCurrentMenuItem = (path) => pathname === path ? "current-item" : ""
	const checkParentActive = (paths) => paths.some(path => pathname.startsWith(path)) ? "current-menu-item" : ""

	return (
		<>

			<ul className="navigation">
				<li className={`has-child relative ${checkParentActive(["/home-02", "/home-03", "/home-04", "/home-silde-text-scroll"])}`}>
					<Link href="/#">Home</Link>
					<ul className="sub-menu">
						<li className={checkCurrentMenuItem("/")}>
							<Link href="/">Homepage 01</Link>
						</li>
						<li className={checkCurrentMenuItem("/home-02")}>
							<Link href="/home-02">Homepage 02</Link>
						</li>
						<li className={checkCurrentMenuItem("/home-03")}>
							<Link href="/home-03">Homepage 03</Link>
						</li>
						<li className={checkCurrentMenuItem("/home-04")}>
							<Link href="/home-04">Homepage 04</Link>
						</li>
						<li className={checkCurrentMenuItem("/home-silde-text-scroll")}>
							<Link href="/home-silde-text-scroll">Home Slide Text Scroll</Link>
						</li>
					</ul>
				</li>
				<li className={`has-child ${checkCurrentMenuItem("/our-service")}`}>
					<Link href="/our-service">Services</Link>
					<div className="sub-menu service-link">
						<div className="tf-container">
							<div className="row">
								<div className="col-12">
									<div className="wrap-cta">
										<div className="left">
											<h5 className="wg-title">Counseling &amp; Therapy Services
											</h5>
											<div className="wrap-service">
												<div className="service-item-list">
													<h6><Link href="/service-details">Family
														Therapy</Link></h6>
													<p className="text-2">
														Improve family relationships, resolve
														conflicts, and build a healthy living
														environment.
													</p>
												</div>
												<div className="service-item-list">
													<h6><Link href="/service-details">Child &amp;
														Adolescent
														Therapy</Link></h6>
													<p className="text-2">
														Specialized support for children and
														teens, helping them navigate emotional
														challenges.
													</p>
												</div>
												<div className="service-item-list">
													<h6><Link href="/service-details">Group
														Therapy</Link>
													</h6>
													<p className="text-2">
														Join others with similar challenges,
														sharing experiences and support in a
														guided group setting.
													</p>
												</div>
												<div className="service-item-list">
													<h6><Link href="/service-details">Couples
														Therapy</Link></h6>
													<p className="text-2">
														Enhance understanding affection between
														couples, helping to strengthen the
														relationship.
													</p>
												</div>
												<div className="service-item-list">
													<h6><Link href="/service-details">Trauma
														Counseling</Link></h6>
													<p className="text-2">
														Focused therapy to help you heal from
														past trauma and regain control over your
														life.
													</p>
												</div>
												<div className="service-item-list">
													<h6><Link href="/service-details">Individual
														Counseling</Link>
													</h6>
													<p className="text-2">
														Personal psychological support to help
														you overcome stress, anxiety, and regain
														confidence.
													</p>
												</div>
											</div>
										</div>
										<div className="right">
											<h5 className="wg-title">
												What’s New
											</h5>
											<div className="wrap-list">
												<div className="box-listings">
													<div className="image-wrap">
														<img src="/images/blog/blog-details-list-1.jpg" alt />
													</div>
													<div className="content">
														<ul className="meta">
															<li className="text-2">Oct 17, 2024</li>
														</ul>
														<div className="title text-1 fw-5 line-clamp-2">
															<Link href="/blog-details" className="line-clamp-2">How
																Cognitive Behavioral
																Therapy
																Can Transform</Link>
														</div>
													</div>
												</div>
												<div className="box-listings">
													<div className="image-wrap">
														<img src="/images/blog/blog-details-list-2.jpg" alt />
													</div>
													<div className="content">
														<ul className="meta">
															<li className="text-2">Oct 19, 2024</li>
														</ul>
														<div className="title text-1 fw-5 ">
															<Link className="line-clamp-2" href="/blog-details">Effective
																Strategies
																for
																Managing Anxiety</Link>
														</div>
													</div>
												</div>
												<div className="box-listings">
													<div className="image-wrap">
														<img src="/images/blog/blog-details-list-4.jpg" alt />
													</div>
													<div className="content">
														<ul className="meta">
															<li className="text-2">Oct 26, 2024</li>
														</ul>
														<div className="title text-1 fw-5 ">
															<Link className="line-clamp-2" href="/blog-details">
																Techniques for Everyday
																Stress
																Relief</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</li>
				<li className={`has-child relative ${checkParentActive(["/about", "/our-therapists", "/book-appointment"])}`}>
					<Link href="/#">Pages</Link>
					<ul className="sub-menu">
						<li className={checkCurrentMenuItem("/about")}>
							<Link href="/about">About</Link>
						</li>
						<li className={checkCurrentMenuItem("/our-therapists")}>
							<Link href="/our-therapists">Therapists</Link>
						</li>
						<li className={checkCurrentMenuItem("/book-appointment")}>
							<Link href="/book-appointment">Appointment</Link>
						</li>
					</ul>
				</li>
				<li className={`has-child relative ${checkParentActive(["/our-product", "/shop-cart", "/shop-check-out", "/product-details"])}`}>
					<Link href="/#">Shop</Link>
					<ul className="sub-menu">
						<li className={checkCurrentMenuItem("/our-product")}>
							<Link href="/our-product">Our Product</Link>
						</li>
						<li className={checkCurrentMenuItem("/shop-cart")}>
							<Link href="/shop-cart">Shop Cart</Link>
						</li>
						<li className={checkCurrentMenuItem("/shop-check-out")}>
							<Link href="/shop-check-out">Check Out</Link>
						</li>
						<li className={checkCurrentMenuItem("/product-details")}>
							<Link href="/product-details">Shop Details</Link>
						</li>
					</ul>
				</li>
				<li className={`has-child relative ${checkParentActive(["/blog-grid", "/blog-details", "/blog-details-2"])}`}>
					<Link href="/#">Blogs</Link>
					<ul className="sub-menu">
						<li className={checkCurrentMenuItem("/blog-grid")}>
							<Link href="/blog-grid">Blog Grid</Link>
						</li>
						<li className={checkCurrentMenuItem("/blog-details")}>
							<Link href="/blog-details">Blog Details 1</Link>
						</li>
						<li className={checkCurrentMenuItem("/blog-details-2")}>
							<Link href="/blog-details-2">Blog Details 2</Link>
						</li>
					</ul>
				</li>
				{/* <li className={checkCurrentMenuItem("/contact-us")}> */}
				<li className={`item ${pathname === "/contact-us" ? "current-menu-item" : ""}`}>
					<Link href="/contact-us">Contact</Link>
				</li>
			</ul>
		</>
	)
}
