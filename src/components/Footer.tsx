import { FunctionComponent } from 'react';

// Image Importing:
import logoFooter from './../img/logo-footer.jpg';
import logoAvalanche from './../img/avalanche-logo.jpg';
import logoTwitter from './../img/twitter-logo.jpg';
import logoInstagram from './../img/instagram-logo.jpg';
import logoDiscord from './../img/discord-logo.jpg';

const Footer: FunctionComponent<{}> = () => {
	return (
		<footer>
			<div className="col-12 ">
				<ul>
					<li className="footer-logo">
						<img src={logoFooter} alt="footer logo" />
					</li>
					<li className="avalanche-logo">
						<img src={logoAvalanche} alt="footer logo" />
					</li>

					<li className="copyright">
						<span>
							Cubetarium is a virtual world powered by the
							Avalanche blockchain. &nbsp;2021
						</span>
						<span>&#169;</span>
					</li>
					<li className="social-logo">
						<a
							target="_blank"
							href="https://twitter.com/cubetarium/"
							rel="noreferrer"
						>
							<img src={logoTwitter} alt="twitter cubetarium" />
						</a>
						<a
							target="_blank"
							href="https://www.instagram.com/cubetarium/"
							rel="noreferrer"
						>
							<img
								src={logoInstagram}
								className="instagram"
								alt="instagram cubetarium"
							/>
						</a>
						<a
							target="_blank"
							href="https://discord.gg/xHUXWTjKdj"
							rel="noreferrer"
						>
							<img
								src={logoDiscord}
								className="discord"
								alt="discord cubetarium"
							/>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};
export default Footer;
