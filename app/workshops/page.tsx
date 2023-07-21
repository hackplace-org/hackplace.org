import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";

export default function Workshops() {
	return (
		<>
			<Navbar currentTitle="Workshops" />
			<Content as="main" className="py-16" border="bottom">
				Hello world
			</Content>
		</>
	);
}
