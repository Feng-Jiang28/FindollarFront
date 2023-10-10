import React from 'react';
import RecommendCard from '../components/common/RecommendCard.tsx';
import '../assets/styles/recommendation.css'

const Recommendation = () => {

    return (
        <div className="container">
            <div className='left-container'>
                {/* <div src="https://via.placeholder.com/389X796" alt="Background Image" >

                </div> */}
                <div className="left-text">
                    <div className='line1'>
                        Luck Market
                    </div>
                    <div className='line2'>
                        5 Items
                    </div>
                </div>


            </div>
            <div className="right-container">
                <div className='button-header'>
                    <div className="text">Recommended for You  </div>
                    <div className="buttons">
                        <img
                            //src='/images/1.png'
                            src="/img/disabled-arrow-left.svg"
                            alt="Button 1"
                            className="btn btn-left"
                            onClick={() => alert('Button 1 clicked!')}
                        />
                        <img
                            src="/img/active-arrow-right.svg"
                            alt="Button 2"
                            className="btn"
                            onClick={() => alert('Button 2 clicked!')}
                        />
                    </div>s
                </div>
                <div className='divide-line'> </div>
                <div className='recommand-innercontainer'>
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