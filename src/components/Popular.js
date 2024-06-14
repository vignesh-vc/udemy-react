import popular1 from "../assets/images/c1.jpg"
import popular2 from "../assets/images/c2.jpg"
import popular3 from "../assets/images/c3.jpg"
import popular4 from "../assets/images/c4.jpg"



function Popular(){
    return(

<section id="most popular">
    <div className="popular">
        <h1 className="popular__title">
            Most Popular
        </h1>
        <p className="popular__subtitle">Pick the best fit</p>

        <div className="popular__container">
            <div class="course__card">
                <img src={popular1} alt="img"/>
                <h3>2023 Python Data Visaulisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>999<del> 2999</del></p>
            </div>

            <div className="course__card">
                <img src={popular2}alt="img"/>
                <h3>Web DevelopmentBootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐</p>
                <p>449<del> 1599</del></p>
            </div>

            <div className="course__card">
                <img src={popular3}alt="img"/>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐⭐</p>
                <p>799<del> 2999</del></p>
            </div>

            <div className="course__card">
                <img src={popular4} alt="img"/>
                <h3>Basic to Advanced Javascript Course</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>1209 <del> 2999</del></p>
            </div>
            <div className="course__card">
                <img src={popular2} alt="img"/>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐⭐</p>
                <p>799<del> 2999</del></p>
            </div>
            <div className="course__card">
                <img src={popular4} alt="img"/>
                <h3>Web DevelopmentBootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐</p>
                <p>449<del> 1599</del></p>
            </div>
            <div className="course__card">
                <img src={popular1} alt="img"/>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Col Steele</p>
                <p>3.9⭐⭐⭐⭐</p>
                <p>799<del> 2999</del></p>
            </div>
            <div className="course__card">
                <img src={popular3} alt="img"/>
                <h3>2023 Python Data Visaulisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>999<del> 2999</del></p>
            </div>
        </div>
    </div>
</section>
    )
}

export default Popular