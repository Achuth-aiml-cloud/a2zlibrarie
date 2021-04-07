import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="/images/homebanner.png"
					alt="banner of a2zlibrarie"
				/>
				<div className="home__row">
					{/* product compponent */}
					<Product
						id="10000"
						title="Data Science for dummies book from novice to advanced this book is for abosolutely beginners"
						author="Pierson"
						image="/images/book1.jpg"
						rating={3}
						price={1}
					/>
					<Product
						id="10002"
						title="Deep Learning with Python by the tensorflow founder advanced stage book"
						author="Francois Cholett"
						image="/images/book3.jpg"
						rating={4}
						price={1}
					/>
					<Product
						id="10003"
						title="Dive into deep Learning book from zero to hero this book contains maths + coding part"
						author="Amazon Scientists"
						image="/images/book2.jpg"
						rating={5}
						price={1}
					/>
					<Product
						id="10004"
						title="Artificial intelligence in modern approach for beginners to advanced "
						author="Stuart Russell"
						image="/images/book4.jpg"
						rating={5}
						price={1}
					/>
					{/* product compponent */}
					{/* product compponent */}
				</div>
				<div className="home__row">
					<Product
						id="10011"
						title="Cyber security including with kali linux and ethical hacking and many more"
						author="Zach Codings"
						image="/images/book1c.jpg"
						rating={3}
						price={1}
					/>
					<Product
						id="10012"
						title="The Secret to the Cyber security for beginners to advanced level"
						author="FBI cyber divison"
						image="/images/book2c.jpg"
						rating={4}
						price={1}
					/>
					<Product
						id="10013"
						title="Computer Programming and Cyber Security for beginners"
						author="Zach Codings"
						image="/images/book3c.jpg"
						rating={5}
						price={1}
					/>
					<Product
						id="10014"
						title="The Ethics of the Cyber security book"
						author="Markus Christein"
						image="/images/book4c.jpg"
						rating={5}
						price={1}
					/>
				</div>
				<div className="home__row">
					{/* product compponent */}
					<Product
						id="10021"
						title="The Internet of things for absolutely beginners"
						author="Ajit Singh"
						image="/images/book1i.jpg"
						rating={3}
						price={1}
					/>
					<Product
						id="10022"
						title="The Internet of things (IOT) and it's systems"
						author="Dimitrious serpanos"
						image="/images/book2i.jpg"
						rating={4}
						price={1}
					/>
					<Product
						id="10023"
						title="IOT [internet of things] a new age of intelligence "
						author="Jan Holler"
						image="/images/book3i.jpg"
						rating={5}
						price={1}
					/>
					<Product
						id="10024"
						title="Internet of things in Health Care systems"
						author="Springer"
						image="/images/book4i.jpg"
						rating={5}
						price={1}
					/>
					{/* product compponent */}
					{/* product compponent */}
				</div>
				<div className="home__row">
					{/* product compponent */}
					<Product
						id="10031"
						title="Harry potter 1 and The Philosphers stone"
						author="JK Rowling"
						image="/images/book1h.jpg"
						rating={3}
						price={1}
					/>
					<Product
						id="10032"
						title="Harry Potter 2 the Chamber of Secrets"
						author="JK Rowling"
						image="/images/book2h.jpg"
						rating={4}
						price={1}
					/>
					<Product
						id="10033"
						title="Harry Potter Part 7 - The Deathly Hallows"
						author="JK Rowling"
						image="/images/book3h.jpg"
						rating={5}
						price={1}
					/>
					<Product
						id="10034"
						title="Harry Potter 5 - the Goblets of fire"
						author="JK Rowling"
						image="/images/book4h.jpg"
						rating={5}
						price={1}
					/>
					{/* product compponent */}
					{/* product compponent */}
				</div>
			</div>
		</div>
	);
}

export default Home;
