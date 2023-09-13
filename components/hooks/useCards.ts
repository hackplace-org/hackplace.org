import {
	useRef,
	createRef,
	type RefObject,
	type MouseEventHandler,
} from "react";

const useRefArray = <T>(length: number) => {
	const arrayRef = useRef<RefObject<T>[]>([]);

	if (arrayRef.current.length !== length) {
		arrayRef.current = Array.from({ length }, () => createRef<T>());
	}

	return arrayRef;
};

export const useCards = (length: number) => {
	const refs = useRefArray<HTMLDivElement>(length);

	const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
		refs.current.forEach((ref) => {
			const card = ref.current;
			if (!card) return;

			const rect = card.getBoundingClientRect(),
				x = e.clientX - rect.left,
				y = e.clientY - rect.top;

			card.style.setProperty("--mouse-x", `${x}px`);
			card.style.setProperty("--mouse-y", `${y}px`);
		});
	};

	return [refs, onMouseMove] as const;
};
