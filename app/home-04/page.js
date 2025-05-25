import Layout from "@/components/layout/Layout"
import About4 from "@/components/sections/About4"
import Cta1 from "@/components/sections/Cta1"
import News4 from "@/components/sections/News4"
import Pricing1 from "@/components/sections/Pricing1"
import Process4 from "@/components/sections/Process4"
import Service4 from "@/components/sections/Service4"
import Team1 from "@/components/sections/Team1"
import Testimonials4 from "@/components/sections/Testimonials4"
export default function Home4() {

	return (
		<>

			<Layout headerStyle={4} footerStyle={2} hero={4} mainContentCls="main-content home-page-4">
				<About4 />
				<Service4 />
				<Process4 />
				<Testimonials4 />
				<Team1 />
				<Pricing1 />
				<News4 />
				<Cta1 />
			</Layout>
		</>
	)
}