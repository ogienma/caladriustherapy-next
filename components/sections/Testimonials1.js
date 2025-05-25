'use client'
import CountUp from 'react-countup'
import { sliderTestimonial, sliderTestimonialThumbs } from "@/utils/swiperOptions"
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
export default function Testimonials1() {
	return (
		<>


			<section className="section-testimonials bg-1 page-home-1 tf-spacing-1 ">
				<div className="tf-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section ">
								<p className="text-2 sub  wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
									Client
									Testimonials</p>
								<h3 className=" wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">What Our
									Clients
									Are Saying</h3>
								<p className="description text-1 lh-30  wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Hear firsthand accounts of healing and positive
									change.
								</p>
							</div>
							<div className="content-inner">
								<div className="wrap-testimonials">
									<Swiper {...sliderTestimonialThumbs} className="swiper-container slider-testimonial-thumbs ">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="image-wrap effec-overlay">
													<img className="lazyload" data-src="/images/section/testimonials-1.jpg" src="/images/section/testimonials-1.jpg" alt="healingy" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="image-wrap effec-overlay">
													<img className="lazyload" data-src="/images/section/testimonials-1.jpg" src="/images/section/testimonials-1.jpg" alt="healingy" />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="image-wrap effec-overlay ">
													<img className="lazyload" data-src="/images/section/testimonials-1.jpg" src="/images/section/testimonials-1.jpg" alt="healingy" />
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
									<Swiper {...sliderTestimonial} className="swiper-container slider-testimonial style-pagination ">
										<div className="swiper-wrapper">
											<SwiperSlide>
												{/* wg-testimonial */}
												<div className="wg-testimonial">
													<div className="rating">
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
													</div>
													<div className="content">
														<p className="text text-4 fw-5 mb-16">
															"We Sincerely Appreciate The Outstanding Support And
															Guidance
															Your Team Provided. Special Thanks To Susan And Vaibhav
															For
															Their Dedication
														</p>
														<div className="bot">
															<div className="info">
																<h6 className="title ">
																	<Link href="/therapists-details">John Smith</Link>
																</h6>
																<p>CEO THEMES FLAT</p>
															</div>
															<Link href="/therapists-details" className="tf-btn-link">
																<span data-text="Read More Stories">Read More
																	Stories</span>
																<i className="icon-ArrowRight" />
															</Link>
														</div>
													</div>
												</div>
												{/* /wg-testimonial */}
											</SwiperSlide>
											<SwiperSlide>
												{/* wg-testimonial */}
												<div className="wg-testimonial">
													<div className="rating">
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
													</div>
													<div className="content">
														<p className="text text-4 fw-5 mb-16">
															"We Sincerely Appreciate The Outstanding Support And
															Guidance
															Your Team Provided. Special Thanks To Susan And Vaibhav
															For
															Their Dedication
														</p>
														<div className="bot">
															<div className="info">
																<h6 className="title ">
																	<Link href="/therapists-details">John Smith</Link>
																</h6>
																<p>CEO THEMES FLAT</p>
															</div>
															<Link href="/therapists-details" className="tf-btn-link">
																<span data-text="Read More Stories">Read More
																	Stories</span>
																<i className="icon-ArrowRight" />
															</Link>
														</div>
													</div>
												</div>
												{/* /wg-testimonial */}
											</SwiperSlide>
											<SwiperSlide>
												{/* wg-testimonial */}
												<div className="wg-testimonial">
													<div className="rating">
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
													</div>
													<div className="content">
														<p className="text text-4 fw-5 mb-16">
															"We sincerely appreciate the outstanding support and
															guidance
															your team provided. Special thanks to Susan and Vaibhav
															for
															their dedication
														</p>
														<div className="bot">
															<div className="info">
																<h6 className="title ">
																	<Link href="/#">John Smith</Link>
																</h6>
																<p>CEO THEMES FLAT</p>
															</div>
															<Link href="/therapists-details" className="tf-btn-link">
																<span data-text="Read More Stories">Read More
																	Stories</span>
																<i className="icon-ArrowRight" />
															</Link>
														</div>
													</div>
												</div>
												{/* /wg-testimonial */}
											</SwiperSlide>
										</div>
										<div className="swiper-pagination pagination-testimonial">
										</div>
									</Swiper>
								</div>
								<div className="wrap-counter">
									<div className="counter-item">
										<div className="count">
											<div className="counter-number">
												<div className="odometer style-1-1"><CountUp enableScrollSpy={true} end={20} />
												</div>
												<span className="sub">Years</span>
											</div>
											<p>Years experiences</p>
										</div>
									</div>
									<div className="counter-item">
										<div className="count">
											<div className="counter-number">
												<div className="odometer style-1-2"><CountUp enableScrollSpy={true} end={2} />
												</div>
												<span className="sub">k</span>
											</div>
											<p>Happy customers</p>
										</div>
									</div>
									<div className="counter-item">
										<div className="count">
											<div className="counter-number">
												<div className="odometer style-1-3"><CountUp enableScrollSpy={true} end={46} />
												</div>
											</div>
											<p>Project completed</p>
										</div>
									</div>
									<div className="counter-item">
										<div className="count">
											<div className="counter-number">
												<div className="odometer style-1-4"><CountUp enableScrollSpy={true} end={15} />
												</div>
											</div>
											<p>Awards achievement</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>

	)
}

