export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <a href="https://x.ro" className="product-tile-image" title="">
          <img
            src="/images/products/product-01a.jpg"
            alt="Thread Affair Traveller Suit
"
          />
        </a>

        <span className="badge bagde-oversized">%</span>
        <div className="mt-4 text-center">
          <h1 className="product-tile-title">
            <span>Thread Affair</span>
            <span>Traveler</span>
          </h1>

          <h2 className="product-tile-subtitle">London fit-Semi-slim</h2>
        </div>
      </header>

      <section className="product-tile-picing text-center">
        <span className="catalog-price d-block">399.00</span>

        <span className="price">
          USD
          <span>299</span>
        </span>
      </section>

      <footer className="product-tile-controls">
        <button className="button" type="button" title="Add to Cart">
          Add to Cart
        </button>
      </footer>
    </article>
  );
}
