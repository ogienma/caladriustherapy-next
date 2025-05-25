'use client'
import { sliderTestimonial, sliderTestimonialThumbs } from "@/utils/swiperOptions"
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"

export default function Testimonials5() {
	return (
		<>


			<section className="section-testimonials page-home-2  tf-spacing-1 ">
				<div className="tf-container">
					<div className="row">
						<div className="col-12">
							<div className="content-inner">
								<div className="wrap-testimonials">
									<div className="content style-pagination">
										<div className="heading-section text-start ">
											<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Client Testimonials</p>
											<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">What
												Our Clients Are Saying</h3>
											<p className="description text-1 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Hear firsthand accounts of healing and
												positive change.
											</p>
										</div>
										<Swiper {...sliderTestimonial} className="swiper-container slider-testimonial  ">
											<div className="swiper-wrapper">
												<SwiperSlide>
													<div className="wg-testimonial">
														<div className="rating wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
															<i className="icon-favorite_major" />
															<i className="icon-favorite_major" />
															<i className="icon-favorite_major" />
															<i className="icon-favorite_major" />
															<i className="icon-favorite_major" />
														</div>
														<div className="content">
															<p className="text text-5  mb-16 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
																"We sincerely appreciate the outstanding support and
																guidance your team provided. Special thanks to Susan and
																Vaibhav for their dedication, which played a crucial
																role in helping us reach this important milestone."
															</p>
															<div className="bot">
																<div className="info wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
																	<h6 className="title ">
																		<Link href="therapists-details.html">John Smith</Link>
																	</h6>
																	<p>CEO THEMES FLAT</p>
																</div>
																<Link href="therapists-details.html" className="tf-btn-link wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
																	<span data-text="Read More Stories">Read More
																		Stories</span>
																	<i className="icon-ArrowRight" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="wg-testimonial">
														<div className="rating">
															<i className="icon-favorite_major" />
															<i className="icon-favorite_major" />
															<i className="icon-favorite_major" />
															<i className="icon-favorite_major" />
															<i className="icon-favorite_major" />
														</div>
														<div className="content">
															<p className="text text-5  mb-16">
																"We Sincerely Appreciate The Outstanding Support And
																Guidance
																Your Team Provided. Special Thanks To Susan And Vaibhav
																For
																Their Dedication
															</p>
															<div className="bot">
																<div className="info">
																	<h6 className="title ">
																		<Link href="therapists-details.html">John Smith</Link>
																	</h6>
																	<p>CEO THEMES FLAT</p>
																</div>
																<Link href="therapists-details.html" className="tf-btn-link">
																	<span data-text="Read More Stories">Read More
																		Stories</span>
																	<i className="icon-ArrowRight" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
												<SwiperSlide>
													<div className="wg-testimonial">
														<div className="rating">
															<i className="icon-favorite_major" />
															<i className="icon-favorite_major" />
															<i className="icon-favorite_major" />
															<i className="icon-favorite_major" />
															<i className="icon-favorite_major" />
														</div>
														<div className="content">
															<p className="text text-5  mb-16">
																"We sincerely appreciate the outstanding support and
																guidance
																your team provided. Special thanks to Susan and Vaibhav
																for
																their dedication
															</p>
															<div className="bot">
																<div className="info">
																	<h6 className="title ">
																		<Link href="therapists-details.html">John Smith</Link>
																	</h6>
																	<p>CEO THEMES FLAT</p>
																</div>
																<Link href="therapists-details.html" className="tf-btn-link">
																	<span data-text="Read More Stories">Read More
																		Stories</span>
																	<i className="icon-ArrowRight" />
																</Link>
															</div>
														</div>
													</div>
												</SwiperSlide>
											</div>
										</Swiper>
										<div className="swiper-pagination pagination-testimonial">
										</div>
									</div>
									<Swiper {...sliderTestimonialThumbs} className="swiper-container slider-testimonial-thumbs ">
										<div className="swiper-wrapper">
											<SwiperSlide>
												<div className="image-wrap effec-overlay">
													<img className="lazyload" data-src="/images/section/testimonials-2.jpg" src="/images/section/testimonials-2.jpg" alt />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="image-wrap effec-overlay">
													<img className="lazyload" data-src="/images/section/testimonials-2.jpg" src="/images/section/testimonials-2.jpg" alt />
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className="image-wrap effec-overlay">
													<img className="lazyload" data-src="/images/section/testimonials-2.jpg" src="/images/section/testimonials-2.jpg" alt />
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


		</>

	)
}

