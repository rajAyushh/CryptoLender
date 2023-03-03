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
              <select>
                <option value="">Filter Postings:</option>
                <option value="amount">Amount</option>
                <option value="interest_rate">Interest Rate</option>
                <option value="payback_period">Payback Period</option>
                <option value="price_high_low">Price: High to Low</option>
                <option value="price_low_high">Price: Low to High</option>
              </select>
              <button type="submit">Filter</button>
            </form>
          </li>
        </ul>
      </nav>
      <div className="container">
        <div className="right-section">
          <h1>Welcome to My Website</h1>
          <div className="postings">
            <div className="posting">
              <img src="https://via.placeholder.com/150" alt="Posting Image" />
              <div>
                <h2>Posting Title</h2>
                <p>Posting Description</p>
                <p>Posting Price</p>
                <div>
                  <button>Borrow</button>
                  <button>Save</button>
                </div>
              </div>
            </div>
            <div className="posting">
              <img src="https://via.placeholder.com/150" alt="Posting Image" />
              <div>
                <h2>Posting Title</h2>
                <p>Posting Description</p>
                <p>Posting Price</p>
                <div>
                  <button>Borrow</button>
                  <button>Save</button>
                </div>
              </div>
            </div>
            <div className="posting">
              <img src="https://via.placeholder.com/150" alt="Posting Image" />
              <div>
                <h2>Posting Title</h2>
                <p>Posting Description</p>
                <p>Posting Price</p>
                <div>
                  <button>Borrow</button>
                  <button>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
