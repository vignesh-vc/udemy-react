//recommended course
import sale1 from "../assets/images/c1.jpg"
import sale2 from "../assets/images/c2.jpg"
import sale3 from "../assets/images/c3.jpg"
import sale4 from "../assets/images/c4.jpg"

function Recommeded(){
    return(
        <section id="course">
    <div className="recommended">
        <h1 className="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>

        <div className="recommended__container">
            <div className="course__card">
                <img src={sale1} alt="courseimg"/>
                <h3>2023 Python Data Visaulisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>999<del> 2999</del></p>
            </div>

            <div class="course__card">
                <img src={sale2}alt="courseimg"/>
                <h3>Web DevelopmentBootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐</p>
                <p>449<del> 1599</del></p>
            </div>

            <div class="course__card">
                <img src={sale3}alt="courseimg"/>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐⭐</p>
                <p>799<del> 2999</del></p>
            </div>

            <div class="course__card">
                <img src={sale4} alt="courseimg"/>
                <h3>Basic to Advanced Javascript Course</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>1209 <del> 2999</del></p>
            </div>
        </div>
    </div>
</section>

    )
}

export default Recommeded