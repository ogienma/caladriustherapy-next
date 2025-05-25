'use client'
import { sliderPageTitleHome } from "@/utils/swiperOptions"
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"


export default function Hero3() {
	return (
		<>

			<div className="page-title-homepage-3">
				<Swiper {...sliderPageTitleHome} className="swiper-container slide-effect-fade slider-page-title-home">
					<div className="swiper-wrapper">
						<SwiperSlide>
							<img className="lazyload" data-src="/images/page-title/page-title-home-3.1.jpg" src="/images/page-title/page-title-home-3.1.jpg" alt="healingy" />
							<div className="content-inner ">
								<div className="tf-container">
									<div className="row">
										<div className="col-12">
											<div className="wrap-content">
												<div className="heading fade-item fade-item1">
													<h2 className="title text-white">Support Your Child’s Emotional Growth
													</h2>
													<p className="description text-white fade-item fade-item2">
														Our specialized therapy for children offers a safe and nurturing
														environment where your child can express their feelings, develop
														emotional resilience, and navigate life’s challenges with
														confidence.
													</p>
												</div>
												<div className="fade-item fade-item3">
													<Link className="tf-btn style-default btn-color-secondary pd-28 " href="/contact-us">
														<span>Book a Consultation <i className="icon-ArrowRight arr-1" /></span>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img className="lazyload" data-src="/images/page-title/page-title-home-3.2.jpg" src="/images/page-title/page-title-home-3.2.jpg" alt="healingy" />
							<div className="content-inner">
								<div className="tf-container">
									<div className="row">
										<div className="col-12">
											<div className="wrap-content mx-auto  text-center">
												<div className="heading fade-item fade-item1">
													<h2 className="title text-white">Strengthen Your Emotional Core
													</h2>
													<p className="description text-white fade-item fade-item2">
														Our therapy sessions focus on empowering you to regain emotional
														balance and resilience. Let us guide you through life’s obstacles
														with care and proven strategies.
													</p>
												</div>
												<div className="fade-item fade-item3">
													<Link className="tf-btn style-default btn-color-secondary pd-28 mx-auto" href="/contact-us">
														<span>Book a Consultation <i className="icon-ArrowRight arr-1" /></span>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<img className="lazyload" data-src="/images/page-title/page-title-home-3.3.jpg" src="/images/page-title/page-title-home-3.3.jpg" alt="healingy" />
							<div className="content-inner">
								<div className="tf-container">
									<div className="row">
										<div className="col-12">
											<div className="wrap-content ml-auto text-end">
												<div className="heading">
													<h2 className="title text-white fade-item fade-item1">Renew Your Strength
														and Resilience
													</h2>
													<p className="description text-white fade-item fade-item2">
														We focus on renewing your strength and resilience. Our tailored
														therapy sessions offer the support and strategies you need to
														overcome challenges &amp; thrive.
													</p>
												</div>
												<div className="fade-item fade-item3">
													<Link className="tf-btn style-default btn-color-secondary pd-28  ml-auto " href="/contact-us">
														<span>Book a Consultation <i className="icon-ArrowRight arr-1" /></span>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</div>
				</Swiper>
				<div className="swiper-pagination pagination-page-title-home" />
			</div>


		</>

	)
}
