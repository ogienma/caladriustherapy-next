'use client'
import { sliderLayout3 } from "@/utils/swiperOptions"
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"

export default function News2() {
	return (
		<>


			{/* .section-news */}
			<section className="section-news home-page-2 style-pagination tf-spacing-1">
				<div className="tf-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section ">
								<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
									Favourite Topics</p>
								<h3 className="wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">Healingy Blog &amp;
									Resources</h3>
								<p className="description text-1 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
									Your go-to source for mental health insights, tools, and
									advice.
								</p>
							</div>
							<Swiper {...sliderLayout3} className="swiper-container slider-layout-3">
								<div className="swiper-wrapper">
									<SwiperSlide>
										<div className="article-blog-item  hover-img  style-2 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/section/resources-2-1.jpg" src="/images/section/resources-2-1.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">12</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub"><Link href="/#">Therapy</Link></p>
												<h5 className="title"><Link href="/blog-details">Mindfulness For Better
													Mental
													Health
												</Link>
												</h5>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="article-blog-item  hover-img  style-2 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/section/resources-2-2.jpg" src="/images/section/resources-2-2.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">14</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub"><Link href="/#">Wellness</Link></p>
												<h5 className="title"><Link href="/blog-details">Self-Care for Emotional
													Well-being
												</Link>
												</h5>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="article-blog-item  hover-img  style-2 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/section/resources-2-3.jpg" src="/images/section/resources-2-3.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">18</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub"><Link href="/#">Therapy</Link></p>
												<h5 className="title"><Link href="/blog-details">Cognitive Behavioral
													Therapy for
													Stress
												</Link>
												</h5>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="article-blog-item  hover-img  style-2 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/section/resources-2-1.jpg" src="/images/section/resources-2-1.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">12</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub"><Link href="/#">Therapy</Link></p>
												<h5 className="title"><Link href="/blog-details">Mindfulness For Better
													Mental
													Health
												</Link>
												</h5>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="article-blog-item  hover-img  style-2 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/section/resources-2-2.jpg" src="/images/section/resources-2-2.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">14</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub"><Link href="/#">Wellness</Link></p>
												<h5 className="title"><Link href="/blog-details">Self-Care for Emotional
													Well-being
												</Link>
												</h5>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="article-blog-item  hover-img  style-2 wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/section/resources-2-3.jpg" src="/images/section/resources-2-3.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">18</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub"><Link href="/#">Therapy</Link></p>
												<h5 className="title"><Link href="/blog-details">Cognitive Behavioral
													Therapy for
													Stress
												</Link>
												</h5>
											</div>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
							<div className="swiper-pagination pagination-layout">
							</div>
						</div>
					</div>
				</div>
			</section>{/* /.section-news*/}

		</>

	)
}

