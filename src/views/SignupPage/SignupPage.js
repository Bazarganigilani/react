/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import axios from 'axios';
import { useHistory,useLocation } from "react-router-dom";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";

import image from "assets/img/header_double.png";

const useStyles = makeStyles(signupPageStyle);

export default function SignUpPage({ ...rest }) {
  const [checked, setChecked] = React.useState([1]);
  const[prompt,set_prompt]=React.useState('')
  const location=useLocation();
  const history=useHistory();

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };


  const register= e=>{

    set_prompt('');

    var b=[];

    let data={
      'email':email.value,
      'password':pass.value,
      'dob':dob.value,
      'fname':fname.value,
      'lname':lname.value
    };

    let mess='';
    if(data['email'].length==0){
      b.push('Email can not be empty!');
      b.push(<br/>);

    }
    if(data['password'].length==0){
      b.push('Password can not be empty!');
      b.push(<br/>);

    }
    if(data['dob'].length==0){

      b.push('Date of birth can not be empty!');
      b.push(<br/>);

    }
    if(data['fname'].length==0){
      b.push('First name can not be empty!');
      b.push(<br/>);

    }
    if(data['lname'].length==0){
      b.push('Last name can not be empty!');
      b.push(<br/>);
    }

    var email_pattern = /[^@]+@[^@]+/;
    var date_pattern = /[\d]{2}\/[\d]{2}\/[\d]{4}/;

    if(data['email'].length!=0 && !email_pattern.test(data['email']))
    {

      b.push('Email is not valid!');
      b.push(<br/>);

    }

    if(data['dob'].length!=0 && !date_pattern.test(data['dob']))
    {
      b.push('Date of birth should be in the format of dd/mm/yyyy!');
      b.push(<br/>);
    }

    if(!chckbox.checked)
    {
      b.push('You should agree to the terms and conditions!');
      b.push(<br/>);
    }

    if(b.length!=0)
    {
      set_prompt(b);
      return;
    }

    let headers={
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }};
    axios.post('http://'+process.env.REACT_APP_BCD_API_HOST+':'+process.env.REACT_APP_BCD_API_PORT+'/api/register/',data,headers)
          .then(res =>{
            if (res.status!=200) {
      throw new Error('Network response was not ok');}
    return res;})
    .then(res=>{
      const resp=res.data.res;
      const message=res.data.message;

      if(resp == true)
      {
        console.log('Registration was successful!');
        set_prompt(<div style={{"color":"#ff9800"}}>Registration was successful!</div>);
      }
      else {
        console.log('Registration was unsuccessful!');
        set_prompt(message);
      }
    });
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Online Diagnoser Inc"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        {...rest}
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
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Register</h2>
                <CardBody>
                  <GridContainer justify="center">
                  {/*
                    <GridItem xs={12} sm={5} md={5}>
                      <InfoArea
                        className={classes.infoArea}
                        title="Marketing"
                        description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                        icon={Timeline}
                        iconColor="rose"
                      /><a style={{"color":"#ff9800"}} href="#pablo">terms and conditions</a>
                      <InfoArea
                        className={classes.infoArea}
                        title="Fully Coded in HTML5"
                        description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                        icon={Code}
                        iconColor="warning"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Built Audience"
                        description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                        icon={Group}
                        iconColor="info"
                      />
                    </GridItem>
                    */}
                    <GridItem xs={12} sm={5} md={5}>
                      <div className={classes.textCenter}>
                        <Button justIcon round color="twitter">
                          <i className={classes.socials + " fab fa-twitter"} />
                        </Button>
                        {` `}
                        <Button justIcon round color="dribbble">
                          <i className={classes.socials + " fab fa-dribbble"} />
                        </Button>
                        {` `}
                        <Button justIcon round color="facebook">
                          <i
                            className={classes.socials + " fab fa-facebook-f"}
                          />
                        </Button>
                        {/*
                        {` `}
                        <h4 className={classes.socialTitle}>or be classical</h4>
                        */}
                      </div>
                      <form className={classes.form}>
                      {prompt.length!=0
                      ?<div  style={{"color": "red", 'fontWeight': 'bold','marginTop':
                      '30px'}}>{prompt}</div>
                      :<div></div>
                      }

                        <CustomInput
                        id='fname'
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "First Name..."
                          }}
                        />
                        <CustomInput
                        id='lname'
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Last Name..."
                          }}
                        />
                        <CustomInput
                        id='email'
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Email..."
                          }}
                        />
                        <CustomInput
                        id='dob'
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <CalendarToday className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Date of Birth..."
                          }}
                        />
                        <CustomInput
                        id='pass'
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses
                          }}
                          inputProps={{
                            type:'password',
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            placeholder: "Password..."
                          }}
                        />
                        <FormControlLabel
                          classes={{
                            label: classes.label
                          }}
                          control={
                            <Checkbox
                            id='chckbox'
                              tabIndex={-1}
                              onClick={() => handleToggle(1)}
                              checkedIcon={
                                <Check style={{"fill":"darkorange"}} className={classes.checkedIcon} />
                              }
                              icon={<Check style={{"fill":"darkorange"}} className={classes.uncheckedIcon} />}
                              classes={{
                                checked: classes.checked,
                                root: classes.checkRoot
                              }}
                              checked={checked.indexOf(1) !== -1 ? true : false}
                            />
                          }
                          label={
                            <span  style={{"color":"#ff9800"}}>
                              I agree to the{" "}
                              <a style={{"color":"#ff9800"}} href="#">terms and conditions</a>.
                            </span>
                          }
                        />
                        <div className={classes.textCenter}>
                          <Button onClick={e=>register(e)} style={{"backgroundColor":"#ff9800"}} round >
                            Get started
                          </Button>
                        </div>

                        <GridItem style={{"marginTop":'20px'}}>
                          <List className={classes.list} align='center'>
                          {/*
                            <ListItem className={classes.inlineBlock}>
                              <a
                                href="https://www.creative-tim.com/?ref=mkpr-signup"
                                target="_blank"
                                className={classes.block}
                              >
                                Creative Tim
                              </a>
                            </ListItem>
                            */}

                            <ListItem className={classes.inlineBlock}>
                              <a
                                href="/"
                                className={classes.block} style={{"color":"#ff9800"}}
                              >
                                Back to home page
                              </a>
                            </ListItem>
                            {/*
                            <ListItem className={classes.inlineBlock}>
                              <a
                                href="https://www.creative-tim.com/license?ref=mkpr-signup"
                                target="_blank"
                                className={classes.block}
                              >
                                Licenses
                              </a>
                            </ListItem>
                            */}
                          </List>

                        </GridItem>


                      </form>

                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>



          </GridContainer>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.left}>
                <List className={classes.list}>
                {/*
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=mkpr-signup"
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
                      href="https://www.creative-tim.com/license?ref=mkpr-signup"
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
                  href="https://www.creative-tim.com?ref=mkpr-signup"
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
    </div>
  );
}
