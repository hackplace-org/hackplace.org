import { Content } from "@/components/content";
import { Navbar } from "@/components/navbar";

export default function Donate() {
	return (
		<>
			<Navbar currentTitle="Donate" />
			<Content as="main" className="py-16" border="bottom">
				Hello world
			</Content>
		</>
	);
}
