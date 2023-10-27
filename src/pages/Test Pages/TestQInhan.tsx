import ProductCard from '@/components/common/ProductCard.tsx';

const TestQinhan = () => {

  return(
    <div>
      <ProductCard
                imageUrl='https://via.placeholder.com/183X162'
                title="Awesome Brand - Cool product with nice colo…"
                originalPrice="100.000"
                discountedPrice="80.00"
                discountPercentage={20}
                rating={4.5}
                location="Location"
                soldCount={100}
            />
    </div>
  );

};

export default TestQinhan;
