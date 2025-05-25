import Link from "next/link"
import Menu from "../Menu"

export default function Header5({ scroll, isMobileMenu, handleMobileMenu }) {
	return (
		<>



			<header id="header-main" className={`header style-absolute ${scroll ? ' header-bg scrollHeader' : ''}`} style={{ top: '0' }}>
				<div className="header-inner">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="header-inner-wrap">
									<div className="header-logo">
										<Link href="/" className="site-logo">
											<img id="logo_header" alt src="/images/logo/Logo.png" data-retina="images/logo/logo@2x.png" />
										</Link>
									</div>
									<nav className="main-menu">
										<Menu />
									</nav>
									<div className="header-right">
										<div className="btn-get">
											<Link className="tf-btn style-default btn-color-secondary pd-40" href="/book-appointment">
												<span>
													Get Your Consult!
												</span>
											</Link>
										</div>
										<div className="mobile-button" data-bs-toggle="offcanvas" data-bs-target="#menu-mobile" aria-controls="menu-mobile">
											<i className="icon-menu" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</header>

		</>
	)
}
