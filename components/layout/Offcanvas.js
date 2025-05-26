'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function OffcanvasMobileMenu() {
	const pathname = usePathname()

	const checkCurrentMenuItem = (path) => (pathname === path ? 'current-item' : '')
	const checkParentActive = (paths) => (paths.some((path) => pathname.startsWith(path)) ? 'current-menu-item' : '')

	// Function to close the offcanvas
	const closeOffcanvas = () => {
		const offcanvas = document.getElementById('menu-mobile')
		const offcanvasBackdrop = document.querySelector('.offcanvas-backdrop')
		if (offcanvas && offcanvasBackdrop) {
			offcanvas.classList.remove('show')
			offcanvasBackdrop.remove() // Corrected here
			document.body.classList.remove('offcanvas-open')
		}
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
							<Link
								href="/#dropdown-menu-one"
								className="item-menu-mobile collapsed"
								data-bs-toggle="collapse"
								aria-expanded="true"
								aria-controls="dropdown-menu-one"
							>
								Home
							</Link>
							<div
								id="dropdown-menu-one"
								className={`collapse ${pathname === '/' ? 'show' : ''}`}
								data-bs-parent="#menu-mobile-menu"
							>
								<ul className="sub-mobile">
									<li className={`menu-item ${checkCurrentMenuItem('/')}`}>
										<Link href="/" onClick={closeOffcanvas}>Homepage 01</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/home-02')}`}>
										<Link href="/home-02" onClick={closeOffcanvas}>Homepage 02</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/home-03')}`}>
										<Link href="/home-03" onClick={closeOffcanvas}>Homepage 03</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/home-04')}`}>
										<Link href="/home-04" onClick={closeOffcanvas}>Homepage 04</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/home-silde-text-scroll')}`}>
										<Link href="/home-silde-text-scroll" onClick={closeOffcanvas}>Home slide text scroll</Link>
									</li>
								</ul>
							</div>
						</li>

						<li className={`menu-item ${checkCurrentMenuItem('/about')}`}>
							<Link href="/about" className="item-menu-mobile" onClick={closeOffcanvas}>
								About
							</Link>
						</li>

						<li
							className={`menu-item menu-item-has-children-mobile ${checkParentActive([
								'/our-service',
								'/service-details',
							])}`}
						>
							<Link
								href="/#dropdown-menu-two"
								className="item-menu-mobile collapsed"
								data-bs-toggle="collapse"
								aria-expanded="true"
								aria-controls="dropdown-menu-two"
							>
								Services
							</Link>
							<div id="dropdown-menu-two" className="collapse" data-bs-parent="#menu-mobile-menu">
								<ul className="sub-mobile">
									<li className={`menu-item ${checkCurrentMenuItem('/our-service')}`}>
										<Link href="/our-service" onClick={closeOffcanvas}>Our Service</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/service-details')}`}>
										<Link href="/service-details" onClick={closeOffcanvas}>Service Details</Link>
									</li>
								</ul>
							</div>
						</li>

						<li className={`menu-item ${checkCurrentMenuItem('/our-therapists')}`}>
							<Link href="/our-therapists" className="item-menu-mobile" onClick={closeOffcanvas}>
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
							<Link
								href="/#dropdown-menu-three"
								className="item-menu-mobile collapsed"
								data-bs-toggle="collapse"
								aria-expanded="true"
								aria-controls="dropdown-menu-three"
							>
								Pages
							</Link>
							<div id="dropdown-menu-three" className="collapse" data-bs-parent="#menu-mobile-menu">
								<ul className="sub-mobile">
									<li
										className={`menu-item menu-item-has-children-mobile-2 ${checkParentActive([
											'/our-product',
											'/shop-cart',
											'/shop-check-out',
											'/product-details',
										])}`}
									>
										<Link
											href="/#sub-product-one"
											className="item-menu-mobile collapsed"
											data-bs-toggle="collapse"
											aria-expanded="true"
											aria-controls="sub-product-one"
										>
											Shop
										</Link>
										<div id="sub-product-one" className="collapse">
											<ul className="sub-mobile">
												<li className={`menu-item ${checkCurrentMenuItem('/our-product')}`}>
													<Link href="/our-product" onClick={closeOffcanvas}>Shop Product</Link>
												</li>
												<li className={`menu-item ${checkCurrentMenuItem('/shop-cart')}`}>
													<Link href="/shop-cart" onClick={closeOffcanvas}>Shop Cart</Link>
												</li>
												<li className={`menu-item ${checkCurrentMenuItem('/shop-check-out')}`}>
													<Link href="/shop-check-out" onClick={closeOffcanvas}>Check Out</Link>
												</li>
												<li className={`menu-item ${checkCurrentMenuItem('/product-details')}`}>
													<Link href="/product-details" onClick={closeOffcanvas}>Shop Details</Link>
												</li>
											</ul>
										</div>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/book-appointment')}`}>
										<Link href="/book-appointment" onClick={closeOffcanvas}>Appointment</Link>
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
							<Link
								href="/#dropdown-menu-four"
								className="item-menu-mobile collapsed"
								data-bs-toggle="collapse"
								aria-expanded="true"
								aria-controls="dropdown-menu-four"
							>
								Blogs
							</Link>
							<div id="dropdown-menu-four" className="collapse" data-bs-parent="#menu-mobile-menu">
								<ul className="sub-mobile">
									<li className={`menu-item ${checkCurrentMenuItem('/blog-grid')}`}>
										<Link href="/blog-grid" onClick={closeOffcanvas}>Blog Grid</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/blog-details')}`}>
										<Link href="/blog-details" onClick={closeOffcanvas}>Blog Details 1</Link>
									</li>
									<li className={`menu-item ${checkCurrentMenuItem('/blog-details-2')}`}>
										<Link href="/blog-details-2" onClick={closeOffcanvas}>Blog Details 2</Link>
									</li>
								</ul>
							</div>
						</li>

						<li className={`menu-item ${checkCurrentMenuItem('/contact-us')}`}>
							<Link href="/contact-us" className="item-menu-mobile" onClick={closeOffcanvas}>
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
								Call Us Now: <span className="number">1-704-980-3082</span>
							</li>
							<li>
								Email Us: <span className="mail">help@healingy.com</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
