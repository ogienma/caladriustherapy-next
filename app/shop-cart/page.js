"use client"

import Countdown from "@/components/elements/Countdown"
import Layout from "@/components/layout/Layout"
import { useCart } from "@/utils/useCart"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function ShopCart() {
	const { cartItems, removeFromCart, updateQuantity, getTotalPrice, addToCart } = useCart()
	const [subtotal, setSubtotal] = useState(0)
	const [discount, setDiscount] = useState(0)
	const [shipping, setShipping] = useState(0)
	const [total, setTotal] = useState(0)

	useEffect(() => {
		const initialProducts = [
			{ id: 1, name: "Royal Agarwood", price: 60, quantity: 1, image: "/images/section/shop-cart-item-2.jpg" },
			{
				id: 2,
				name: "Wick Tin Candle for Relaxation",
				price: 40,
				quantity: 1,
				image: "/images/section/shop-cart-item-1.jpg",
			},
			{
				id: 3,
				name: "Lavender, Marjoram & Clary",
				price: 80,
				quantity: 1,
				image: "/images/section/shop-cart-item-3.jpg",
			},
		]

		if (cartItems.length === 0) {
			initialProducts.forEach((product) => addToCart(product))
		}

		const newSubtotal = getTotalPrice()
		setSubtotal(newSubtotal)
		setTotal(newSubtotal - discount + shipping)
	}, [cartItems, discount, shipping, getTotalPrice])

	const currentTime = new Date()

	const handlePriceChange = (id, increment) => {
		const updatedItems = cartItems.map((item) => {
			if (item.id === id) {
				const newPrice = Math.max(0, item.price + increment)
				return { ...item, price: newPrice }
			}
			return item
		})
		updateQuantity(id, updatedItems.find((item) => item.id === id).quantity)
	}

	const handleQuantityChange = (id, increment) => {
		const updatedItems = cartItems.map((item) => {
			if (item.id === id) {
				const newQuantity = Math.max(0, item.quantity + increment)
				return { ...item, quantity: newQuantity }
			}
			return item
		})
		updateQuantity(id, updatedItems.find((item) => item.id === id).quantity)
	}

	const handleItemClick = (id) => {
		console.log(`Clicked item with id: ${id}`)
		// Add any additional functionality for item click here
	}

	return (
		<Layout breadcrumbTitle="Cart">
			<section className="section-shop-cart shop-cart-wrap tf-spacing-3 pt-0 ">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-8">
							<div className="heading">
								<div className="time">
									<img src="/images/item/fire.png" alt="healingy" />
									<p className="text-2">
										Your cart will expire in{" "}
										<Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} /> minutes! Please
										checkout now before your items sell out!
									</p>
								</div>
								<div className="deal">
									<p>
										Buy <span>${70 - subtotal > 0 ? (70 - subtotal).toFixed(2) : "0.00"}</span> more to get{" "}
										<span>freeship</span>
									</p>
									<div className="tf-progessbar">
										<div
											className="tf-progressbar-content"
											style={{ width: `${Math.min((subtotal / 70) * 100, 100)}%` }}
										>
											<span className="tf-amount" />
										</div>
									</div>
								</div>
							</div>
							<div className="table-cart">
								<div className="table-shop-cart overflow-x-auto">
									<ul className="shop-cart-head">
										<li className="item">Products</li>
										<li className="item">Price</li>
										<li className="item">Quantity</li>
										<li className="item">Total Price</li>
									</ul>
									<ul className="shop-cart-inner overflow-y-auto">
										{cartItems.map((item) => (
											<li key={item.id} onClick={() => handleItemClick(item.id)}>
												<ul className="shop-cart-item ">
													<li className="produc-item">
														<div className="image-wrap">
															<img className="lazyloaded" src={item.image || "/placeholder.svg"} alt={item.name} />
														</div>
														<div className="product-title fw-6 text-3">
															<Link href={`/product-details/${item.id}`}>{item.name}</Link>
														</div>
													</li>
													<li className="cart-item-price">
														<p className="price-on-sale">${item.price.toFixed(2)}</p>
														{/* <div className="price-controls">
																<button onClick={() => handlePriceChange(item.id, -1)}>-</button>
																<button onClick={() => handlePriceChange(item.id, 1)}>+</button>
															</div> */}
													</li>
													<li className="cart-item-wg-quantity">
														<div className="wg-quantity">
															<span
																className="btn-quantity btn-decrease"
																onClick={() => handleQuantityChange(item.id, -1)}
															>
																-
															</span>
															<input
																type="text"
																className="quantity-product"
																name="number"
																value={item.quantity}
																readOnly
															/>
															<span
																className="btn-quantity btn-increase"
																onClick={() => handleQuantityChange(item.id, 1)}
															>
																+
															</span>
														</div>
													</li>
													<li className="cart-item-subtotal">
														<p>${(item.price * item.quantity).toFixed(2)}</p>
													</li>
													<li className="cart-item-remove">
														<div className="icon" onClick={() => removeFromCart(item.id)}>
															<i className="icon-Close" />
														</div>
													</li>
												</ul>
											</li>
										))}
									</ul>
								</div>
								<div className="shop-cart-bottom">
									<form action="#" className="form-coupon" id="coupon-code">
										<fieldset className="tf-field">
											<input
												className="tf-input style-1"
												id="field1"
												type="text"
												placeholder="Add voucher discount"
												name="text"
												tabIndex={2}
												aria-required="true"
												required
											/>
										</fieldset>
										<div className="button-submit">
											<button className="tf-btn style-default btn-color-primary text-color-white pd-40" type="submit">
												<span>
													Apply Code
													<i className="icon-arrow-top-right" />
												</span>
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="sidebar-shop cart-total">
								<h5 className="cart-total-title ">Order Summary</h5>
								<div className="cart-total-bill">
									<div className="item sub-total">
										<p className="fw-6">Subtotal</p>
										<p className="fw-6">${subtotal.toFixed(2)}</p>
									</div>
									<div className="item discounts">
										<p className="fw-6">Discounts</p>
										<p className="fw-6">-${discount.toFixed(2)}</p>
									</div>
									<div className="item shipping">
										<p className="fw-6">Shipping</p>
										<div className="list-check-radio radio-item">
											<div className="item-check">
												<label className=" text-3 " htmlFor="option-1">
													<input
														type="radio"
														className="tf-radio check-payment"
														id="option-1"
														name="option"
														checked={shipping === 0}
														onChange={() => setShipping(0)}
													/>
													<span className="btn-radio" />
													<span className="title">Free Shipping:</span>
												</label>
												<p>$0.00</p>
											</div>
											<div className="item-check">
												<label className=" text-3 " htmlFor="option-2">
													<input
														type="radio"
														className="tf-radio check-payment"
														id="option-2"
														name="option"
														checked={shipping === 35}
														onChange={() => setShipping(35)}
													/>
													<span className="btn-radio" />
													<span className="title">Local:</span>{" "}
												</label>
												<p>$35.00</p>
											</div>
											<div className="item-check">
												<label className=" text-3 " htmlFor="option-3">
													<input
														type="radio"
														className="tf-radio check-payment"
														id="option-3"
														name="option"
														checked={shipping === 35}
														onChange={() => setShipping(35)}
													/>
													<span className="btn-radio" />
													<span className="title">Flat Rate:</span>
												</label>
												<p>$35.00</p>
											</div>
										</div>
									</div>
									<div className="item total">
										<h5>Total</h5>
										<p className="h5">${total.toFixed(2)}</p>
									</div>
								</div>
								<div className="bot">
									<Link
										href="/shop-check-out"
										className="tf-btn style-default btn-color-secondary fw-6 w-full  pd-40"
									>
										<span>Process To Checkout</span>
									</Link>
									<p className="fw-6">Or continue shopping</p>
									<img src="/images/item/payment-group.jpg" alt="healingy" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* .section-related-product */}
			<section className="section-related-product">
				<div className="tf-container">
					<div className="row">
						<div className="col-12">
							<h4 className="text-center">You May Also Like</h4>
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
										<div className="price h6">$68.00 </div>
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
	)
}

