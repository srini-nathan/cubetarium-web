import { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

type PageParams = {
	errcode: string /** @todo Make ErrorCodes Type and Bind All Errors to this Page */;
};

const ErrorPage: FunctionComponent<{}> = () => {
	const { errcode } = useParams<PageParams>();

	return <div></div>;
};

export default ErrorPage;
