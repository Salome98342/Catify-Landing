import { useCart } from '../../hooks/useCart';
import { homeContent } from '../../data/home';
import { Icon } from '../ui/Icon';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';

export function StorePreview() {
  const { count, addItem, bumpKey } = useCart();
  return (
    <section className="band warm">
      <div className="wrap split">
        <Reveal className="section-head" style={{ margin: 0 }}>
          <Eyebrow>{homeContent.storeEyebrow}</Eyebrow>
          <h2>{homeContent.storeTitle}</h2>
          <p className="lead">{homeContent.storeDescription}</p>
        </Reveal>
        <Reveal className="store" aria-label={homeContent.storeAriaLabel}>
          <div className="store-top">
            <strong>{homeContent.storeName}</strong>
            <span className="cart-pill bump" aria-live="polite" key={bumpKey}>
              {homeContent.cartLabel} · {count}
            </span>
          </div>
          <div className="search">
            <Icon name="search" />
            {homeContent.search}
          </div>
          <div className="prods">
            {homeContent.products.map((product) => (
              <article className="prod" key={product.name}>
                <div className="img">{product.initial}</div>
                <div className="body">
                  <b>{product.name}</b>
                  <span className="product-description">
                    {product.description}
                  </span>
                  <div className="row">
                    <span>{product.price}</span>
                    <button
                      className="add"
                      type="button"
                      aria-label={homeContent.addButtonLabel(product.name)}
                      onClick={addItem}
                    >
                      +
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="store-note">{homeContent.storeNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
