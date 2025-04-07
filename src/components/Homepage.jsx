import React, { useEffect, useState } from 'react';
import './styles/homepage.css';


function SinglePage({ product, url, setproducts }) {
  const [individualProduct, setIndividualProduct] = useState(product);
 
  
  useEffect(() => { 

    const filteredIndividualProduct = product.filter((item) => item.id === parseInt(url.split('/')[1]));
    setIndividualProduct(filteredIndividualProduct);
  }, [url, product]);
  setproducts(individualProduct);
  console.log("single page", individualProduct, "url", url);
  return (
    <div className='single-page'>
      {
        individualProduct.map((item) => (
          <div>
                <h2>
                {item.name}
              </h2>
              <p>
                {item.price}
              </p>
          </div>
        ))
      }
      prod
     

    </div>
  )
}



const Homepage = () => {
  // Product data
  const initialProducts = [
    {
      id: 1,
      name: "Infinix Smart 8 6.6\" HD, 128GB + 4GB RAM, 5000mAh",
      price: "KSh 8,799",
      originalPrice: "KSh 13,999",
      discount: "-37%",
      image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/9063192/1.jpg?9840"
    },
    {
      id: 2,
      name: "Samsung A05, 6.7\", 4GB RAM + 128GB, 5000mAh",
      price: "KSh 9,899",
      originalPrice: "KSh 12,518",
      discount: "-21%",
      image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/2453603/1.jpg?9748"
    },
    {
      id: 3,
      name: "Itel A50, 6.6\", 64GB + 2GB RAM, Dual Sim",
      price: "KSh 8,199",
      originalPrice: "KSh 9,000",
      discount: "-9%",
      image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/8387103/1.jpg?7292"
    },
    {
      id: 4,
      name: "Tecno POP 8, 6.6\", 2GB RAM + 64GB, 5000mAh",
      price: "KSh 8,999",
      originalPrice: "KSh 10,999",
      discount: "-18%",
      image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/4829703/1.jpg?2468"
    },
    {
      id: 5,
      name: "Oppo A16k, 6.52\", 32GB ROM + 3GB RAM, 4230mAh",
      price: "KSh 7,999",
      originalPrice: "KSh 15,000",
      discount: "-47%",
      image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/6740013/1.jpg?0316"
    },
    {
      id: 6,
      name: "Tecno POP 9 120Hz 6.6\" 4GB+64GB Dual 5000mAh",
      price: "KSh 9,499",
      originalPrice: "KSh 12,999",
      discount: "-27%",
      image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/42/9781282/1.jpg?1397"
    },
    {
      id: 7,
      name: "Poco C75, 6.88\", 128GB ROM + 8GB RAM, 5000mAh",
      price: "KSh 12,999",
      originalPrice: "KSh 16,819",
      discount: "-23%",
      image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/3153682/1.jpg?6707"
    },
    {
      id: 8,
      name: "Oale S24+, 6.52\" 32GB ROM + 3GB RAM, 5000mAh",
      price: "KSh 5,999",
      originalPrice: "KSh 20,000",
      discount: "-70%",
      image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/52/2168703/1.jpg?4886"
    },
    {
      id: 9,
      name: "Itel A70, 6.6\", 3GB RAM + 64GB ROM, 5000mAh",
      price: "KSh 8,599",
      originalPrice: "KSh 11,354",
      discount: "-24%",
      image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/8016942/1.jpg?1978"
    },
    {
      id: 10,
      name: "Vivo Y03 - 6.56\" - 4GB RAM + 64GB ROM, 5000mAh",
      price: "KSh 12,499",
      originalPrice: "KSh 17,999",
      discount: "-31%",
      image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/4966512/1.jpg?8808"
    }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts,  setFilteredProducts] = useState(initialProducts);
  const [url, setUrl] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  console.log("filteredProducts", filteredProducts);

  // Search function
  const searchProducts = () => {
    if (searchTerm.trim() === '') {
      setProducts(initialProducts);
      return;
    }
    
    const filteredProducts = initialProducts.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setProducts(filteredProducts);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle key press in search input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchProducts();
    }
  };

  return (
    <div className="jumia-app">
      <div className="banner">
        <h1>EASTER SALE</h1>
        <span>Up to</span>
        <span className="discount">40% OFF</span>
        <a href="#" className="shop-now">SHOP NOW</a>
        
      </div>
      <div className="header-container">
        <div className='header'>
          <div className="menu-icon">☰</div>
          <img src="/api/placeholder/120/35" alt="Jumia Logo" className="logo" />
          
          <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search products, brands and categories"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
            />
            <button className="search-btn" onClick={searchProducts}>Search</button>
          </div>
          
          <div className="nav-links">
            <a href="#" className="nav-link">Account ▼</a>
            <a href="#" className="nav-link">Help ▼</a>
            <a href="#" className="nav-link">Cart</a>
          </div>
        </div>
      </div>
      
      <div className="breadcrumbs">
        <a href="#">Home</a> &gt; <a href="#">Phones & Tablets</a>
      </div>
      
      <div className="section-header">Phone & Tablets</div>
      
      <div className="deals-header">Top Deals | Phones & Accessories</div>
      <div className="deals-button">
      <button  style={{ backgroundColor: '#f0c14b', color: '#111', padding: '8px' }} onClick={() => setUrl('')} >
          Clear Filters
        </button>
      </div>
     
      
      {
        url !== '' ? <>
        <div className="products-grid">
        {filteredProducts?.map(product => (
          <div className="product-card" key={product.id}>
            <div className="discount-tag">{product.discount}</div>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">{product.price}</div>
              <div className="original-price">{product.originalPrice}</div>
            </div>
            <button style={{ backgroundColor: '#f0c14b', color: '#111' }} onClick={() => setUrl(`url/${product.id}`)}>
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        ))}
      </div>
        </> : <>
        <div className="products-grid">
        {products?.map(product => (
          <div className="product-card" key={product.id}>
            <div className="discount-tag">{product.discount}</div>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">{product.price}</div>
              <div className="original-price">{product.originalPrice}</div>
            </div>
            <button style={{ backgroundColor: '#f0c14b', color: '#111' }} onClick={() => setUrl(`url/${product.id}`)}>
              <i className="fas fa-shopping-cart"></i> Add to Cart
            </button>
          </div>
        ))}
      </div>
          </>
      }
      <SinglePage product={products} setproducts={(item) => setFilteredProducts(item)} url={url} />
      <div className="stay-connected">Stay Connected</div>
    </div>
  );
};

export default Homepage;