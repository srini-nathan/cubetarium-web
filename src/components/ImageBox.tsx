import { FunctionComponent, useState } from 'react';

interface ComponentState {
	loadingState: boolean;
	src: string | undefined;
	key: string | undefined;
	keyID: number;
	alt: string | undefined;
	onErrorLink: string | undefined;
}

const ImageBox: FunctionComponent<ComponentState> = (props: ComponentState) => {
	const [shownImage, setShownImage] = useState<string | undefined>(props.src);

	const onError = () => {};

	return (
		<img
			src={shownImage}
			alt={props.alt}
			key={`${props.key}`}
			onError={onError}
		/>
	);
};

export default ImageBox;
