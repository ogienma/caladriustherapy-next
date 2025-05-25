import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbAlt }) {
	return (
		<>
			{!breadcrumbAlt ?
				<div className="page-title">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<h3 className="title">{breadcrumbTitle}</h3>
								<ul className="breadcrumbs">
									<li><Link href="/">Home</Link></li>
									<li>{breadcrumbTitle}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				:
				<div className="page-title page-details">
					<div className="tf-container">
						<div className="row">
							<div className="col-12">
								<ul className="breadcrumbs">
									<li><Link href="/">Home</Link></li>
									<li>Blogs</li>
									<li className="line-clamp-1">{breadcrumbTitle}</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

			}

		</>
	)
}
