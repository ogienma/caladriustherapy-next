import Link from "next/link"
import Menu from "../Menu"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu }) {
	return (
		<>

			<header id="header-main" className={`header style-1 no-boder ${scroll ? 'scrollHeader' : ''}`} style={{ top: '0' }}>
				<div className="header-inner">
					<div className="header-inner-wrap w-1840 ">
						<div className="mobile-button" data-bs-toggle="offcanvas" data-bs-target="#menu-mobile" aria-controls="menu-mobile">
							<i className="icon-menu" />
						</div>
						<div className="header-left">
							<div className="header-logo">
								<Link href="/" className="site-logo">
									<img id="logo_header" alt="healingy" src="/images/logo/Logo.png" data-retina="images/logo/logo@2x.png" />
								</Link>
							</div>
							<nav className="main-menu">
								<Menu />
							</nav>
						</div>
						<div className="header-right">
							<div className="btn-get">
								<Link className="tf-btn style-default btn-color-secondary pd-40" href="/book-appointment">
									<span>
										Get Your Consult!
									</span>
								</Link>
							</div>
							<div className="group-btn">
								<Link className="btn-find" href="/#canvasSearch" data-bs-toggle="offcanvas">
									<div className="icon">
										<i className="icon-MagnifyingGlass" />
									</div>
								</Link>
								<Link href="/shop-cart" className="btn-shop-bag">
									<div className="icon">
										<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_10985_955)">
												<g clipPath="url(#clip1_10985_955)">
													<path d="M20.0547 4.13965H3.55469C3.14047 4.13965 2.80469 4.47543 2.80469 4.88965V18.3896C2.80469 18.8039 3.14047 19.1396 3.55469 19.1396H20.0547C20.4689 19.1396 20.8047 18.8039 20.8047 18.3896V4.88965C20.8047 4.47543 20.4689 4.13965 20.0547 4.13965Z" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M2.80469 7.13965H20.8047" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M15.5547 10.1396C15.5547 11.1342 15.1596 12.088 14.4563 12.7913C13.7531 13.4946 12.7992 13.8896 11.8047 13.8896C10.8101 13.8896 9.8563 13.4946 9.15304 12.7913C8.44978 12.088 8.05469 11.1342 8.05469 10.1396" stroke="#3C210E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</g>
											</g>
											<defs>
												<clipPath id="clip0_10985_955">
													<rect width={24} height={24} fill="white" />
												</clipPath>
												<clipPath id="clip1_10985_955">
													<rect width={24} height={24} fill="white" transform="translate(-0.195312 -0.360352)" />
												</clipPath>
											</defs>
										</svg>
									</div>
									<span>2</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</header>

		</>
	)
}
