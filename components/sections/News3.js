'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import Layout from "@/components/layout/Layout"
import Link from 'next/link'
import { sliderLayout3 } from "@/utils/swiperOptions"

export default function News3() {
	return (
		<>

			<section className="section-news tf-spacing-1 style-pagination">
				<div className="tf-container">
					<div className="row">
						<div className="col-12">
							<div className="heading-section ">
								<p className="text-2 sub wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s"><Link href="/#">Favourite Topics</Link></p>
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
										<div className="article-blog-item  hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-1.jpg" src="/images/blog/blog-1.jpg" alt="healingy" />
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
													Health: Simple Practices for Daily Peace
												</Link>
												</h5>
												<p>Learn how mindfulness techniques can reduce stress and improve your
													mental
													well-being daily.</p>
											</div>
											<Link href="/#" className="tf-btn-link">
												<span data-text="Read More">Read More</span>
												<i className="icon-ArrowRight" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="article-blog-item  hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-3.jpg" src="/images/blog/blog-3.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">12</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub"><Link href="/#">Wellness</Link></p>
												<h5 className="title"><Link href="/blog-details">Self-Care for Emotional
													Well-being: Key Steps to Feeling Balanced
												</Link>
												</h5>
												<p>Explore how CBT techniques help manage stress and build resilience
													for a
													calmer life.</p>
											</div>
											<Link href="/#" className="tf-btn-link">
												<span data-text="Read More">Read More</span>
												<i className="icon-ArrowRight" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="article-blog-item  hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-4.jpg" src="/images/blog/blog-4.jpg" alt="healingy" />
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
												<h5 className="title"><Link href="/blog-details">How Therapy Helps with
													Trauma:
													Pathways to Long-Term Healing
												</Link>
												</h5>
												<p>Find out how therapy can guide you through trauma recovery and foster
													long-term healing.</p>
											</div>
											<Link href="/#" className="tf-btn-link">
												<span data-text="Read More">Read More</span>
												<i className="icon-ArrowRight" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="article-blog-item  hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0s">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-1.jpg" src="/images/blog/blog-1.jpg" alt="healingy" />
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
													Health: Simple Practices for Daily Peace
												</Link>
												</h5>
												<p>Learn how mindfulness techniques can reduce stress and improve your
													mental
													well-being daily.</p>
											</div>
											<Link href="/#" className="tf-btn-link">
												<span data-text="Read More">Read More</span>
												<i className="icon-ArrowRight" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="article-blog-item  hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.1s">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-3.jpg" src="/images/blog/blog-3.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">12</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub"><Link href="/#">Wellness</Link></p>
												<h5 className="title"><Link href="/blog-details">Self-Care for Emotional
													Well-being: Key Steps to Feeling Balanced
												</Link>
												</h5>
												<p>Explore how CBT techniques help manage stress and build resilience
													for a
													calmer life.</p>
											</div>
											<Link href="/#" className="tf-btn-link">
												<span data-text="Read More">Read More</span>
												<i className="icon-ArrowRight" />
											</Link>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="article-blog-item  hover-img wow fadeInUp" data-wow-duration={1000} data-wow-delay="0.2s">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-4.jpg" src="/images/blog/blog-4.jpg" alt="healingy" />
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
												<h5 className="title"><Link href="/blog-details">How Therapy Helps with
													Trauma:
													Pathways to Long-Term Healing
												</Link>
												</h5>
												<p>Find out how therapy can guide you through trauma recovery and foster
													long-term healing.</p>
											</div>
											<Link href="/#" className="tf-btn-link">
												<span data-text="Read More">Read More</span>
												<i className="icon-ArrowRight" />
											</Link>
										</div>
									</SwiperSlide>
								</div>
							</Swiper>
							<div className="swiper-pagination pagination-layout">
							</div>
						</div>
					</div>
				</div>
			</section>


		</>

	)
}

