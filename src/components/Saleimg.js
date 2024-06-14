//Sale img
import sale from "../assets/images/sale-image.jpg"


function Sale() {
    return (

        <div class="sale-image">
            <img src={sale} alt="saleimg"/>
                <div className="sale-image__offer">
                    <h1 className="sale-image__title">Udemy Flash Sale! 24 hours to save.</h1>
                    <p>Get the top courses for just 499.Just one day to save but a lifetime to learn</p>
                </div>
        </div>
    )
}

export default Sale
