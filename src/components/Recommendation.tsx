import RecommendCard from '../components/common/RecommendCard.tsx';

const Recommendation = () => {

    return (
        <div className="flex justify-center mt-48">
            <div className="bg-contain bg-no-repeat mr-30  w-389" style={{ backgroundImage: "url('https://via.placeholder.com/389X796')" }}>
                <div className="px-48 py-24 text-left w-389">
                    <div className="text-gray-900 font-bold text-base leading-6 tracking-wider mb-5 w-183">Luck Market</div>
                    <div className="text-gray-600 font-bold text-base leading-6 tracking-wider w-183">5 Items</div>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between w-658 px-10 py-10">
                    <div className="text-left flex-grow text-gray-900 font-bold text-xl leading-6 tracking-wider">Recommended for You</div>
                    <div className="flex space-x-15 w-113">
                        <img src="/img/disabled-arrow-left.svg" alt="Button 1" className="w-48 h-48 mr-15" onClick={() => alert('Button 1 clicked!')} />
                        <img src="/img/active-arrow-right.svg" alt="Button 2" className="w-48 h-48" onClick={() => alert('Button 2 clicked!')} />
                    </div>
                </div>
                <div className="bg-gray-300 w-658 h-2 my-10"></div>
                <div className="flex flex-wrap gap-y-15 gap-x-30 p-24 w-658">
                    <RecommendCard
                        imageUrl='https://via.placeholder.com/183X162'
                        title="Product Title"
                        category="Product Category"
                        originalPrice={100}
                        discountedPrice={80}
                    />
                    <RecommendCard
                        imageUrl='https://via.placeholder.com/183X162'
                        title="Product Title"
                        category="Product Category"
                        originalPrice={100}
                        discountedPrice={80}
                    />
                    <RecommendCard
                        imageUrl='https://via.placeholder.com/183X162'
                        title="Product Title"
                        category="Product Category"
                        originalPrice={100}
                        discountedPrice={80}
                    />
                    <RecommendCard
                        imageUrl='https://via.placeholder.com/183X162'
                        title="Product Title"
                        category="Product Category"
                        originalPrice={100}
                        discountedPrice={80}
                    />
                    <RecommendCard
                        imageUrl='https://via.placeholder.com/183X162'
                        title="Product Title"
                        category="Product Category"
                        originalPrice={100}
                        discountedPrice={80}
                    />
                    <RecommendCard
                        imageUrl='https://via.placeholder.com/183X162'
                        title="Product Title"
                        category="Product Category"
                        originalPrice={100}
                        discountedPrice={80}
                    />
                </div>
            </div>
        </div>


    )
};

export default Recommendation;
