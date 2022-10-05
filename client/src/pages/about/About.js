import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import photo from '../../images/about-food.jpg'


const pStyle = {
    margin: '30px'

}

const titleStyle = {
    backgroundColor: "#66ccff",
    padding: "20px",
};

const About = () => {

    return (
        <div className="jumbotron">
            <h1 className="display-4" style={titleStyle}>Eat And Go</h1>
            <img className="steak" src={photo} width="1400px" height="1000px" alt="steak"></img>
            <p className="lead" style={pStyle}>A place where you can talk food. Post a personal review about a restaurant, let others know of your favorite spot to eat out at and your favorite dish. No judgement here, leave your postive or negative experience of restaurants so others will know what to expect going there. <br />Lets eat and go!</p>
            <hr className="my-4"></hr>
            <p></p>
        </div>
    )
}

export default About;