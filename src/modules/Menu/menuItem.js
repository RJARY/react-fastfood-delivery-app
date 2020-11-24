// import React from 'react';
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const MenuItem = ({ data, addToCart }) => {
    // const [count, setCount] = useState(0);
    const op = Number(data.price);
    const d = Number(data.discount);
    let finalPrice = op - (Number(op) * Number(d) / 100);
    data.discountPrice = finalPrice;
    return (
        <div className="col-xs-12 col-md-12 card-container">
            <div className="card">
                <div className="card-block">
                <div>
                <img src={data.image} height="120px" width="100px" alt="itemImages" /></div>
                    <span className="card-title">{data.name}</span>
                    <br />
                    <StarRatingComponent
                        name="rating"
                        starCount={5}
                        value={Number(data.rating)}
                    />
                    <br />
                    {data.discount > 0 ? (
                        <div>
                            {'Price - '}<span className="card-price original-price">{'₹' + data.price}</span>
                            &nbsp;&nbsp;&nbsp;
                            <span className="card-price discounted-price">{'₹' + finalPrice + ' (-' + data.discount + '%)'}</span>
                        </div>
                    ) : (
                            <span className="card-price">{'Price - ₹' + data.price}</span>
                        )}
                    <hr />
                    <span className="ingredients">{'Ingredients: ' + data.ingredients.toString()}</span>
                </div>
            </div>
            {/* <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                    Click me
            </button> */}
            <button onClick={e => addToCart(data)}>ADD</button>
            
        </div>
    );
};

export default MenuItem;
