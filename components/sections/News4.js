import Link from 'next/link'

export default function News4() {
	return (
		<>


			<section className="section-news page-home-4 tf-spacing-1">
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
						</div>
						<div className="col-lg-6">
							<div className="article-blog-item  hover-img  wow fadeInLeft" data-wow-duration={1000} data-wow-delay="0s">
								<div className="image-wrap">
									<Link href="/blog-details">
										<img className="lazyload" data-src="/images/section/section-news-1.jpg" src="/images/section/section-news-1.jpg" alt="healingy" />
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
									<h4 className="title "><Link href="/blog-details">The Role Of Family Therapy
										Strengthening Relationships &amp; Communication
									</Link>
									</h4>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="list-post">
								<div className="box-listings hover-img wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
									<div className="image-wrap">
										<Link href="/blog-details">
											<img src="/images/blog/blog-details-list-1.jpg" alt="healingy" />
										</Link>
									</div>
									<div className="content">
										<ul className="meta">
											<li className="text-2">October 17, 2024</li>
											<li className="text-2 "><Link href="/#">Therapy</Link></li>
										</ul>
										<div className="title h5 fw-5  ">
											<Link href="/blog-details" className="line-clamp-2">How Cognitive Behavioral
												Therapy <br />Can Transform Your Life</Link>
										</div>
									</div>
								</div>
								<div className="box-listings hover-img wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
									<div className="image-wrap">
										<Link href="/blog-details">
											<img src="/images/blog/blog-details-list-2.jpg" alt="healingy" />
										</Link>
									</div>
									<div className="content">
										<ul className="meta">
											<li>October 19, 2024</li>
											<li><Link href="/blog-details">Wellness</Link></li>
										</ul>
										<div className="title h5 fw-5  ">
											<Link href="/#" className="line-clamp-2">Effective Strategies for Managing <br />
												Anxiety and Building
												Resilience</Link>
										</div>
									</div>
								</div>
								<div className="box-listings hover-img wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
									<div className="image-wrap">
										<Link href="/blog-details">
											<img src="/images/blog/blog-details-list-3.jpg" alt="healingy" />
										</Link>
									</div>
									<div className="content">
										<ul className="meta">
											<li>October 22, 2024</li>
											<li><Link href="/#">Therapy</Link></li>
										</ul>
										<div className="title h5 fw-5  ">
											<Link href="/blog-details" className="line-clamp-2">Understanding Trauma: How
												Therapy <br />Can Help You Heal</Link>
										</div>
									</div>
								</div>
								<div className="box-listings hover-img wow fadeInRight" data-wow-duration={1000} data-wow-delay="0s">
									<div className="image-wrap">
										<Link href="/blog-details">
											<img src="/images/blog/blog-details-list-4.jpg" alt="healingy" />
										</Link>
									</div>
									<div className="content">
										<ul className="meta">
											<li>October 26, 2024</li>
											<li><Link href="/#">Wellness</Link></li>
										</ul>
										<div className="title h5 fw-5">
											<Link href="/blog-details" className="line-clamp-2">Techniques for Everyday
												Stress <br /> Relief</Link>
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

