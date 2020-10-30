import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import componentsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/componentsStyle.js";

import macbookImage from "assets/img/assets-for-demo/presentationViewSectionComponent/laptop-basics.png";
import flirImage from "assets/img/assets-for-demo/presentationViewSectionComponent/FLIR.png";
import shoppingCartImage from "assets/img/assets-for-demo/presentationViewSectionComponent/table.jpg";
import shareButtonImage from "assets/img/assets-for-demo/presentationViewSectionComponent/share-btn.jpg";
import cardImage from "assets/img/assets-for-demo/presentationViewSectionComponent/coloured-card-with-btn.jpg";
import twitterImage from "assets/img/assets-for-demo/presentationViewSectionComponent/coloured-card.jpg";
import iconsImage from "assets/img/assets-for-demo/presentationViewSectionComponent/social-row.jpg";
import repostImage from "assets/img/assets-for-demo/presentationViewSectionComponent/pin-btn.jpg";

const useStyles = makeStyles(componentsStyle);

export default function SectionComponents() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={5} lg={5} sm={12} xs={12}>
            <h3 className={classes.title}>Advantages</h3>
            <h6 className={classes.description}>
              The benefit of using our products
            </h6>
            <h5 className={classes.description}>
              Online Daignoser Inc aims to offer a wide range of products particularly in healthcare industry to addrss the uncertainity among people who want to assess quckly, easilly and accurately if they have a potential severe disease. This helps them to procced as quickly as possible for a cure and mitigate the upcomming complications as the consequence of continued illness.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={6} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <img
                src={macbookImage}
                alt="macbook"
                className={classes.componentsMacbook}
              />
              {/*
              <img
                src={flirImage}
                alt="macbook"
                className={classes.shoppingCart}
              />
              <img
                src={shareButtonImage}
                alt="macbook"
                className={classes.shareButton}
              />
              <img
                src={cardImage}
                alt="macbook"
                className={classes.cardImage}
              />
              <img
                src={twitterImage}
                alt="macbook"
                className={classes.twitterImage}
              />
              <img
                src={iconsImage}
                alt="macbook"
                className={classes.iconsImage}
              />
              <img
                src={repostImage}
                alt="macbook"
                className={classes.repostImage}
              />
              */}
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
