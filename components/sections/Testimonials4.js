'use client'
import { sliderTestimonial1 } from "@/utils/swiperOptions"
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"

export default function Testimonials4() {
	return (
		<>

			<section className="section-testimonials home-page-4 bg-1  tf-spacing-1 style-pagination">
				<Swiper {...sliderTestimonial1} className="swiper-container  slider-testimonial-1">
					<div className="swiper-wrapper">
						<SwiperSlide>
							<div className="wg-testimonial  style-text-center style-full ">
								<div className="rating wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
									<i className="icon-favorite_major" />
									<i className="icon-favorite_major" />
									<i className="icon-favorite_major" />
									<i className="icon-favorite_major" />
									<i className="icon-favorite_major" />
								</div>
								<div className="content">
									<h4 className="text mb-24 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										"We Sincerely Appreciate The Outstanding Support And Guidance Your Team
										Provided. Special Thanks To Susan And Vaibhav For Their Dedication
									</h4>
									<div className="bot wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
										<div className="info">
											<h6 className="title ">
												<Link href="/therapists-details">John Smith</Link>
											</h6>
											<span className="fw-5">//</span>
											<p> CEO THEMES FLAT</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="wg-testimonial  style-text-center style-full ">
								<div className="rating">
									<i className="icon-favorite_major" />
									<i className="icon-favorite_major" />
									<i className="icon-favorite_major" />
									<i className="icon-favorite_major" />
									<i className="icon-favorite_major" />
								</div>
								<div className="content">
									<h4 className="text mb-24">
										"We sincerely appreciate the outstanding support and guidance your team
										provided. Special thanks to Susan and Vaibhav for their dedication
									</h4>
									<div className="bot">
										<div className="info">
											<h6 className="title ">
												<Link href="/therapists-details">John Smith</Link>
											</h6>
											<span className="fw-5">//</span>
											<p> CEO THEMES FLAT</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="wg-testimonial  style-text-center style-full ">
								<div className="rating">
									<i className="icon-favorite_major" />
									<i className="icon-favorite_major" />
									<i className="icon-favorite_major" />
									<i className="icon-favorite_major" />
									<i className="icon-favorite_major" />
								</div>
								<div className="content">
									<h4 className="text mb-24">
										"We sincerely appreciate the outstanding support and guidance your team
										provided. Special thanks to Susan and Vaibhav for their dedication
									</h4>
									<div className="bot">
										<div className="info">
											<h6 className="title ">
												<Link href="/therapists-details">John Smith</Link>
											</h6>
											<span className="fw-5">//</span>
											<p> CEO THEMES FLAT</p>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</div>
				</Swiper>
				<div className="swiper-pagination pagination-testimonial-1">
				</div>
			</section>


		</>

	)
}

