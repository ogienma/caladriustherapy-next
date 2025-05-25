import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function OurProduct() {

	return (
		<>

			<Layout breadcrumbTitle="Shops">
				{/* section-product */}
				<section className="section-product">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="wg-filter">
									<div className="show">
										<p><span>129</span> Products Recommended for You</p>
									</div>
									<div className="grop-filter">
										<div className="item">
											<div className="text-2 tag">Filters by:</div>
											<select className="nice-select">
												<option className="option selected">
													<div className="content ">
														<span>Trauma 1</span>
													</div>
												</option>
												<option className="option ">
													<div className="content ">
														<span>Trauma 2</span>
													</div>
												</option>
												<option className="option ">
													<div className="content">
														<span>Trauma 3</span>
													</div>
												</option>
												<option className="option ">
													<div className="content">
														<span>Trauma 4</span>
													</div>
												</option>
												<option className="option ">
													<div className="content">
														<span>Trauma 5</span>
													</div>
												</option>
											</select>
										</div>
										<div className="item">
											<div className="text-2">Sort by:</div>
											<select className="nice-select">
												<option className="option selected">
													<div className="content ">
														<span>Best Selling</span>
													</div>
												</option>
												<option className="option ">
													<div className="content ">
														<span>Sale Off</span>
													</div>
												</option>
												<option className="option ">
													<div className="content">
														<span>New</span>
													</div>
												</option>
											</select>
										</div>
									</div>
								</div>
								<div className="grid-layout-4">
									<div className="product-item hover-img  ">
										<div className="image-wrap">
											<Link href="/product-details">
												<img className="lazyload" data-src="/images/section/product-item-1.jpg" src="/images/section/product-item-1.jpg" alt="healingy" />
											</Link>
											<div className="box-tags-item">
												<Link href="/#" className="item text-2 sale">-32%</Link>
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
											<Link className="tf-btn  style-default btn-color-secondary pd-23" href="/shop-cart">
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
											<div className="name text-3 fw-6"><Link href="/product-details">Healing Water for
												the Soul</Link></div>
											<div className="price h6">$68.00 <span>$98.00</span></div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img className="lazyload" data-src="/images/section/product-item-2.jpg" src="/images/section/product-item-2.jpg" alt="healingy" />
											</Link>
											<div className="box-tags-item">
												<Link href="/#" className="item text-2 new"> NEW</Link>
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
											<Link className="tf-btn  style-default btn-color-secondary pd-23" href="/shop-cart">
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
											<div className="name text-3 fw-6"><Link href="/product-details">Royal Agarwood</Link>
											</div>
											<div className="price h6">$68.00 </div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img className="lazyload" data-src="/images/section/product-item-3.jpg" src="/images/section/product-item-3.jpg" alt="healingy" />
											</Link>
											<div className="box-tags-item">
												<Link href="/#" className="item text-2 new"> NEW</Link>
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
											<Link className="tf-btn  style-default btn-color-secondary pd-23" href="/shop-cart">
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
											<div className="name text-3 fw-6"><Link href="/product-details">All Water Has
												Perfect Memory</Link></div>
											<div className="price h6">$68.00 </div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img className="lazyload" data-src="/images/section/product-item-4.jpg" src="/images/section/product-item-4.jpg" alt="healingy" />
											</Link>
											<div className="box-tags-item">
												<Link href="/#" className="item text-2 sale">-32%</Link>
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
											<Link className="tf-btn  style-default btn-color-secondary pd-23" href="/shop-cart">
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
											<div className="name text-3 fw-6"><Link href="/product-details">Tea Forte Loose Tea
												Canister</Link></div>
											<div className="price h6">$68.00 <span>$98.00</span></div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img className="lazyload" data-src="/images/section/product-item-5.jpg" src="/images/section/product-item-5.jpg" alt="healingy" />
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
											<Link className="tf-btn  style-default btn-color-secondary pd-23" href="/shop-cart">
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
											<div className="name text-3 fw-6"><Link href="/product-details">Lavender, Marjoram
												&amp; Clary Sage</Link></div>
											<div className="price h6">$68.00 </div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img className="lazyload" data-src="/images/section/product-item-6.jpg" src="/images/section/product-item-6.jpg" alt="healingy" />
											</Link>
											<div className="box-tags-item">
												<Link href="/#" className="item text-2 new"> NEW</Link>
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
											<Link className="tf-btn  style-default btn-color-secondary pd-23" href="/shop-cart">
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
											<div className="name text-3 fw-6"><Link href="/product-details">Wick Tin
												Candle-2</Link></div>
											<div className="price h6">$68.00 </div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img className="lazyload" data-src="/images/section/product-item-7.jpg" src="/images/section/product-item-7.jpg" alt="healingy" />
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
											<Link className="tf-btn  style-default btn-color-secondary pd-23" href="/shop-cart">
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
											<div className="name text-3 fw-6"><Link href="/product-details">Bath Bomb Box -
												PEACH-1</Link></div>
											<div className="price h6">$68.00</div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img className="lazyload" data-src="/images/section/product-item-8.jpg" src="/images/section/product-item-8.jpg" alt="healingy" />
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
											<Link className="tf-btn  style-default btn-color-secondary pd-23" href="/shop-cart">
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
											<div className="name text-3 fw-6"><Link href="/product-details">Scented Candle
												MAEVA-2</Link></div>
											<div className="price h6">$68.00 <span>$98.00</span></div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img className="lazyload" data-src="/images/section/product-item-9.jpg" src="/images/section/product-item-9.jpg" alt="healingy" />
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
											<Link className="tf-btn  style-default btn-color-secondary pd-23" href="/shop-cart">
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
											<div className="name text-3 fw-6"><Link href="/product-details">Journey of
												souls-1</Link></div>
											<div className="price h6">$68.00</div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img className="lazyload" data-src="/images/section/product-item-10.jpg" src="/images/section/product-item-10.jpg" alt="healingy" />
											</Link>
											<div className="box-tags-item">
												<Link href="/#" className="item text-2 sale">-32%</Link>
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
											<Link className="tf-btn  style-default btn-color-secondary pd-23" href="/shop-cart">
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
											<div className="name text-3 fw-6"><Link href="/product-details">Lavender, Marjoram
												&amp; Clary Sage</Link></div>
											<div className="price h6">$68.00 <span>$98.00</span></div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img className="lazyload" data-src="/images/section/product-item-11.jpg" src="/images/section/product-item-11.jpg" alt="healingy" />
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
											<Link className="tf-btn  style-default btn-color-secondary pd-23" href="/shop-cart">
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
											<div className="name text-3 fw-6"><Link href="/product-details">Tea Forte Loose Tea
												Canister</Link></div>
											<div className="price h6">$68.00 </div>
										</div>
									</div>
									<div className="product-item hover-img">
										<div className="image-wrap">
											<Link href="/product-details">
												<img className="lazyload" data-src="/images/section/product-item-12.jpg" src="/images/section/product-item-12.jpg" alt="healingy" />
											</Link>
											<div className="box-tags-item">
												<Link href="/#" className="item text-2 new"> NEW</Link>
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
											<Link className="tf-btn  style-default btn-color-secondary pd-23" href="/shop-cart">
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
											<div className="name text-3 fw-6"><Link href="/product-details">Motivational &amp;
												Inspirational Mini</Link></div>
											<div className="price h6">$68.00 </div>
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
				</section> {/* /.section-product */}

			</Layout>
		</>
	)
}