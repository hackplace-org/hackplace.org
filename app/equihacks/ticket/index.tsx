import Image from "next/image";

interface UserTicketProps {
	username: string;
}

export const UserTicket = ({ username }: UserTicketProps) => {
	return (
		<>
			<h1>Ticket of {username}</h1>
			<Image
				width={1200}
				height={63}
				src={`/api/ticket?username=${username}`}
				alt={`Join ${username} at EquiHacks`}
			/>
		</>
	);
};
