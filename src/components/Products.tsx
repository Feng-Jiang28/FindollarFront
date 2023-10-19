import ProductCard from '../components/common/ProductCard.tsx';


const Products = () => {
    return (
        <div>
            <ProductCard
                imageUrl='https://via.placeholder.com/183X162'
                title="Product Title"
                originalPrice={100}
                discountedPrice={80}
                discountPercentage={20}
                rating={4.5}
                location="Location"
                soldCount={100}
            />
        </div>
    );
}

export default Products;