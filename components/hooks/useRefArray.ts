import { useRef, createRef, type RefObject } from "react";

export const useRefArray = <T>(length: number) => {
	const arrayRef = useRef<RefObject<T>[]>([]);

	if (arrayRef.current.length !== length) {
		arrayRef.current = Array.from({ length }, () => createRef<T>());
	}

	return arrayRef;
};
