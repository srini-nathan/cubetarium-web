import { FunctionComponent, useState } from 'react';

// Type Importing:
import LoadingState from '../types/Loading';

// Component Importing:
import ImageBox from '../components/ImageBox';

const Marketplace: FunctionComponent<{}> = () => {
	/**
	 * @todo Type Definition of marketList
	 */
	interface meta {
		id: number;
		img: string;
		img_pinata: string;
		price: number;
	}
	//
	const [marketList, setMarketList] = useState<null | meta[]>(null);
	const [loaded, setLoaded] = useState<boolean>();
	const [pageSelected, setPageSelected] = useState<number>(1);
	const [maxPage, setMaxPage] = useState<number>(1);
	const [pageContent, setPageContent] = useState<meta[]>([]);

	const getMarketFromAPI = () => {};

	const getPageContent = (): meta[] => {
		var contentNow: meta[] = [];

		var minIndex = (pageSelected - 1) * 9;
		var maxIndex = pageSelected * 9 - 1;
		marketList?.forEach((element, index) => {
			if (index <= maxIndex && index >= minIndex) {
				contentNow.push(element);
			}
		});

		return contentNow;
	};

	const updatePageContent = () => {
		setPageContent(getPageContent());
	};

	const incrementPage = () => {
		if (pageSelected < maxPage) {
			setPageSelected(pageSelected + 1);
			updatePageContent();
		}
	};

	const decrementPage = () => {
		if (pageSelected > 1) {
			setPageSelected(pageSelected - 1);
			updatePageContent();
		}
	};

	const firstPage = () => {
		setPageSelected(1);
		updatePageContent();
	};

	const lastPage = () => {
		setPageSelected(maxPage);
		updatePageContent();
	};

	if (marketList !== null && loaded === true) {
		return (
			<div className="content content-marketplace">
				<div className="content-container">
					{pageContent.map((element, index) => (
						<div className="marketplace-area">
							<a href={`market-details-${element.id}`}>
								<div className="cube-img">
									<ImageBox
										loadingState={LoadingState.Loaded}
										src={element.img}
										alt={`MarketCube_${element.id}`}
										key={`MarketCube_${element.id}`}
										keyID={element.id}
										onErrorLink={element.img_pinata}
									/>
								</div>
								<div className="market-buy">
									<label>#{element.id}</label>
									<label>Buy: {element.price} AVAX</label>
								</div>
							</a>
						</div>
					))}
					<div className="col-12 mainpaging">
						<div
							className="pageing first-page"
							onClick={firstPage}
						></div>
						<div
							className="pageing left-pageing"
							onClick={decrementPage}
						></div>
						<div className="pageing ">
							<input type="text" value={pageSelected} />
						</div>
						<div
							className="pageing right-pageing"
							onClick={incrementPage}
						></div>
						<div
							className="pageing last-page"
							onClick={lastPage}
						></div>
					</div>
				</div>
			</div>
		);
	} else if (
		marketList === null ||
		(marketList !== null && loaded === false)
	) {
		return <div></div>;
	} else {
		return <div></div>;
	}
};

export default Marketplace;
