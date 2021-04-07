import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Link } from "react-router-dom";


function Header() {
	return (
		<div className="header">
			<Link to="/">
			<img
				className="header__logo"
				src="/images/a2zlib.jpeg"
				alt="a2zlibrarie logo"
			/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
                        <SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<div className="header__option">
					<span className="header__optionLineOne">Hello Guest,</span>
					<span className="header__optionLineTwo">Sign In</span>
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Join The,</span>
					<span className="header__optionLineTwo">Communities</span>
				</div>
				<Link to="/aboutus">
				<div className="header__option">
					<span className="header__optionLineOne">About,</span>
					<span className="header__optionLineTwo">Rutherfords</span>
				</div>
				</Link>
				<Link to="/downloads">
                        <div className="header__optionBasket">
                              <LibraryBooksIcon />
                              <span className="header__optionLineTwo header__basketCount">0</span>
                        </div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
