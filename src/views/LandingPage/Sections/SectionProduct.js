import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import Assessment from "@material-ui/icons/Assessment";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Accessibility from "@material-ui/icons/Accessibility";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import ThermoBreastCancerBadge from "assets/img/Thermo_Breast_Cancer_Badge.png";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BreastCancerDiagnoserBadge from "assets/img/Breast_Cancer_Diagnoser_Badge.png";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}><img src={BreastCancerDiagnoserBadge}/>   Breast Cancer Diagnoser</h2>
          <h5 className={classes.description}>
          Breast Cancer Diagnoser delivers a very reliable, accurate, and convinient tool for breat cancer dagnosis. It employs a very promissing thermographic approch which has been proven to excell other methods in temrs of accuracy of predictions.
          The backend engine of Thermo Breast Cancer utilizes Neural Network whihc have been trained on adequate datasets. The accuracy of the backend engine was estiated by rigorouse approcch and our use-test cases it is more than %99.
          </h5>
          {/*
          <Button
            color="danger"
            size="lg"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
            target="_blank"
          >
            <i className="fas fa-play" />
            Watch video
          </Button>
          */}
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Accuracy"
              description="Breast Cancer Diagnoser backend engine is powered by accurate Neural Networks achiving high accuracy of %99 by rigorous approches in our evaluation tests."
              icon={CheckCircle}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Convinience"
              description="Breast Cancer Diagnoser is a contact-less device which anyone can use it to diagnose accurately for breast cancer disease. It is convinient tool and can be accessed through different devices such as PCs, Tablets, and Smart-Phones."
              icon={Accessibility}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Detailed Assessment"
              description="Breast Cancer Diagnoser assesses you for the diagnosis of the breast cancer. It gives detailed report on existence of cancer on either of left or right breasts."
              icon={Assessment}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={4} md={4}>
          <br/>
            <Button href="/breast-cancer-diagnoser" style={{"backgroundColor": "darkorange"}}>Evaluate</Button>
          </GridItem>
          </GridContainer>
      </div>
    </div>
  );
}
