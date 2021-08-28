import { FunctionComponent } from 'react';

const Marketplace: FunctionComponent<{}> = () => {
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
										keyName={`MarketCube_${element.id}`}
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
							<input
								type="text"
								value={pageingInfo().toString()}
							/>
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
		return (
			<div className="content content-marketplace">
				<div className="content-container">
					<div className="col-4">
						<div className="marketplace-area">
							<div className="cube-img">
								<img
									src={`${loadingProp}`}
									alt="wallet_product"
									key="wallet_loading"
								/>
							</div>
							<div className="market-buy">
								<label>#</label>
								<label>Buy: ? AVAX</label>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="marketplace-area">
							<div className="cube-img">
								<img src={loadingProp} alt="wallet product" />
							</div>
							<div className="market-buy">
								<label>#</label>
								<label>Buy: ? AVAX</label>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="marketplace-area">
							<div className="cube-img">
								<img src={loadingProp} alt="wallet product" />
							</div>
							<div className="market-buy">
								<label>#</label>
								<label>Buy: ? AVAX</label>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="marketplace-area">
							<div className="cube-img">
								<img src={loadingProp} alt="wallet product" />
							</div>
							<div className="market-buy">
								<label>#</label>
								<label>Buy: ? AVAX</label>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="marketplace-area">
							<div className="cube-img">
								<img src={loadingProp} alt="wallet product" />
							</div>
							<div className="market-buy">
								<label>#</label>
								<label>Buy: ? AVAX</label>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="marketplace-area">
							<div className="cube-img">
								<img src={loadingProp} alt="wallet product" />
							</div>
							<div className="market-buy">
								<label>#</label>
								<label>Buy: ? AVAX</label>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="marketplace-area">
							<div className="cube-img">
								<img src={loadingProp} alt="wallet product" />
							</div>
							<div className="market-buy">
								<label>#</label>
								<label>Buy: ? AVAX</label>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="marketplace-area">
							<div className="cube-img">
								<img src={loadingProp} alt="wallet product" />
							</div>
							<div className="market-buy">
								<label>#</label>
								<label>Buy: ? AVAX</label>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="marketplace-area">
							<div className="cube-img">
								<img src={loadingProp} alt="wallet product" />
							</div>
							<div className="market-buy">
								<label>#</label>
								<label>Buy: ? AVAX</label>
							</div>
						</div>
					</div>

					<div className="col-12 mainpaging">
						<div className="pageing first-page"></div>
						<div className="pageing left-pageing"></div>
						<div className="pageing ">
							<input type="text" value="Page 1" />
						</div>
						<div className="pageing right-pageing"></div>
						<div className="pageing last-page"></div>
					</div>
				</div>
			</div>
		);
	}
};

export default Marketplace;
