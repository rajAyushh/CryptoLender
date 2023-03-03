import React from 'react';
import './homepage.css'; // import the CSS file

function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#">Homepage</a></li>
          <li><a href="#">Lend</a></li>
          <li><a href="#">Borrow</a></li>
          <li><a href="#">Dashboard</a></li>
          <li>
            <form>
              <input type="text" placeholder="Search..." />
              <button type="submit">Search</button>
            </form>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="left-section">
          <h2>Filter Postings:</h2>
          <ul>
            <li><a href="#">Amount</a></li>
            <li><a href="#">Interest Rate</a></li>
            <li><a href="#">Payback Period</a></li>
            <li><a href="#">Price: High to Low</a></li>
            <li><a href="#">Price: Low to High</a></li>
          </ul>
        </div>
        <div className="right-section">
          <h1>Welcome to My Website</h1>
          <div className="postings">
            <div className="posting">
              <img src="https://via.placeholder.com/150" alt="Posting Image" />
              <div>
                <h2>Posting Title</h2>
                <p>Posting Description</p>
                <p>Posting Price</p>
              </div>
            </div>
            <div className="posting">
              <img src="https://via.placeholder.com/150" alt="Posting Image" />
              <div>
                <h2>Posting Title</h2>
                <p>Posting Description</p>
                <p>Posting Price</p>
              </div>
            </div>
            <div className="posting">
              <img src="https://via.placeholder.com/150" alt="Posting Image" />
              <div>
                <h2>Posting Title</h2>
                <p>Posting Description</p>
                <p>Posting Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
