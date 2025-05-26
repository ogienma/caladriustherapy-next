'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function OffcanvasMobileMenu({ isMobileMenu, handleMobileMenu }) {
	const pathname = usePathname()

	const checkCurrentMenuItem = (path) => (pathname === path ? 'current-item' : '')
	const checkParentActive = (paths) => (paths.some((path) => pathname.startsWith(path)) ? 'current-menu-item' : '')
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	return (
		<div
			className="offcanvas offcanvas-start mobile-nav-wrap"
			tabIndex={-1}
			id="menu-mobile"
			aria-labelledby="menu-mobile"
		>
			<div className="offcanvas-header top-nav-mobile">
				<div className="offcanvas-title">
					<Link href="/">
						<img src="/images/logo/Logo.png" alt="healingy" />
					</Link>
				</div>
				<div data-bs-dismiss="offcanvas" aria-label="Close">
					<i className="icon-close" />
				</div>
			</div>
			<div className="offcanvas-body inner-mobile-nav">
				<div className="mb-body">
					<ul id="menu-mobile-menu">
						<li
							className={`menu-item menu-item-has-children-mobile ${checkParentActive([
								'/home-02',
								'/home-03',
								'/home-04',
								'/home-silde-text-scroll',
							])}`}
						>
							<a

								className={isAccordion === 1 ? 'collapsed' : ''}
								onClick={() => handleAccordion(1)}
								aria-expanded="true"
								aria-controls="dropdown-menu-one"
							>
								Home
							</a>
							<div
								id="dropdown-menu-one"
								className={`collapse ${isAccordion === 1 ? 'show' : ''}`}
								data-bs-parent="#menu-mobile-menu"
							>
								<ul className="sub-mobile">
									<li className={`menu-item ${checkCurrentMenuItem('/')}`}>
										<Link href="/">Homepage 01</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/home-02')}`}>
										<Link href="/home-02">Homepage 02</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/home-03')}`}>
										<Link href="/home-03">Homepage 03</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/home-04')}`}>
										<Link href="/home-04">Homepage 04</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/home-silde-text-scroll')}`}>
										<Link href="/home-silde-text-scroll">Home slide text scroll</Link>
									</li>
								</ul>
							</div>
						</li>

						<li className={`menu-item ${checkCurrentMenuItem('/about')}`}>
							<Link href="/about" className="item-menu-mobile">
								About
							</Link>
						</li>

						<li
							className={`menu-item menu-item-has-children-mobile ${checkParentActive([
								'/our-service',
								'/service-details',
							])}`}
						>
							<a

								className="item-menu-mobile collapsed"
								onClick={() => handleAccordion(2)}
								aria-expanded="true"
								aria-controls="dropdown-menu-two"
							>
								Services
							</a>
							<div id="dropdown-menu-two" className={`collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#menu-mobile-menu">
								<ul className="sub-mobile">
									<li className={`menu-item ${checkCurrentMenuItem('/our-service')}`}>
										<Link href="/our-service">Our Service</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/service-details')}`}>
										<Link href="/service-details">Service Details</Link>
									</li>
								</ul>
							</div>
						</li>

						<li className={`menu-item ${checkCurrentMenuItem('/our-therapists')}`}>
							<Link href="/our-therapists" className="item-menu-mobile">
								Therapists
							</Link>
						</li>

						<li
							className={`menu-item menu-item-has-children-mobile ${checkParentActive([
								'/our-product',
								'/shop-cart',
								'/shop-check-out',
								'/product-details',
							])}`}
						>
							<a

								className="item-menu-mobile collapsed"
								onClick={() => handleAccordion(3)}
								aria-expanded="true"
								aria-controls="dropdown-menu-three"
							>
								Pages
							</a>
							<div id="dropdown-menu-three" className={`collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#menu-mobile-menu">
								<ul className="sub-mobile">
									<li
										className={`menu-item menu-item-has-children-mobile-2 ${checkParentActive([
											'/our-product',
											'/shop-cart',
											'/shop-check-out',
											'/product-details',
										])}`}
									>
										<a
											href="/#sub-product-one"
											className="item-menu-mobile collapsed"
											onClick={() => handleAccordion(4)}
											aria-expanded="true"
											aria-controls="sub-product-one"
										>
											Shop
										</a>
										<div id="sub-product-one" className={`collapse ${isAccordion === 4 ? 'show' : ''}`}>
											<ul className="sub-mobile">
												<li className={`menu-item ${checkCurrentMenuItem('/our-product')}`}>
													<Link href="/our-product">Shop Product</Link>
												</li>
												<li className={`menu-item ${checkCurrentMenuItem('/shop-cart')}`}>
													<Link href="/shop-cart">Shop Cart</Link>
												</li>
												<li className={`menu-item ${checkCurrentMenuItem('/shop-check-out')}`}>
													<Link href="/shop-check-out">Check Out</Link>
												</li>
												<li className={`menu-item ${checkCurrentMenuItem('/product-details')}`}>
													<Link href="/product-details">Shop Details</Link>
												</li>
											</ul>
										</div>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/book-appointment')}`}>
										<Link href="/book-appointment">Appointment</Link>
									</li>
								</ul>
							</div>
						</li>

						<li
							className={`menu-item menu-item-has-children-mobile ${checkParentActive([
								'/blog-grid',
								'/blog-details',
								'/blog-details-2',
							])}`}
						>
							<a

								className="item-menu-mobile collapsed"
								onClick={() => handleAccordion(5)}
								aria-expanded="true"
								aria-controls="dropdown-menu-four"
							>
								Blogs
							</a>
							<div id="dropdown-menu-four" className={`collapse ${isAccordion === 5 ? 'show' : ''}`} data-bs-parent="#menu-mobile-menu">
								<ul className="sub-mobile">
									<li className={`menu-item ${checkCurrentMenuItem('/blog-grid')}`}>
										<Link href="/blog-grid">Blog Grid</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/blog-details')}`}>
										<Link href="/blog-details">Blog Details 1</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/blog-details-2')}`}>
										<Link href="/blog-details-2">Blog Details 2</Link>
									</li>
								</ul>
							</div>
						</li>

						<li className={`menu-item ${checkCurrentMenuItem('/contact-us')}`}>
							<Link href="/contact-us" className="item-menu-mobile">
								Contact
							</Link>
						</li>
					</ul>

					<div className="support">
						<Link href="/#" className="text-need">
							Need help?
						</Link>
						<ul className="mb-info">
							<li>
								Call Us Now: <span className="number">1-555-678-8888</span>
							</li>
							<li>
								Support 24/7: <Link href="/#">hello@caladriustherapy.com</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
