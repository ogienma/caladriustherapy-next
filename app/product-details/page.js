'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function ProductDetails() {
	const [quantity, setQuantity] = useState(1)
	const basePrice = 79.99
	const [totalPrice, setTotalPrice] = useState(basePrice)
	const [isTab, setIsTab] = useState(1)
	const handleTab = (i) => {
		setIsTab(i)
	}
	return (
		<>
			<Layout breadcrumbTitle="Shops">
				{/* .shop-details */}
				<div className="shop-details section-image-zoom">
					<div className="tf-container">
						<div className="row">
							<div className="col-md-6">
								<div className="image-wrap">
									<img
										className="tf-image-zoom lazyload"
										data-zoom="images/section/product-details.jpg"
										data-src="/images/section/product-details.jpg"
										src="/images/section/product-details.jpg"
										alt="healingy"
									/>
								</div>
							</div>
							<div className="col-md-6">
								<div className="tf-zoom-main" />
								<div className="wrap-porduct-info">
									<div className="content-inner">
										<div className="product-content">
											<h4 className="product-title"> MAEVA-2 Premium Aromatherapy Scented Candle For Relaxation</h4>
											<div className="wrap-status">
												<div className="wrap-rating-product">
													<div className="rating">
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
													</div>
													<span>(1.234)</span>
												</div>
												<div className="sold">
													<i className="icon-Lightning" />
													<p className="text-2">18&nbsp;sold in last&nbsp;32&nbsp;hours</p>
												</div>
											</div>
											<div className="price fw-6 h5">
												<span className="price-on-sale">${basePrice.toFixed(2)}</span>
												<span className="original-price">$98.00</span>
												<div className="box-tags-item">
													<Link href="/#" className="item text-2 sale">
														-25%
													</Link>
												</div>
											</div>
											<p className="description">
												Made from high-quality, eco-friendly soy wax, the MAEVA-2 candle burns cleanly and evenly,
												ensuring a long-lasting scent experience. Its elegant design adds a touch of sophistication to
												your home décor, making it perfect for unwinding after a busy day or setting a peaceful
												ambiance for meditation and self-care rituals.
											</p>
										</div>
									</div>
									<div className="tf-product-quantity">
										<div className="text-3 quantity-title">Quantity: </div>
										<div className="wg-quantity">
											<span
												className="btn-quantity btn-decrease"
												onClick={() => {
													if (quantity > 1) {
														setQuantity(quantity - 1)
														setTotalPrice((quantity - 1) * basePrice)
													}
												}}
											>
												-
											</span>
											<input type="text" className="quantity-product" name="number" value={quantity} readOnly />
											<span
												className="btn-quantity btn-increase"
												onClick={() => {
													setQuantity(quantity + 1)
													setTotalPrice((quantity + 1) * basePrice)
												}}
											>
												+
											</span>
										</div>
									</div>
									<div className="tf-product-buy-button">
										<form className>
											<Link
												href="/javascript:void(0);"
												className="tf-btn style-default btn-color-primary text-color-white pd-40 btn-add-to-cart"
											>
												<span>Add to cart -&nbsp;</span>
												<span className="tf-qty-price total-price">${totalPrice.toFixed(2)}</span>
											</Link>
											<Link
												href="/javascript:void(0);"
												className="tf-product-btn-wishlist hover-tooltip   tf-action-btns"
											>
												<span className="icon icon-GitDiff" />
												<span className="tooltip">Add to Compare</span>
												<span className="icon icon-check" />
											</Link>
											<Link
												href="/javascript:void(0);"
												className="tf-product-btn-wishlist hover-tooltip  wishlist tf-action-btns"
											>
												<span className="icon icon-Wishlist" />
												<span className="tooltip">Add to Wishlist</span>
												<span className="icon icon-trashcan" />
											</Link>
											<div className="w-full ">
												<Link href="/#" className="btns-full tf-btn style-default btn-color-secondary pd-40">
													<span>Buy it now </span>
												</Link>
											</div>
										</form>
									</div>
									<div className="tf-product-help">
										<ul className="tf-product-extra-link">
											<li>
												<Link href="/#">
													<i className="icon-Truck" /> Delivery &amp; Return
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-Question" />
													Ask A Question
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-ShareNetwork" />
													Share
												</Link>
											</li>
										</ul>
										<div className="tf-product-time ">
											<i className="icon-Timer" />
											<p className="text-2">
												Estimated Delivery: <span> 12-26 days</span> (International),<span> 3-6 days</span> (United
												States)
											</p>
										</div>
										<div className="tf-product-return ">
											<i className="icon-ArrowClockwise" />
											<p className="text-2">
												Return within <span>45 days</span> of purchase. Duties &amp; taxes are non-refundable.
											</p>
										</div>
										<div className="tf-product-view ">
											<i className="icon-MapPin" />
											<p className="text-2">View Store Information</p>
										</div>
									</div>
									<div className="more-infor">
										<ul>
											<li>
												SKU:<span>&nbsp; 53453412</span>
											</li>
											<li>
												Vendor: <span>Healingy</span>
											</li>
											<li>
												Available:<span>Instock</span>
											</li>
											<li>
												Categories: <span>Book</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* /.shop-details */}
				{/* .section-review*/}
				<section className="section-review tf-spacing-6">
					<div className="tf-container">
						<div className="row justify-center">
							<div className="col-lg-10">
								<div className="widget-tabs style-2">
									<ul className="widget-menu-tab overflow-x-auto">
										<li className={`item-title h6 ${isTab === 1 ? "active" : ""}`} onClick={() => handleTab(1)}>Description</li>
										<li className={`item-title h6 ${isTab === 2 ? "active" : ""}`} onClick={() => handleTab(2)}>Review</li>
									</ul>
									<div className="widget-content-tab">
										<div className={`widget-content-inner`} style={{ display: `${isTab == 1 ? "block" : "none"}` }}>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
												labore et dolore magna aliqua. Ut elit tellus, luctus nec ullamcorper mattis. Maecenas laoreet
												posuere ipsum, nec faucibus est. Sed pretium vulputate ante ut venenatis. Nam in purus ut
												mauris pharetra imperdiet eu vitae felis. Aenean iaculis risus mi, non hendrerit est finibus
												lobortis. Quisque in euismod diam. In facilisis odio lacus, at dignissim augue egestas porta.
											</p>
										</div>
										<div className={`widget-content-inner`} style={{ display: `${isTab == 2 ? "block" : "none"}` }}>
											<div className="wg-rating">
												<div className="rate">
													<div className="number">4.8</div>
													<div className="rating">
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
														<i className="icon-favorite_major" />
													</div>
													<p>(1,968 Ratings)</p>
												</div>
												<div className="star">
													<div className="wg-progress">
														<p className="number">5</p>
														<i className="icon-favorite_major" />
														<div
															className="progress"
															role="progressbar"
															aria-label="Basic example"
															aria-valuenow={60}
															aria-valuemin={0}
															aria-valuemax={100}
														>
															<div className="progress-bar " style={{ width: "60%" }} />
														</div>
														<p className="fw-6 text2">60%</p>
													</div>
													<div className="wg-progress">
														<p className="number">4</p>
														<i className="icon-favorite_major" />
														<div
															className="progress"
															role="progressbar"
															aria-label="Basic example"
															aria-valuenow={60}
															aria-valuemin={0}
															aria-valuemax={100}
														>
															<div className="progress-bar " style={{ width: "20%" }} />
														</div>
														<p className="fw-6 text2">20%</p>
													</div>
													<div className="wg-progress">
														<p className="number">3</p>
														<i className="icon-favorite_major" />
														<div
															className="progress"
															role="progressbar"
															aria-label="Basic example"
															aria-valuenow={60}
															aria-valuemin={0}
															aria-valuemax={100}
														>
															<div className="progress-bar " style={{ width: "10%" }} />
														</div>
														<p className="fw-6 text2">10%</p>
													</div>
													<div className="wg-progress">
														<p className="number">2</p>
														<i className="icon-favorite_major" />
														<div
															className="progress"
															role="progressbar"
															aria-label="Basic example"
															aria-valuenow={60}
															aria-valuemin={0}
															aria-valuemax={100}
														>
															<div className="progress-bar " style={{ width: "7%" }} />
														</div>
														<p className="fw-6 text2">7%</p>
													</div>
													<div className="wg-progress">
														<p className="number">1</p>
														<i className="icon-favorite_major" />
														<div
															className="progress"
															role="progressbar"
															aria-label="Basic example"
															aria-valuenow={60}
															aria-valuemin={0}
															aria-valuemax={100}
														>
															<div className="progress-bar " style={{ width: "3%" }} />
														</div>
														<p className="fw-6 text2">3%</p>
													</div>
												</div>
												<Link className="tf-btn style-default btn-color-white has-boder pd-40" href="/#comment">
													<span>Write a review</span>
												</Link>
											</div>
											<div className="comment-list-wrap">
												<h5 className="title ">Customer reviews</h5>
												<ul className="comment-list">
													<li>
														<div className="comment-blog">
															<div className="author">
																<div className="avatar">
																	<img src="/images/avatar/avatar-1.jpg" alt="healingy" />
																</div>
																<div className="content">
																	<ul className="meta">
																		<li className="name text-3 fw-6">
																			{" "}
																			<Link href="/#">Guy Hawkins</Link>
																		</li>
																		<li className="rating">
																			<i className="icon-favorite_major" />
																			<i className="icon-favorite_major" />
																			<i className="icon-favorite_major" />
																			<i className="icon-favorite_major" />
																			<i className="icon-favorite_major" />
																		</li>
																	</ul>
																	<p className="time text-2">1 days ago</p>
																</div>
															</div>
															<p className="comments">
																Lorem ipsum dolor sit amet consectetur. Cursus nunc pharetra arcu quam turpis risus
																amet turpis. Facilisis elementum tincidunt pellentesque sed rutrum enim.
															</p>
															<Link href="/#" className="comment-reply">
																<div className="icon">
																	<svg
																		width={20}
																		height={20}
																		viewBox="0 0 20 20"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z"
																			stroke="#3C210E"
																			strokeLinecap="round"
																			strokeLinejoin="round"
																		/>
																	</svg>
																</div>
																Reply
															</Link>
														</div>
														<ul className="children">
															<li>
																<div className="comment-blog">
																	<div className="author">
																		<div className="avatar">
																			<img src="/images/avatar/avatar-2.jpg" alt="healingy" />
																		</div>
																		<div className="content">
																			<ul className="meta">
																				<li className="name text-3 fw-6">
																					<Link href="/#">Tony Nguyen</Link>
																				</li>
																				<li className="rating">
																					<i className="icon-favorite_major" />
																					<i className="icon-favorite_major" />
																					<i className="icon-favorite_major" />
																					<i className="icon-favorite_major" />
																					<i className="icon-favorite_major" />
																				</li>
																			</ul>
																			<p className="time text-2">2 days ago</p>
																		</div>
																	</div>
																	<p className="comments">
																		Lorem ipsum dolor sit amet consectetur. Cursus nunc pharetra arcu quam turpis
																		risus amet turpis. Facilisis elementum tincidunt pellentesque sed rutrum enim.
																	</p>
																	<Link href="/#" className="comment-reply">
																		<div className="icon">
																			<svg
																				width={20}
																				height={20}
																				viewBox="0 0 20 20"
																				fill="none"
																				xmlns="http://www.w3.org/2000/svg"
																			>
																				<path
																					d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z"
																					stroke="#3C210E"
																					strokeLinecap="round"
																					strokeLinejoin="round"
																				/>
																			</svg>
																		</div>
																		Reply
																	</Link>
																</div>
															</li>
														</ul>
													</li>
													<li>
														<div className="comment-blog " id="comment">
															<div className="author">
																<div className="avatar">
																	<img src="/images/avatar/avatar-3.jpg" alt="healingy" />
																</div>
																<div className="content">
																	<ul className="meta">
																		<li className="name text-3 fw-6">
																			<Link href="/#">John Smit</Link>
																		</li>
																		<li className="rating">
																			<i className="icon-favorite_major" />
																			<i className="icon-favorite_major" />
																			<i className="icon-favorite_major" />
																			<i className="icon-favorite_major" />
																			<i className="icon-favorite_major" />
																		</li>
																	</ul>
																	<p className="time text-2">3 days ago</p>
																</div>
															</div>
															<p className="comments">
																Lorem ipsum dolor sit amet consectetur. Cursus nunc pharetra arcu quam turpis risus
																amet turpis. Facilisis elementum tincidunt pellentesque sed rutrum enim.
															</p>
															<Link href="/#" className="comment-reply">
																<div className="icon">
																	<svg
																		width={20}
																		height={20}
																		viewBox="0 0 20 20"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<path
																			d="M17.5 12.5C17.5 12.942 17.3244 13.366 17.0118 13.6785C16.6993 13.9911 16.2754 14.1667 15.8333 14.1667H5.83333L2.5 17.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V12.5Z"
																			stroke="#3C210E"
																			strokeLinecap="round"
																			strokeLinejoin="round"
																		/>
																	</svg>
																</div>
																Reply
															</Link>
														</div>
													</li>
												</ul>
											</div>
											<div className="box-send style-2">
												<h5 className="title fw-7">Leave A comment</h5>
												<form className="form-add-review">
													<div className="cols">
														<fieldset className="name">
															<label htmlFor="name">First Name</label>
															<input
																type="text"
																className="tf-input "
																placeholder="Your Name*"
																tabIndex={2}
																aria-required="true"
																id="name"
																required
															/>
														</fieldset>
														<fieldset className="email">
															<label htmlFor="email">Email Address</label>
															<input
																type="email"
																className="tf-input "
																id="email"
																placeholder="Your Email*"
																tabIndex={2}
																aria-required="true"
																required
															/>
														</fieldset>
													</div>
													<fieldset className="message">
														<label htmlFor="note">Note</label>
														<textarea
															className="tf-input"
															id="note"
															name="message"
															rows={4}
															placeholder="Write note..."
															tabIndex={4}
															aria-required="true"
															required
														/>
													</fieldset>
													<div className="checkbox-item">
														<label>
															<span className="text-2 ">
																Save my name, email, and website in this browser for the next time I comment.
															</span>
															<input type="checkbox" />
															<span className="btn-checkbox" />
														</label>
													</div>
													<button className="tf-btn  style-default btn-color-secondary pd-40" type="submit">
														<span>Submit Reviews</span>
													</button>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>{" "}
				{/* /.section-review */}
				{/* .section-related-product */}
				<section className="section-related-product">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<h4 className="text-center">Related Products</h4>
								<div className="grid-layout-4 gap-30">
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img
													className="lazyload"
													data-src="/images/section/product-item-3.jpg"
													src="/images/section/product-item-3.jpg"
													alt="healingy"
												/>
											</Link>
											<div className="box-tags-item">
												<Link href="/#" className="item text-2 new">
													{" "}
													NEW
												</Link>
											</div>
											<div className="list-product-btn">
												<div className="box-wishlist btn-icon tf-action-btns hover-tooltip">
													<i className="icon-Wishlist" />
													<span className="tooltip">Add to Wishlist</span>
												</div>
												<div className="box-compare btn-icon hover-tooltip">
													<i className="icon-GitDiff" />
													<span className="tooltip">Add to Compare</span>
												</div>
												<div className="box-view btn-icon hover-tooltip">
													<i className="icon-view" />
													<span className="tooltip">view</span>
												</div>
											</div>
											<Link className="tf-btn  style-default btn-color-secondary pd-26" href="/shop-cart">
												<span>Add To Cart</span>
											</Link>
										</div>
										<div className="content">
											<div className="wrap-rating-product">
												<div className="rating">
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
												</div>
												<span>(1.234)</span>
											</div>
											<div className="name text-3 fw-6">
												<Link href="/product-details">All Water Has Perfect Memory</Link>
											</div>
											<div className="price h6">$68.00 </div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img
													className="lazyload"
													data-src="/images/section/product-item-4.jpg"
													src="/images/section/product-item-4.jpg"
													alt="healingy"
												/>
											</Link>
											<div className="box-tags-item">
												<Link href="/#" className="item text-2 sale">
													-32%
												</Link>
											</div>
											<div className="list-product-btn">
												<div className="box-wishlist btn-icon tf-action-btns hover-tooltip">
													<i className="icon-Wishlist" />
													<span className="tooltip">Add to Wishlist</span>
												</div>
												<div className="box-compare btn-icon hover-tooltip">
													<i className="icon-GitDiff" />
													<span className="tooltip">Add to Compare</span>
												</div>
												<div className="box-view btn-icon hover-tooltip">
													<i className="icon-view" />
													<span className="tooltip">view</span>
												</div>
											</div>
											<Link className="tf-btn  style-default btn-color-secondary pd-26" href="/shop-cart">
												<span>Add To Cart</span>
											</Link>
										</div>
										<div className="content">
											<div className="wrap-rating-product">
												<div className="rating">
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
												</div>
												<span>(1.234)</span>
											</div>
											<div className="name text-3 fw-6">
												<Link href="/product-details">Tea Forte Loose Tea Canister</Link>
											</div>
											<div className="price h6">
												$68.00 <span>$98.00</span>
											</div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img
													className="lazyload"
													data-src="/images/section/product-item-8.jpg"
													src="/images/section/product-item-8.jpg"
													alt="healingy"
												/>
											</Link>
											<div className="list-product-btn">
												<div className="box-wishlist btn-icon tf-action-btns hover-tooltip">
													<i className="icon-Wishlist" />
													<span className="tooltip">Add to Wishlist</span>
												</div>
												<div className="box-compare btn-icon hover-tooltip">
													<i className="icon-GitDiff" />
													<span className="tooltip">Add to Compare</span>
												</div>
												<div className="box-view btn-icon hover-tooltip">
													<i className="icon-view" />
													<span className="tooltip">view</span>
												</div>
											</div>
											<Link className="tf-btn  style-default btn-color-secondary pd-26" href="/shop-cart">
												<span>Add To Cart</span>
											</Link>
										</div>
										<div className="content">
											<div className="wrap-rating-product">
												<div className="rating">
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
												</div>
												<span>(1.234)</span>
											</div>
											<div className="name text-3 fw-6">
												<Link href="/product-details">Scented Candle MAEVA-2</Link>
											</div>
											<div className="price h6">$68.00</div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img
													className="lazyload"
													data-src="/images/section/product-item-10.jpg"
													src="/images/section/product-item-10.jpg"
													alt="healingy"
												/>
											</Link>
											<div className="box-tags-item">
												<Link href="/#" className="item text-2 sale">
													-32%
												</Link>
											</div>
											<div className="list-product-btn">
												<div className="box-wishlist btn-icon tf-action-btns hover-tooltip">
													<i className="icon-Wishlist" />
													<span className="tooltip">Add to Wishlist</span>
												</div>
												<div className="box-compare btn-icon hover-tooltip">
													<i className="icon-GitDiff" />
													<span className="tooltip">Add to Compare</span>
												</div>
												<div className="box-view btn-icon hover-tooltip">
													<i className="icon-view" />
													<span className="tooltip">view</span>
												</div>
											</div>
											<Link className="tf-btn  style-default btn-color-secondary pd-26" href="/shop-cart">
												<span>Add To Cart</span>
											</Link>
										</div>
										<div className="content">
											<div className="wrap-rating-product">
												<div className="rating">
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
													<i className="icon-favorite_major" />
												</div>
												<span>(1.234)</span>
											</div>
											<div className="name text-3 fw-6">
												<Link href="/product-details">Lavender, Marjoram &amp; Clary Sage</Link>
											</div>
											<div className="price h6">
												$68.00 <span>$98.00</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}

