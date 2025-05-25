'use client'
import CountUp from 'react-countup'

export default function Counter2() {
	return (
		<>


			<section className="section-counter tf-spacing-1 pt-0">
				<div className="tf-container">
					<div className="row">
						<div className="col-12">
							<div className="wrap-counter">
								<div className="counter-item ">
									<div className="count">
										<div className="counter-number mx-auto">
											<div className="odometer style-1-1"><CountUp enableScrollSpy={true} end={20} />
											</div>
											<span className="sub">Year</span>
										</div>
										<p>Years of Experience</p>
									</div>
								</div>
								<div className="counter-item ">
									<div className="count">
										<div className="counter-number mx-auto">
											<div className="odometer style-1-2"><CountUp enableScrollSpy={true} end={2} />
											</div>
											<span className="sub">k</span>
										</div>
										<p>Happy customers</p>
									</div>
								</div>
								<div className="counter-item">
									<div className="count ">
										<div className="counter-number  mx-auto ">
											<div className="odometer style-1-3"><CountUp enableScrollSpy={true} end={46} />
											</div>
										</div>
										<p>Therapy Sessions</p>
									</div>
								</div>
								<div className="counter-item  ">
									<div className="count">
										<div className="counter-number mx-auto">
											<div className="odometer style-1-4"><CountUp enableScrollSpy={true} end={15} />
											</div>
										</div>
										<p>Certifications/Awards</p>
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

