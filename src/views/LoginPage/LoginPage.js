/*eslint-disable*/
import React, { useState } from "react";
import { useHistory,useLocation } from "react-router-dom";
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import green from "@material-ui/core/colors//green";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { Redirect } from 'react-router-dom'
import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.js";
import axios from 'axios';
import image from "assets/img/header_double.png";
//import {useLocation} from "react-router-dom";

const useStyles = makeStyles(loginPageStyle);

const theme = createMuiTheme({
palette: {
  primary: {
    main: green[500],
  },
  secondary: {
    main:  green[500],
  },
},
});

export default function LoginPage() {
  const[prompt,set_prompt]=useState('');

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    if (location.state==undefined)
    {
      history.push('/');
    }


  });
  const classes = useStyles();
  const history = useHistory();
  const location=useLocation();
  function sign_up(e)
  {
    var from='/';
    if (location.state!=undefined)
    {
      from=location.state.from;
    }
    history.push({
       pathname: '/signup-page',
       state: { from: from }
   });
  }
  function sign_in(e)
  {
    let data={
      'email':email.value,
      'password':pass.value
    };

    var from='/';
    if (location.state!=undefined)
    {
    from=location.state.from;
    console.log('from is');
    console.log(from);
  }

    let headers={
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }};
        console.log('http://'+process.env.REACT_APP_BCD_API_HOST+':'+process.env.REACT_APP_BCD_API_PORT+'/api/log_in/');
    axios.post('http://'+process.env.REACT_APP_BCD_API_HOST+':'+process.env.REACT_APP_BCD_API_PORT+'/api/log_in/',data,headers)
          .then(res =>{
            if (res.status!=200) {
      throw new Error('Network response was not ok');}
    return res;})
    .then(res=>{
      const resp=res.data.response;
      if(resp == true)
      {
        console.log('Login Sucessful!');
        set_prompt('');
        localStorage.setItem('fname', res.data.fname);
        localStorage.setItem('lname', res.data.lname);
        localStorage.setItem('email', res.data.email);
        localStorage.setItem('is_logged_in', 'true');

        history.push({
           pathname: from
       });
      }
      else {
        set_prompt(res.data.message);
      }
    });

  }

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Online Diagnoser Inc"
        links={<HeaderLinks dropdownHoverColor="info" />}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader
                    color="transparent"
                    signup
                    className={classes.cardHeader}
                    style={{"backgroundColor": "#ff9800"}}
                  >
                    <h4 className={classes.cardTitle}>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-google-plus-g" />
                      </Button>
                    </div>
                  </CardHeader>
                  {/*
                  <p className={classes.description + " " + classes.textCenter}>
                    Or Be Classical
                  </p>
                  */}
                  <CardBody signup>

                  {/*
                    <CustomInput
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: e => change1(e),
                        placeholder: "First Name...",
                        type: "text",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Face className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                      InputLabelProps={{
  className: classes.cssLabels
}}
                    />
                    */}
                    {prompt.length!==0
                    ?<div  style={{"color": "red", 'fontWeight': 'bold'}}>{prompt}</div>
                    :<div></div>
                  }

                    <CustomInput
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: "Email...",
                        type: "email",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: "Password",
                        type: "password",
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon className={classes.inputIconsColor}>
                              lock_utline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off"
                      }}
                    />
                  </CardBody>
                  <div className={classes.textCenter}>
                    <Button simple color="transparent" style={{"color": "#ff9800"}} onClick={e => sign_in(e)} size="lg">
                      Sign in
                    </Button><br/>

                    <Button simple color="transparent" style={{"color": "#ff9800"}} onClick={e => sign_up(e)} size="lg">
                      Not registered! Sign up
                    </Button>
                  </div>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          className={classes.footer}
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                {/*
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=mkpr-login"
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
                    <a
                      href="/contact-us"
                      className={classes.block}
                    >
                      Contact Us
                    </a>
                  </ListItem>
                  {/*
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=mkpr-login"
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
                  href="https://www.creative-tim.com?ref=mkpr-login"
                  target="_blank"
                >
                  Creative Tim
                </a>{" "}
                for a better web
              </div>
              */}
            </div>
          }
        />
      </div>
    </div>
  );
}
