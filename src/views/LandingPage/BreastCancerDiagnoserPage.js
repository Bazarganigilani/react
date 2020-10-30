/*eslint-disable*/ import React, { useState } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

// Sections for this page
import SectionBreastTop from "./Sections/SectionBreastTop.js";
import SectionTeam from "./Sections/SectionTeam.js";
import SectionWork from "./Sections/SectionWork.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import { Redirect } from 'react-router-dom'
import { useHistory,useLocation} from "react-router-dom";
import FormData from 'form-data';

import axios from 'axios';
const useStyles = makeStyles(landingPageStyle);


export default function ThermoBreastCancerPage(props) {
  const [is_logged_in, set_is_logged_in] = useState('false');
  const [fname, set_fname] = useState('');
  const [lname, set_lname] = useState('');
  const [email, set_email] = useState('');



  // function goto(e){
  //   props.history.push('/contact-us');
  //   //var uploadScreen=[];
  //  //uploadScreen.push(<SignupPage appContext={props.appContext} />);
  // }

  // const goto = () => {
  //   props.history.push('/contact-us');
  // }
  const history=useHistory();
  const location=useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    // const authResult = new URLSearchParams(window.location.search);
    // const email = authResult.get('email');
    // const hashedPass=authResult.get('pass');


    if (localStorage.getItem('is_logged_in')!=null && localStorage.getItem('is_logged_in')!='false')
    {
      set_email(localStorage.getItem('email'));
      //set_fname(location.state.fname);
      set_fname(localStorage.getItem('fname'));
      set_lname(localStorage.getItem('lname'));
      set_is_logged_in('true');
    }
    else {
      history.push({
         pathname: '/login-page',
         state: { from:'/breast-cancer-diagnoser' }
     });

    }

},[is_logged_in]);

function upload(e)
{

}

  const classes = useStyles();

  function logOut(e){

   set_is_logged_in('false');
   localStorage.setItem('is_logged_in','false')
   console.log(is_logged_in);

  }


  return (
    <div>
      <Header
        color="transparent"
        brand="Online Diagnoser Inc"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}

      />
      <Parallax image={require("assets/img/Breast_Cancer_Diagnoser_Banner_s3.png")} filter="dark">
        <div className={classes.container}>
        {/*
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}></h1>
              <h4>
              </h4>

              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>

            </GridItem>
          </GridContainer>
          */}
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>


        <List className={classes.list} >
          <ListItem className={classes.inlineBlock}>
            <h4 className={classes.block} style={{"color": "darkorange", 'fontWeight': 'bold'}}>{fname} {lname}</h4>
          </ListItem>
          <ListItem className={classes.inlineBlock}>
          <a href="#" onClick={e=> logOut(e)} className={classes.block} style={{"color": "darkorange", 'fontWeight': 'bold'}} >
            Log out
          </a>
          </ListItem>

        </List>


          <SectionBreastTop email={email} />
          {/*
          <SectionTeam />
          <SectionWork />
          */}
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
              {/*
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
              */}
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="/about-us"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="/contact-us"  className={classes.block}>
                    Contact Us
                  </a>
                </ListItem>
                {/*
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
                */}
              </List>
            </div>
            {/*
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com/?ref=mkpr-landing"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
            */}
          </div>
        }
      />
    </div>
  );
}
