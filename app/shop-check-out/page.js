'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function ShopCheckOut() {
	const [activeAccordion, setActiveAccordion] = useState(null)
	const [loginAccordionOpen, setLoginAccordionOpen] = useState(false)

	const toggleAccordion = (accordionId) => {
		setActiveAccordion(activeAccordion === accordionId ? null : accordionId)
	}

	return (
		<>
			<Layout breadcrumbTitle="Check Out" mainContentCls="main-content-2 page-shop-check-out">
				<div className="main-content-2 page-shop-check-out">
					{/* .section-check-out */}
					<section className="section-check-out">
						<div className="tf-container">
							<div className="row">
								<div className="col-lg-6">
									<div className="check-out-info">
										<div className="login">
											<div className="top">
												<div className="top" id="login">
													<div className="accordion-item">
														<div className="heading" onClick={() => setLoginAccordionOpen(!loginAccordionOpen)}>
															<p>
																Already have an account? <Link href="/#">Login</Link>
															</p>
															<i className={`icon-CaretDown ${loginAccordionOpen ? "rotate-180" : ""}`} />
														</div>
														{loginAccordionOpen && (
															<div id="collapseOne" className="accordion-collapse">
																<div className="accordion-body">
																	<form className="form-login">
																		<div className="cols">
																			<fieldset className="name">
																				<div className="title text-3">Username or email address</div>
																				<input
																					type="email"
																					className="tf-input style-1"
																					placeholder="Email address"
																					tabIndex={2}
																					aria-required="true"
																					required
																				/>
																			</fieldset>
																			<fieldset className="password">
																				<div className="title text-3">Your Password</div>
																				<input
																					type="password"
																					className="tf-input style-1"
																					placeholder="***"
																					tabIndex={2}
																					aria-required="true"
																					required
																				/>
																			</fieldset>
																		</div>
																		<button className="tf-btn style-default btn-color-secondary pd-40 " type="submit">
																			<span>Login</span>
																		</button>
																	</form>
																</div>
															</div>
														)}
													</div>
												</div>
											</div>
										</div>
										<form className="form-info">
											<h5 className="mb-20">Information</h5>
											<div className="cols">
												<fieldset className="name">
													<input
														type="text"
														className="tf-input style-2"
														placeholder="First Name*"
														tabIndex={2}
														aria-required="true"
														required
													/>
												</fieldset>
												<fieldset className="name">
													<input
														type="text"
														className="tf-input style-2"
														placeholder="Last Name*"
														tabIndex={2}
														aria-required="true"
														required
													/>
												</fieldset>
											</div>
											<div className="cols">
												<fieldset className="email">
													<input
														type="email"
														className="tf-input style-2"
														placeholder="Email Address*"
														tabIndex={2}
														aria-required="true"
														required
													/>
												</fieldset>
												<fieldset className="phone">
													<input
														type="text"
														className="tf-input style-2"
														placeholder="Phone Number*"
														tabIndex={2}
														aria-required="true"
														required
													/>
												</fieldset>
											</div>
											<div className="select-custom mb-20 ">
												<select className="tf-select w-100" id="country" name="address[country]" data-default>
													<option value="---" data-provinces="[]">
														Choose Country/Region
													</option>
													<option
														value="Australia"
														data-provinces="[['Australian Capital Territory','Australian Capital Territory'],['New South Wales','New South Wales'],['Northern Territory','Northern Territory'],['Queensland','Queensland'],['South Australia','South Australia'],['Tasmania','Tasmania'],['Victoria','Victoria'],['Western Australia','Western Australia']]"
													>
														Australia
													</option>
													<option value="Austria" data-provinces="[]">
														Austria
													</option>
													<option value="Belgium" data-provinces="[]">
														Belgium
													</option>
													<option
														value="Canada"
														data-provinces="[['Alberta','Alberta'],['British Columbia','British Columbia'],['Manitoba','Manitoba'],['New Brunswick','New Brunswick'],['Newfoundland and Labrador','Newfoundland and Labrador'],['Northwest Territories','Northwest Territories'],['Nova Scotia','Nova Scotia'],['Nunavut','Nunavut'],['Ontario','Ontario'],['Prince Edward Island','Prince Edward Island'],['Quebec','Quebec'],['Saskatchewan','Saskatchewan'],['Yukon','Yukon']]"
													>
														Canada
													</option>
													<option value="Czech Republic" data-provinces="[]">
														Czechia
													</option>
													<option value="Denmark" data-provinces="[]">
														Denmark
													</option>
													<option value="Finland" data-provinces="[]">
														Finland
													</option>
													<option value="France" data-provinces="[]">
														France
													</option>
													<option value="Germany" data-provinces="[]">
														Germany
													</option>
													<option
														value="Hong Kong"
														data-provinces="[['Hong Kong Island','Hong Kong Island'],['Kowloon','Kowloon'],['New Territories','New Territories']]"
													>
														Hong Kong SAR
													</option>
													<option
														value="Ireland"
														data-provinces="[['Carlow','Carlow'],['Cavan','Cavan'],['Clare','Clare'],['Cork','Cork'],['Donegal','Donegal'],['Dublin','Dublin'],['Galway','Galway'],['Kerry','Kerry'],['Kildare','Kildare'],['Kilkenny','Kilkenny'],['Laois','Laois'],['Leitrim','Leitrim'],['Limerick','Limerick'],['Longford','Longford'],['Louth','Louth'],['Mayo','Mayo'],['Meath','Meath'],['Monaghan','Monaghan'],['Offaly','Offaly'],['Roscommon','Roscommon'],['Sligo','Sligo'],['Tipperary','Tipperary'],['Waterford','Waterford'],['Westmeath','Westmeath'],['Wexford','Wexford'],['Wicklow','Wicklow']]"
													>
														Ireland
													</option>
													<option value="Israel" data-provinces="[]">
														Israel
													</option>
													<option
														value="Italy"
														data-provinces="[['Agrigento','Agrigento'],['Alessandria','Alessandria'],['Ancona','Ancona'],['Aosta','Aosta Valley'],['Arezzo','Arezzo'],['Ascoli Piceno','Ascoli Piceno'],['Asti','Asti'],['Avellino','Avellino'],['Bari','Bari'],['Barletta-Andria-Trani','Barletta-Andria-Trani'],['Belluno','Belluno'],['Benevento','Benevento'],['Bergamo','Bergamo'],['Biella','Biella'],['Bologna','Bologna'],['Bolzano','South Tyrol'],['Brescia','Brescia'],['Brindisi','Brindisi'],['Cagliari','Cagliari'],['Caltanissetta','Caltanissetta'],['Campobasso','Campobasso'],['Carbonia-Iglesias','Carbonia-Iglesias'],['Caserta','Caserta'],['Catania','Catania'],['Catanzaro','Catanzaro'],['Chieti','Chieti'],['Como','Como'],['Cosenza','Cosenza'],['Cremona','Cremona'],['Crotone','Crotone'],['Cuneo','Cuneo'],['Enna','Enna'],['Fermo','Fermo'],['Ferrara','Ferrara'],['Firenze','Florence'],['Foggia','Foggia'],['Forlì-Cesena','Forlì-Cesena'],['Frosinone','Frosinone'],['Genova','Genoa'],['Gorizia','Gorizia'],['Grosseto','Grosseto'],['Imperia','Imperia'],['Isernia','Isernia'],['L'Aquila','L’Aquila'],['La Spezia','La Spezia'],['Latina','Latina'],['Lecce','Lecce'],['Lecco','Lecco'],['Livorno','Livorno'],['Lodi','Lodi'],['Lucca','Lucca'],['Macerata','Macerata'],['Mantova','Mantua'],['Massa-Carrara','Massa and Carrara'],['Matera','Matera'],['Medio Campidano','Medio Campidano'],['Messina','Messina'],['Milano','Milan'],['Modena','Modena'],['Monza e Brianza','Monza and Brianza'],['Napoli','Naples'],['Novara','Novara'],['Nuoro','Nuoro'],['Ogliastra','Ogliastra'],['Olbia-Tempio','Olbia-Tempio'],['Oristano','Oristano'],['Padova','Padua'],['Palermo','Palermo'],['Parma','Parma'],['Pavia','Pavia'],['Perugia','Perugia'],['Pesaro e Urbino','Pesaro and Urbino'],['Pescara','Pescara'],['Piacenza','Piacenza'],['Pisa','Pisa'],['Pistoia','Pistoia'],['Pordenone','Pordenone'],['Potenza','Potenza'],['Prato','Prato'],['Ragusa','Ragusa'],['Ravenna','Ravenna'],['Reggio Calabria','Reggio Calabria'],['Reggio Emilia','Reggio Emilia'],['Rieti','Rieti'],['Rimini','Rimini'],['Roma','Rome'],['Rovigo','Rovigo'],['Salerno','Salerno'],['Sassari','Sassari'],['Savona','Savona'],['Siena','Siena'],['Siracusa','Syracuse'],['Sondrio','Sondrio'],['Taranto','Taranto'],['Teramo','Teramo'],['Terni','Terni'],['Torino','Turin'],['Trapani','Trapani'],['Trento','Trentino'],['Treviso','Treviso'],['Trieste','Trieste'],['Udine','Udine'],['Varese','Varese'],['Venezia','Venice'],['Verbano-Cusio-Ossola','Verbano-Cusio-Ossola'],['Vercelli','Vercelli'],['Verona','Verona'],['Vibo Valentia','Vibo Valentia'],['Vicenza','Vicenza'],['Viterbo','Viterbo']]"
													>
														Italy
													</option>
													<option
														value="Japan"
														data-provinces="[['Aichi','Aichi'],['Akita','Akita'],['Aomori','Aomori'],['Chiba','Chiba'],['Ehime','Ehime'],['Fukui','Fukui'],['Fukuoka','Fukuoka'],['Fukushima','Fukushima'],['Gifu','Gifu'],['Gunma','Gunma'],['Hiroshima','Hiroshima'],['Hokkaidō','Hokkaido'],['Hyōgo','Hyogo'],['Ibaraki','Ibaraki'],['Ishikawa','Ishikawa'],['Iwate','Iwate'],['Kagawa','Kagawa'],['Kagoshima','Kagoshima'],['Kanagawa','Kanagawa'],['Kumamoto','Kumamoto'],['Kyōto','Kyoto'],['Kōchi','Kochi'],['Mie','Mie'],['Miyagi','Miyagi'],['Miyazaki','Miyazaki'],['Nagano','Nagano'],['Nagasaki','Nagasaki'],['Nara','Nara'],['Niigata','Niigata'],['Okayama','Okayama'],['Okinawa','Okinawa'],['Saga','Saga'],['Saitama','Saitama'],['Shiga','Shiga'],['Shimane','Shimane'],['Shizuoka','Shizuoka'],['Tochigi','Tochigi'],['Tokushima','Tokushima'],['Tottori','Tottori'],['Toyama','Toyama'],['Tōkyō','Tokyo'],['Wakayama','Wakayama'],['Yamagata','Yamagata'],['Yamaguchi','Yamaguchi'],['Yamanashi','Yamanashi'],['Ōita','Oita'],['Ōsaka','Osaka']]"
													>
														Japan
													</option>
													<option
														value="Malaysia"
														data-provinces="[['Johor','Johor'],['Kedah','Kedah'],['Kelantan','Kelantan'],['Kuala Lumpur','Kuala Lumpur'],['Labuan','Labuan'],['Melaka','Malacca'],['Negeri Sembilan','Negeri Sembilan'],['Pahang','Pahang'],['Penang','Penang'],['Perak','Perak'],['Perlis','Perlis'],['Putrajaya','Putrajaya'],['Sabah','Sabah'],['Sarawak','Sarawak'],['Selangor','Selangor'],['Terengganu','Terengganu']]"
													>
														Malaysia
													</option>
													<option value="Netherlands" data-provinces="[]">
														Netherlands
													</option>
													<option
														value="New Zealand"
														data-provinces="[['Auckland','Auckland'],['Bay of Plenty','Bay of Plenty'],['Canterbury','Canterbury'],['Chatham Islands','Chatham Islands'],['Gisborne','Gisborne'],['Hawke's Bay','Hawke’s Bay'],['Manawatu-Wanganui','Manawatū-Whanganui'],['Marlborough','Marlborough'],['Nelson','Nelson'],['Northland','Northland'],['Otago','Otago'],['Southland','Southland'],['Taranaki','Taranaki'],['Tasman','Tasman'],['Waikato','Waikato'],['Wellington','Wellington'],['West Coast','West Coast']]"
													>
														New Zealand
													</option>
													<option value="Norway" data-provinces="[]">
														Norway
													</option>
													<option value="Poland" data-provinces="[]">
														Poland
													</option>
													<option
														value="Portugal"
														data-provinces="[['Aveiro','Aveiro'],['Açores','Azores'],['Beja','Beja'],['Braga','Braga'],['Bragança','Bragança'],['Castelo Branco','Castelo Branco'],['Coimbra','Coimbra'],['Faro','Faro'],['Guarda','Guarda'],['Leiria','Leiria'],['Lisboa','Lisbon'],['Madeira','Madeira'],['Portalegre','Portalegre'],['Porto','Porto'],['Santarém','Santarém'],['Setúbal','Setúbal'],['Viana do Castelo','Viana do Castelo'],['Vila Real','Vila Real'],['Viseu','Viseu'],['Évora','Évora']]"
													>
														Portugal
													</option>
													<option value="Singapore" data-provinces="[]">
														Singapore
													</option>
													<option
														value="South Korea"
														data-provinces="[['Busan','Busan'],['Chungbuk','North Chungcheong'],['Chungnam','South Chungcheong'],['Daegu','Daegu'],['Daejeon','Daejeon'],['Gangwon','Gangwon'],['Gwangju','Gwangju City'],['Gyeongbuk','North Gyeongsang'],['Gyeonggi','Gyeonggi'],['Gyeongnam','South Gyeongsang'],['Incheon','Incheon'],['Jeju','Jeju'],['Jeonbuk','North Jeolla'],['Jeonnam','South Jeolla'],['Sejong','Sejong'],['Seoul','Seoul'],['Ulsan','Ulsan']]"
													>
														South Korea
													</option>
													<option
														value="Spain"
														data-provinces="[['A Coruña','A Coruña'],['Albacete','Albacete'],['Alicante','Alicante'],['Almería','Almería'],['Asturias','Asturias Province'],['Badajoz','Badajoz'],['Balears','Balears Province'],['Barcelona','Barcelona'],['Burgos','Burgos'],['Cantabria','Cantabria Province'],['Castellón','Castellón'],['Ceuta','Ceuta'],['Ciudad Real','Ciudad Real'],['Cuenca','Cuenca'],['Cáceres','Cáceres'],['Cádiz','Cádiz'],['Córdoba','Córdoba'],['Girona','Girona'],['Granada','Granada'],['Guadalajara','Guadalajara'],['Guipúzcoa','Gipuzkoa'],['Huelva','Huelva'],['Huesca','Huesca'],['Jaén','Jaén'],['La Rioja','La Rioja Province'],['Las Palmas','Las Palmas'],['León','León'],['Lleida','Lleida'],['Lugo','Lugo'],['Madrid','Madrid Province'],['Melilla','Melilla'],['Murcia','Murcia'],['Málaga','Málaga'],['Navarra','Navarra'],['Ourense','Ourense'],['Palencia','Palencia'],['Pontevedra','Pontevedra'],['Salamanca','Salamanca'],['Santa Cruz de Tenerife','Santa Cruz de Tenerife'],['Segovia','Segovia'],['Sevilla','Seville'],['Soria','Soria'],['Tarragona','Tarragona'],['Teruel','Teruel'],['Toledo','Toledo'],['Valencia','Valencia'],['Valladolid','Valladolid'],['Vizcaya','Biscay'],['Zamora','Zamora'],['Zaragoza','Zaragoza'],['Álava','Álava'],['Ávila','Ávila']]"
													>
														Spain
													</option>
													<option value="Sweden" data-provinces="[]">
														Sweden
													</option>
													<option value="Switzerland" data-provinces="[]">
														Switzerland
													</option>
													<option
														value="United Arab Emirates"
														data-provinces="[['Abu Dhabi','Abu Dhabi'],['Ajman','Ajman'],['Dubai','Dubai'],['Fujairah','Fujairah'],['Ras al-Khaimah','Ras al-Khaimah'],['Sharjah','Sharjah'],['Umm al-Quwain','Umm al-Quwain']]"
													>
														United Arab Emirates
													</option>
													<option
														value="United Kingdom"
														data-provinces="[['British Forces','British Forces'],['England','England'],['Northern Ireland','Northern Ireland'],['Scotland','Scotland'],['Wales','Wales']]"
													>
														United Kingdom
													</option>
													<option
														value="United States"
														data-provinces="[['Alabama','Alabama'],['Alaska','Alaska'],['American Samoa','American Samoa'],['Arizona','Arizona'],['Arkansas','Arkansas'],['Armed Forces Americas','Armed Forces Americas'],['Armed Forces Europe','Armed Forces Europe'],['Armed Forces Pacific','Armed Forces Pacific'],['California','California'],['Colorado','Colorado'],['Connecticut','Connecticut'],['Delaware','Delaware'],['District of Columbia','Washington DC'],['Federated States of Micronesia','Micronesia'],['Florida','Florida'],['Georgia','Georgia'],['Guam','Guam'],['Hawaii','Hawaii'],['Idaho','Idaho'],['Illinois','Illinois'],['Indiana','Indiana'],['Iowa','Iowa'],['Kansas','Kansas'],['Kentucky','Kentucky'],['Louisiana','Louisiana'],['Maine','Maine'],['Marshall Islands','Marshall Islands'],['Maryland','Maryland'],['Massachusetts','Massachusetts'],['Michigan','Michigan'],['Minnesota','Minnesota'],['Mississippi','Mississippi'],['Missouri','Missouri'],['Montana','Montana'],['Nebraska','Nebraska'],['Nevada','Nevada'],['New Hampshire','New Hampshire'],['New Jersey','New Jersey'],['New Mexico','New Mexico'],['New York','New York'],['North Carolina','North Carolina'],['North Dakota','North Dakota'],['Northern Mariana Islands','Northern Mariana Islands'],['Ohio','Ohio'],['Oklahoma','Oklahoma'],['Oregon','Oregon'],['Palau','Palau'],['Pennsylvania','Pennsylvania'],['Puerto Rico','Puerto Rico'],['Rhode Island','Rhode Island'],['South Carolina','South Carolina'],['South Dakota','South Dakota'],['Tennessee','Tennessee'],['Texas','Texas'],['Utah','Utah'],['Vermont','Vermont'],['Virgin Islands','U.S. Virgin Islands'],['Virginia','Virginia'],['Washington','Washington'],['West Virginia','West Virginia'],['Wisconsin','Wisconsin'],['Wyoming','Wyoming']]"
													>
														United States
													</option>
													<option value="Vietnam" data-provinces="[]">
														Vietnam
													</option>
												</select>
											</div>
											<div className="cols">
												<fieldset className="address">
													<input
														type="text"
														className="tf-input style-2"
														placeholder="Town/City*"
														tabIndex={2}
														aria-required="true"
														required
													/>
												</fieldset>
												<fieldset className="street">
													<input
														type="text"
														className="tf-input style-2"
														placeholder="Street,..."
														tabIndex={2}
														aria-required="true"
														required
													/>
												</fieldset>
											</div>
											<div className="cols">
												<div className="select-custom">
													<select className="tf-select" id="state" name="address[state]" data-default>
														<option value>Choose State</option>
													</select>
												</div>
												<fieldset className="Code">
													<input
														type="text"
														className="tf-input style-2"
														placeholder="Postal Code*"
														tabIndex={2}
														aria-required="true"
														required
													/>
												</fieldset>
											</div>
											<fieldset>
												<textarea
													id="message"
													className="tf-input"
													name="message"
													rows={4}
													placeholder="Write note..."
													tabIndex={4}
													aria-required="true"
													required
												/>
											</fieldset>
										</form>
										<div className="form-payment" id="payment-form">
											<h5 className="mb-20">Choose payment Option:</h5>
											<div className="payment-option">
												<div
													className={`radio-item ${activeAccordion === "creditCard" ? "active" : ""}`}
													onClick={() => toggleAccordion("creditCard")}
												>
													<label className="fw-6 text-3 form-check-label" htmlFor="creditCard-1">
														<input
															type="radio"
															className="tf-radio check-payment"
															id="creditCard-1"
															name="paymentMethod"
															checked={activeAccordion === "creditCard"}
															onChange={() => { }}
														/>
														<span className="btn-radio" />
														Credit Card
													</label>
												</div>
												{activeAccordion === "creditCard" && (
													<div className="accordion-body">
														<form className="form-fill-card">
															<p>
																Make your payment directly into our bank account. Your order will not be shipped until
																the funds have cleared in our account.
															</p>
															<fieldset className="name mb-20">
																<input
																	type="text"
																	className="tf-input style-2"
																	placeholder="Name On Card*"
																	tabIndex={2}
																	aria-required="true"
																	required
																/>
															</fieldset>
															<fieldset className="card-number mb-20">
																<input
																	type="text"
																	className="tf-input style-2"
																	placeholder="Card Numbers**"
																	tabIndex={2}
																	aria-required="true"
																	required
																/>
																<ul className="list-payment">
																	<li>
																		<img src="/images/item/payment-1.png" alt="healingy" />
																	</li>
																	<li>
																		<img src="/images/item/payment-2.png" alt="healingy" />
																	</li>
																	<li>
																		{" "}
																		<img src="/images/item/payment-3.png" alt="healingy" />
																	</li>
																	<li>
																		<img src="/images/item/payment-4.png" alt="healingy" />
																	</li>
																</ul>
															</fieldset>
															<div className="cols ">
																<fieldset className="date">
																	<input
																		type="text"
																		id="dateInput"
																		placeholder="mm/yy"
																		maxLength={5}
																		className="tf-input style-2"
																		tabIndex={2}
																		aria-required="true"
																		required
																	/>
																</fieldset>
																<fieldset className="cvv">
																	<input
																		type="text"
																		className="tf-input style-2"
																		placeholder="CVV*"
																		tabIndex={2}
																		aria-required="true"
																		required
																	/>
																</fieldset>
															</div>
															<div className="checkbox-item">
																<label>
																	<span className="text-3 fw-6">Save Card Details</span>
																	<input type="checkbox" />
																	<span className="btn-checkbox" />
																</label>
															</div>
														</form>
													</div>
												)}
											</div>

											<div className="payment-option">
												<div
													className={`radio-item ${activeAccordion === "cashOnDelivery" ? "active" : ""}`}
													onClick={() => toggleAccordion("cashOnDelivery")}
												>
													<label className="fw-6 text-3 form-check-label" htmlFor="creditCard-3">
														<input
															type="radio"
															className="tf-radio check-payment"
															id="creditCard-3"
															name="paymentMethod"
															checked={activeAccordion === "cashOnDelivery"}
															onChange={() => { }}
														/>
														<span className="btn-radio" />
														Cash on delivery
													</label>
												</div>
												{activeAccordion === "cashOnDelivery" && (
													<div className="accordion-body">{/* Cash on delivery content */}</div>
												)}
											</div>
											<div className="payment-option ">
												<div
													className={`radio-item ${activeAccordion === "paypal" ? "active" : ""}`}
													onClick={() => toggleAccordion("paypal")}
												>
													<label className="fw-6 text-3 form-check-label" htmlFor="creditCard-5">
														<input
															type="radio"
															className="tf-radio check-payment"
															id="creditCard-5"
															name="paymentMethod"
															checked={activeAccordion === "paypal"}
															onChange={() => { }}
														/>
														<span className="btn-radio" />
														<img src="/images/item/payment-5.png" alt="healingy" />
													</label>
												</div>
												{activeAccordion === "paypal" && (
													<div className="accordion-body">
														<form className="form-fill-card">
															<p>
																Make your payment directly into our bank account. Your order will not be shipped until
																the funds have cleared in our account.
															</p>
															<fieldset className="name mb-20">
																<input
																	type="text"
																	className="tf-input style-2"
																	placeholder="Name On Card*"
																	tabIndex={2}
																	aria-required="true"
																	required
																/>
															</fieldset>
															<fieldset className="card-number mb-20">
																<input
																	type="text"
																	className="tf-input style-2"
																	placeholder="Card Numbers**"
																	tabIndex={2}
																	aria-required="true"
																	required
																/>
																<ul className="list-payment">
																	<li>
																		<img src="/images/item/payment-1.png" alt="healingy" />
																	</li>
																	<li>
																		<img src="/images/item/payment-2.png" alt="healingy" />
																	</li>
																	<li>
																		{" "}
																		<img src="/images/item/payment-3.png" alt="healingy" />
																	</li>
																	<li>
																		<img src="/images/item/payment-4.png" alt="healingy" />
																	</li>
																</ul>
															</fieldset>
															<div className="cols ">
																<fieldset className="date">
																	<input
																		type="text"
																		id="dateInput-2"
																		placeholder="mm/yy"
																		maxLength={5}
																		className="tf-input style-2"
																		tabIndex={2}
																		aria-required="true"
																		required
																	/>
																</fieldset>
																<fieldset className="cvv">
																	<input
																		type="text"
																		className="tf-input style-2"
																		placeholder="CVV*"
																		tabIndex={2}
																		aria-required="true"
																		required
																	/>
																</fieldset>
															</div>
															<div className="checkbox-item">
																<label>
																	<span className="text-3 fw-6">Save Card Details</span>
																	<input type="checkbox" />
																	<span className="btn-checkbox" />
																</label>
															</div>
														</form>
													</div>
												)}
											</div>
											<div className="payment-option ">
												<div
													className={`radio-item ${activeAccordion === "googlePay" ? "active" : ""}`}
													onClick={() => toggleAccordion("googlePay")}
												>
													<label className="fw-6 text-3 form-check-label" htmlFor="creditCard-4">
														<input
															type="radio"
															className="tf-radio check-payment"
															id="creditCard-4"
															name="paymentMethod"
															checked={activeAccordion === "googlePay"}
															onChange={() => { }}
														/>
														<span className="btn-radio" />
														<img src="/images/item/payment-6.png" alt="healingy" />
													</label>
												</div>
												{activeAccordion === "googlePay" && (
													<div className="accordion-body">
														<form className="form-fill-card">
															<p>
																Make your payment directly into our bank account. Your order will not be shipped until
																the funds have cleared in our account.
															</p>
															<fieldset className="name mb-20">
																<input
																	type="text"
																	className="tf-input style-2"
																	placeholder="Name On Card*"
																	tabIndex={2}
																	aria-required="true"
																	required
																/>
															</fieldset>
															<fieldset className="card-number mb-20">
																<input
																	type="text"
																	className="tf-input style-2"
																	placeholder="Card Numbers**"
																	tabIndex={2}
																	aria-required="true"
																	required
																/>
																<ul className="list-payment">
																	<li>
																		<img src="/images/item/payment-1.png" alt="healingy" />
																	</li>
																	<li>
																		<img src="/images/item/payment-2.png" alt="healingy" />
																	</li>
																	<li>
																		{" "}
																		<img src="/images/item/payment-3.png" alt="healingy" />
																	</li>
																	<li>
																		<img src="/images/item/payment-4.png" alt="healingy" />
																	</li>
																</ul>
															</fieldset>
															<div className="cols ">
																<fieldset className="date">
																	<input
																		type="text"
																		id="dateInput-3"
																		placeholder="mm/yy"
																		maxLength={5}
																		className="tf-input style-2"
																		tabIndex={2}
																		aria-required="true"
																		required
																	/>
																</fieldset>
																<fieldset className="cvv">
																	<input
																		type="text"
																		className="tf-input style-2"
																		placeholder="CVV*"
																		tabIndex={2}
																		aria-required="true"
																		required
																	/>
																</fieldset>
															</div>
															<div className="checkbox-item">
																<label>
																	<span className="text-3 fw-6">Save Card Details</span>
																	<input type="checkbox" />
																	<span className="btn-checkbox" />
																</label>
															</div>
														</form>
													</div>
												)}
											</div>
										</div>
										<Link className="tf-btn style-default btn-color-secondary pd-40 w-full" href="/#">
											<span>Payment</span>
										</Link>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="shop-cart-check-out">
										<h5 className="title">Shopping Cart</h5>
										<ul className="list-product">
											<li>
												<div className="produc-item ">
													<div className="wrap-info">
														<div className="image-wrap">
															<Link href="/product-details">
																<img
																	className=" ls-is-cached lazyloaded"
																	data-src="/images/section/shop-cart-item-2.jpg"
																	src="/images/section/shop-cart-item-2.jpg"
																	alt="healingy"
																/>
															</Link>
														</div>
														<div className="product-title fw-6 text-3">
															<Link href="/product-details">Royal Agarwood</Link>
														</div>
													</div>
													<p className="price fw-6 text-3">1 x $60.00</p>
												</div>
											</li>
											<li>
												<div className="produc-item ">
													<div className="wrap-info">
														<div className="image-wrap">
															<Link href="/product-details">
																<img
																	className=" ls-is-cached lazyloaded"
																	data-src="/images/section/shop-cart-item-1.jpg"
																	src="/images/section/shop-cart-item-1.jpg"
																	alt="healingy"
																/>
															</Link>
														</div>
														<div className="product-title fw-6 text3">
															<Link href="/product-details">Wick Tin Candle for Relaxation</Link>
														</div>
													</div>
													<p className="price fw-6 text-3">1 x $60.00</p>
												</div>
											</li>
											<li>
												<div className="produc-item ">
													<div className="wrap-info">
														<div className="image-wrap">
															<Link href="/product-details">
																<img
																	className=" ls-is-cached lazyloaded"
																	data-src="/images/section/shop-cart-item-3.jpg"
																	src="/images/section/shop-cart-item-3.jpg"
																	alt="healingy"
																/>
															</Link>
														</div>
														<div className="product-title fw-6 text-3">
															<Link href="/product-details">Lavender, Marjoram &amp; Clary</Link>
														</div>
													</div>
													<p className="price fw-6 text-3">1 x $60.00</p>
												</div>
											</li>
										</ul>
										<div className="wrap-discount">
											<form action="#" className="form-coupon" id="coupon-code">
												<fieldset className="tf-field">
													<input
														className="tf-input style-2"
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
													<button
														className="tf-btn style-default btn-color-primary text-color-white pd-40"
														type="submit"
													>
														<span>
															Apply Code
															<i className="icon-arrow-top-right" />
														</span>
													</button>
												</div>
											</form>
											<p>Discount code is only used for orders with a total value of products over $500.00</p>
										</div>
										<div className="wrap-total">
											<div className="total-item shipping">
												<div className="item mb-16">
													<p>Shipping</p>
													<p>Free</p>
												</div>
												<div className="item">
													<p>Discounts</p>
													<p>-$80.00</p>
												</div>
											</div>
											<div className="total-item total">
												<p className="h5">Total</p>
												<p className="h5">$186,99</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* section-check-out */}
				</div>
			</Layout>
		</>
	)
}

