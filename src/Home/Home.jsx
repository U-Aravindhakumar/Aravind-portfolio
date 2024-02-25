import { Component } from "react";
import resume from "../assets/SaranResume.pdf";
import jsIcon from "../assets/icons/js.png";
import cssIcon from "../assets/icons/css.png";
import htmlcon from "../assets/icons/html.png";
import expressIcon from "../assets/icons/expressjs.png";
import reactIcon from "../assets/icons/reactjs.png";
import bootstrapIcon from "../assets/icons/bootstrap.png";
import nodeIcon from "../assets/icons/nodejs.png";
import ejsIcon from "../assets/icons/ejs.png";
import mongodbIcon from "../assets/icons/mongodb.png";
import npmIcon from "../assets/icons/npm.png";
import angularIcon from "../assets/icons/angular.png";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import githubIcon from "../assets/icons/github.svg";
import nodejsSvg from "../assets/icons/nodejs.svg";
import expressSvg from "../assets/icons/express-js.svg";
import mongodbSvg from "../assets/icons/mongodb.svg";
import ejsSvg from "../assets/icons/ejs.svg";
import angularSvg from "../assets/icons/angular.svg";
import bootstrapSvg from "../assets/icons/bootstrap.svg";
import tailwindcssSvg from "../assets/icons/tailwindcss.svg";
import angularmatSvg from "../assets/icons/angularmat.svg";
import emailSvg from "../assets/icons/email.svg";
import myImage from "../assets/aravindmsd.jpg";
import fooddeliviry from "../assets/projectImages/download.jpg";
import countryinfoimg from "../assets/projectImages/t20.png";
import bloodharmonyimg from "../assets/projectImages/bloodharmony.png";
import logo from "../assets/Alogo.png";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        {/* NAVBAR SECTION */}
        <nav className="navbar navbar-dark  nav-bg-color navbar-expand-md px-3">
          <a href="#home" className="navbar-brand fs-3 fw-bold">
            <img
              src={logo}
              alt=""
              style={{ width: "50px", paddingBottom: "5px" }}
            />{" "}
            Aravindhakumar
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbar"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* MAIN SECTION */}
        <div className="head" id="home">
          <div className="container-fluid">
            <div className="row mx-auto">
              <div className="col-sm  pt-5">
                <h1 className="header fw-bolder">
                  I'm Aravindhakumar, Skilled in
                  <br />{" "}
                  <span style={{ color: "#A6B1E1" }}>
                    <Typewriter
                      words={[
                        "Data Science",
                        "Data Analytics",
                        "Machine Learning",
                      ]}
                      loop={100000000000}
                      cursor
                      cursorStyle="|"
                      typeSpeed={150}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <div className="py-5 resumemain" data-aos="fade-up">
                  <a
                    className="resume"
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                </div>
              </div>
              <div className="col-sm text-center  pt-5 ">
                <div data-aos="fade-right" data-aos-duration="1000">
                  <a
                    href="https://github.com/U-Aravindhakumar"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-dark m-3 px-4">
                      <img src={githubIcon} style={{ width: "35px" }} alt="" />
                      Github
                    </button>
                  </a>
                </div>

                <br />
                <div data-aos="fade-right" data-aos-duration="1500">
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/u-aravindhakumar-15b983272/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-light m-3 px-3">
                      <img
                        src={linkedinIcon}
                        alt=""
                        style={{ width: "35px" }}
                      />
                      Linked In
                    </button>
                  </a>
                </div>

                <br />
                <div data-aos="fade-right" data-aos-duration="2000">
                  <a
                    href="mailto:msdaravind92@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-light m-3 px-4">
                      <img
                        src={emailSvg}
                        alt=""
                        style={{ width: "35px", paddingRight: "5px" }}
                      />
                      Email
                    </button>
                  </a>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT ME SECTION */}
        <div className="container-fluid" id="about">
          <div className="row part2 pb-5 pt-5 align-items-center">
            {" "}
            <h1
              className="text-center py-3"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              About me
            </h1>
            <div
              className="col-sm text-center  pt-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {" "}
              <img
                src={myImage}
                className="img-fluid myImage w-75"
                alt=""
                srcSet=""
              />
            </div>
            <div
              className="col-sm text-center  pt-5"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <p className="px-3 pt-3 intro">
                Hey there, I'm Aravindhakumar! 👋 i am currently studing in my
                bachelor degree with a strong passion for data science and it's
                transformative potantial. I holding my analytical skilla and
                devloped a solid foundation in ststistics, programming and
                machine learning. <br /> <br /> Exploring the world if data: My
                fascination with extracting meaningful insigts from raw data has
                driven me to delve into various projects that shoecase my
                abilities in data analysis and visualization. <br /> <br />I am
                adept at tools like Python,SQL,Power-BI,Tableau and have
                hands-on experience with popular data science libraries and
                frameworks.
              </p>
            </div>
          </div>
        </div>
        {/* Projects SECTION */}
        <div id="projects" className="container-fluid pt-5 projects">
          <h1
            className="text-center py-3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Projects
          </h1>
          <div className="row ">
            <div className="col-sm-4">
              <div
                className="card mb-3 text-bg-light"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <img src={fooddeliviry} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Food Deliviry Time prediction</h5>
                  <div className="d-flex flex-row mb-3" id="builtwith">
                    <div className="p-2">
                      <img
                        src="https://pluspng.com/img-png/python-logo-png-open-2000.png"
                        alt=""
                        width="35px"
                        height="35px"
                      />
                    </div>
                    <div className="p-2">
                      <img
                        src="https://avatars2.githubusercontent.com/u/365630?v=3&s=400"
                        alt=""
                        width="35px"
                        height="35px"
                      />
                    </div>
                    <div className="p-2">
                      <img
                        src="https://optivia.com.au/wp-content/uploads/2020/12/tableau.jpg"
                        alt=""
                        width="35px"
                        height="35px"
                      />
                    </div>
                    <div className="p-2">
                      <img
                        src="https://everipedia-storage.s3.amazonaws.com/ProfilePicture/en/Plotly__a0a015/Plotly-logo-01-square.png__95275.png"
                        alt=""
                        width="35px"
                        height="35px"
                      />
                    </div>
                    {/* <div className="p-2">
                      <img src={bootstrapSvg} alt="" />
                    </div> */}
                  </div>
                  <div className="card-text">
                    <ul>
                      <li>
                        Food Deliviry Time Prediction Project is used to predict
                        the Deliviry time by using previous dataset and Machine
                        learning model.
                      </li>
                      <li>
                        This Project is based on Distance B/W Restarunt and User
                        location,Deliviry-man Age and Retings to predict the
                        Deliviry Time.
                      </li>
                    </ul>
                  </div>
                  <a
                    href="https://public.tableau.com/app/profile/aravindhakumar.u/viz/AmazonSalesAnalysis_17086264614540/Dashboard1?publish=yes"
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-dark mb-2"
                  >
                    Tableau link
                  </a>
                  <br />
                  <a
                    href="https://github.com/U-Aravindhakumar/food-delivery-time-prediction"
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-dark"
                  >
                    <img src={githubIcon} alt="" />
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="card mb-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img src={countryinfoimg} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">T20 WC Analysis</h5>
                  <div className="d-flex flex-row mb-3" id="builtwith">
                    <div className="p-2">
                      <img
                        src="https://pluspng.com/img-png/python-logo-png-open-2000.png"
                        alt=""
                        width="35px"
                        height="35px"
                      />
                    </div>
                    <div className="p-2">
                      <img
                        src="https://optivia.com.au/wp-content/uploads/2020/12/tableau.jpg"
                        alt=""
                        width="35px"
                        height="35px"
                      />
                    </div>
                    <div className="p-2">
                      <img
                        src="https://everipedia-storage.s3.amazonaws.com/ProfilePicture/en/Plotly__a0a015/Plotly-logo-01-square.png__95275.png"
                        alt=""
                        width="35px"
                        height="35px"
                      />
                    </div>
                  </div>
                  <div className="card-text">
                    <ul>
                      <li>
                        Analysing the T20 worldcup 2022 by using the all match
                        datas including group stages. To analyze the who is best
                        batter and bower,who score more runs and who takes more
                        no.of wickets,which team won high matchs,who won
                        multiple awards by using Python and tablaue.
                      </li>
                    </ul>
                  </div>
                  <a
                    href="https://public.tableau.com/app/profile/aravindhakumar.u/viz/worldcupplayers/Dashboard1?publish=yes"
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-dark mb-2"
                  >
                    Tableau link
                  </a>
                  <br />
                  <a
                    href="https://github.com/U-Aravindhakumar/T20-worldcup-2022-analysis"
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-dark"
                  >
                    <img src={githubIcon} alt="" />
                    source code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div
                className="card mb-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <img
                  src="https://agrigro.com/wp-content/uploads/2021/02/elements-of-crop-production_featimg.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Crop production Analysis in IND
                  </h5>
                  <div className="d-flex flex-row mb-3" id="builtwith">
                    <div className="p-2">
                      <img
                        src="https://pluspng.com/img-png/python-logo-png-open-2000.png"
                        alt=""
                        width="35px"
                        height="35px"
                      />
                    </div>
                    <div className="p-2">
                      <img
                        src="https://optivia.com.au/wp-content/uploads/2020/12/tableau.jpg"
                        alt=""
                        width="35px"
                        height="35px"
                      />
                    </div>
                    {/* {/* <div className="p-2">
                      <img src={angularmatSvg} alt="" />
                    </div> */}
                    <div className="p-2">
                      <img
                        src="https://everipedia-storage.s3.amazonaws.com/ProfilePicture/en/Plotly__a0a015/Plotly-logo-01-square.png__95275.png"
                        alt=""
                        width="35px"
                        height="35px"
                      />
                    </div>
                  </div>
                  <div className="card-text">
                    <ul>
                      <li>
                        Crop production Analysis in India project is based on
                        the year 1997 to 2019 only.
                      </li>
                      <li>
                        In this project is used to analyze the crop production
                        state by state, highly producted crop, highest
                        production year, production in seation by seation.Then
                        it's used to Compare the crop production in zone wise.
                      </li>
                    </ul>
                  </div>
                  <a
                    href="https://public.tableau.com/app/profile/aravindhakumar.u/viz/cropanalysisinindia/Dashboard1?publish=yes"
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-dark mb-2"
                  >
                    Tableau link
                  </a>
                  <br />
                  <a
                    href="https://github.com/U-Aravindhakumar/Crop-Production-Analysis-in-India"
                    rel="noreferrer"
                    target="_blank"
                    className="btn btn-dark"
                  >
                    <img src={githubIcon} alt="" />
                    source code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SKILLS SECTION*/}
        <div id="skills" className="container-fluid skills">
          <h1
            className="text-center py-3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Skills
          </h1>
          <div className="row">
            <div className="col-sm">
              <div id="skill-icon">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                />
                <img
                  src="https://www.pngrepo.com/download/373938/numpy.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1100"
                />
                <img
                  src="https://www.programsbuzz.com/sites/default/files/logo/pandas-logo.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                />
                <img
                  src="https://numfocus.org/wp-content/uploads/2016/07/Matplotlib_Logo_191209.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1300"
                />
                <img
                  src="https://www.corpnce.com/wp-content/themes/archi/dataimg/sql1.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1400"
                />
                <img
                  src={mongodbIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                />
                <img
                  src="https://www.tigloo.es/wp-content/uploads/2021/08/Power_BI_Logo-1.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1600"
                />
                <img
                  src={htmlcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1700"
                />
                <img
                  src={cssIcon}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1800"
                />
                <img
                  src="https://optivia.com.au/wp-content/uploads/2020/12/tableau.jpg"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="1900"
                />
                <img
                  src="https://avatars2.githubusercontent.com/u/365630?v=3&s=400"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                />
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT SECTION */}
        <div className="container-fluid contact" id="contact">
          <h1 className="text-center py-3">Contact</h1>
          <div className="row ">
            <div className="col-sm">
              <p>
                <a href="tel:+91 9360379653">Phone:9360379653</a>
              </p>
              <p>
                <a href="mailto:msdaravind92@gmail.com">
                  Email:msdaravind92@gmail.com
                </a>
              </p>
            </div>
            <div className="col-sm">
              <p>
                <a
                  href="https://www.linkedin.com/in/u-aravindhakumar-15b983272/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedinIcon} alt="" />
                  Linkedin
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/U-Aravindhakumar"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="" />
                  Github
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/aravind._.msd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagramIcon} alt="" />
                  Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/qr/E2365O26SS5HD1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsappIcon} alt="" />
                  Whatsapp
                </a>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm text-center">
              <h4>© Aravind Data-Book</h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
