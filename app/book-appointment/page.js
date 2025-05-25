import Layout from "@/components/layout/Layout"
export default function BookAppointment() {

	return (
		<>

			<Layout mainContentCls="main-content-2 page-appointment bg-1 ">

				<section className="section-book-appointment">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<div className="wrap-content">
									<form className="form-appointment">
										<div className="heading-section  text-start">
											<h3>Make an Appointment
											</h3>
											<p className="description text-1">Connect with a dedicated specialist today and take
												the first step towards a healthier, more fulfilling life.
											</p>
										</div>
										<div className="cols mb-20">
											<fieldset className="name">
												<input type="text" className="tf-input style-2" placeholder="Your Name" tabIndex={2} aria-required="true" required />
											</fieldset>
											<fieldset className="phone">
												<input type="number" className="tf-input style-2" placeholder="Phone Number" tabIndex={2} aria-required="true" required />
											</fieldset>
										</div>
										<div className="cols mb-20">
											<div className="select-custom ">
												<select className="tf-select" id="state" name="address[state]" data-default>
													<option value="---">Choose Services</option>
													<option value="Individual Counseling">Individual Counseling</option>
													<option value="Family Therapy">Family Therapy</option>
													<option value="Couples Therapy">Couples Therapy</option>
													<option value="Group Therapy">Group Therapy</option>
													<option value="Child & Adolescent Therapy">Child &amp; Adolescent Therapy
													</option>
													<option value="Trauma Counseling">Trauma Counseling</option>
												</select>
											</div>
											<div className="select-custom  ">
												<select className="tf-select" id="therapists" data-default>
													<option value="---">Choose Therapists</option>
													<option value="Individual Counseling">Dr. Emily Stevens</option>
													<option value="Family Therapy">Michael Carter</option>
													<option value="Couples Therapy">Sarah Martinez</option>
													<option value="Group Therapy">Dr. James Mcavoy</option>
													<option value="Child & Adolescent Therapy">Dr. Lisa Thompson
													</option>
													<option value="Trauma Counseling">Andrew Collins</option>
													<option value="Trauma Counseling">Jessica Rivera</option>
													<option value="Trauma Counseling">Dr. Robert Evans</option>
												</select>
											</div>
										</div>
										<div className="cols mb-20">
											<fieldset className="date">
												<input type="date" className="tf-input style-2" aria-required="true" required />
											</fieldset>
											<fieldset className="time">
												<input type="time" className="tf-input style-2" aria-required="true" required />
											</fieldset>
										</div>
										<fieldset>
											<textarea id="message" className="tf-input" name="message" rows={4} placeholder="Your mesage" tabIndex={4} aria-required="true" required />
										</fieldset>
										<button className="tf-btn style-default btn-color-secondary pd-40 boder-8" type="submit">
											<span>
												Book an Appointment
											</span>
										</button>
									</form>
									<div className="image-wrap">
										<img className="lazyload" data-src="/images/section/section-book-appointment.jpg" src="/images/section/section-book-appointment.jpg" alt="healingy" />
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