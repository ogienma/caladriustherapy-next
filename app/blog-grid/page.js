import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogGrid() {

	return (
		<>

			<Layout breadcrumbTitle="Blogs" mainContentCls="main-content page-blog">
				<div className="main-content page-blog">
					{/* .section-blog-grid */}
					<section className="section-blog-grid">
						<div className="tf-container">
							<div className="row">
								<div className="col-12">
									<div className="grid-layout-3">
										<div className="article-blog-item  hover-img ">
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
												<p className="sub">Therapy</p>
												<h5 className="title"><Link href="/blog-details">Mindfulness For Better Mental
													Health: Simple Practices for Daily Peace
												</Link>
												</h5>
												<p>Learn how mindfulness techniques can reduce stress and improve your mental
													well-being daily.</p>
											</div>
										</div>
										<div className="article-blog-item  hover-img ">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-2.jpg" src="/images/blog/blog-2.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">19</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub">Emotional Healing</p>
												<h5 className="title"><Link href="/blog-details">Strengthening Relationships
													Through Communication
												</Link>
												</h5>
												<p>Explore how family therapy fosters better communication, resolves conflicts,
													and builds healthier family dynamics.</p>
											</div>
										</div>
										<div className="article-blog-item  hover-img ">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-3.jpg" src="/images/blog/blog-3.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">14</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub">Wellness</p>
												<h5 className="title"><Link href="/blog-details">Self-Care for Emotional
													Well-being: Key Steps to Feeling Balanced
												</Link>
												</h5>
												<p>Explore how CBT techniques help manage stress and build resilience for a
													calmer life.</p>
											</div>
										</div>
										<div className="article-blog-item  hover-img ">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-4.jpg" src="/images/blog/blog-4.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">18</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub">Wellness</p>
												<h5 className="title"><Link href="/blog-details">How Therapy Helps with Trauma:
													Pathways to Long-Term Healing
												</Link>
												</h5>
												<p>Find out how therapy can guide you through trauma recovery and foster
													long-term healing.</p>
											</div>
										</div>
										<div className="article-blog-item  hover-img ">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-5.jpg" src="/images/blog/blog-5.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">24</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub">Stress Management</p>
												<h5 className="title"><Link href="/blog-details">The Benefits of Cognitive
													Behavioral Therapy for Anxiety Relief
												</Link>
												</h5>
												<p>Discover how CBT helps individuals identify and change negative thought
													patterns to manage anxiety effectively.</p>
											</div>
										</div>
										<div className="article-blog-item  hover-img ">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-6.jpg" src="/images/blog/blog-6.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">25</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub">Anxiety Relief</p>
												<h5 className="title"><Link href="/blog-details">How Therapy Can Help with
													Overcoming Trauma
												</Link>
												</h5>
												<p>Understand the role of therapy in helping individuals process traumatic
													experiences and regain...</p>
											</div>
										</div>
										<div className="article-blog-item  hover-img ">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-7.jpg" src="/images/blog/blog-7.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">27</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub">Personal Growth</p>
												<h5 className="title"><Link href="/blog-details">The Role of Therapy in Managing
													Stress and Burnout
												</Link>
												</h5>
												<p>Learn how therapy can equip you with strategies to manage stress and avoid
													burnout in your personal...</p>
											</div>
										</div>
										<div className="article-blog-item  hover-img ">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-8.jpg" src="/images/blog/blog-8.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">28</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub">Trauma Recovery</p>
												<h5 className="title"><Link href="/blog-details">Individual Counseling: A
													Personalized Approach to Mental Wellness
												</Link>
												</h5>
												<p>Find out how individual counseling provides tailored solutions to help you
													achieve mental clarity...</p>
											</div>
										</div>
										<div className="article-blog-item  hover-img ">
											<div className="image-wrap">
												<Link href="/blog-details">
													<img className="lazyload" data-src="/images/blog/blog-1.jpg" src="/images/blog/blog-1.jpg" alt="healingy" />
												</Link>
												<div className="date-time">
													<div className="content">
														<p className="entry-day ">22</p>
														<p className="entry-month fw-book">SEP</p>
													</div>
												</div>
											</div>
											<div className="content">
												<p className="sub">Mental Wellness</p>
												<h5 className="title"><Link href="/blog-details">Mindfulness For Better Mental
													Health: Simple Practices for Daily Peace
												</Link>
												</h5>
												<p>Learn how mindfulness techniques can reduce stress and improve your mental
													well-being daily.</p>
											</div>
										</div>
									</div>
									<ul className="wg-pagination">
										<li className="active">1</li>
										<li><Link href="/#">2</Link></li>
										<li><Link href="/#">3</Link></li>
										<li><Link href="/#"><i className="icon-CaretRight" /></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</section>{/* ./section-blog-grid */}
				</div>

			</Layout>
		</>
	)
}