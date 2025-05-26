import Link from 'next/link'

export default function Hero1() {
	return (
		<>

			<div className="page-title-homepage-1">
				<video playsInline autoPlay muted loop className="page-video">
					<source src="/video/video-page-title.mp4" type="video/mp4" />
				</video>
				<div className="tf-container xl ">
					<div className="row">
						<div className="col-12">
							<div className="content-inner">
								<h2 className="title">Take The First Step Towards A Balanced &amp; Fulfilling Life.</h2>
								<div className="content-right">
									<p className="text-1 description">
										With a team of highly qualified psychologists, we offer effective therapy tailored
										to your
										needs. Trust us to support you every step of the way.
									</p>
									<div className="bot">
										<Link className="tf-btn style-default btn-color-secondary pd-28" href="/contact-us">
											<span>Book a Consultation <i className="icon-ArrowRight" /></span>
										</Link>
										<p className="h6 phone">Or Call Us: <span>1-704-980-3082</span> </p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
