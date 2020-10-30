import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// library used for cool animations
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import contentStyle from "assets/jss/material-kit-pro-react/views/presentationSections/contentStyle.js";
// images
import presentationiPad from "assets/img/assets-for-demo/presentationViewSectionComponent/presentation_ipad2.png";
import presentationiPadComments from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-comments.png";
import presentationiPadTable from "assets/img/assets-for-demo/presentationViewSectionComponent/ipad-table.png";

const useStyles = makeStyles(contentStyle);

export default function SectionContent() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={4}>
            <div className={classes.sectionDescription}>
              <h3 className={classes.title}>Versatile on Various Devices</h3>
              <h6 className={classes.description}>
                Our products are tailored for various gadgets
              </h6>
              <h5 className={classes.description}>
                Our products have been developed with the latest technologies in the field. They work neatly with any types of devices like PC, tablets, and mobile phones.
              </h5>
            </div>
          </GridItem>
          <GridItem md={7} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <div className={classes.animeAreaImg}>
                <ScrollAnimation animateIn="animate__fadeInUp">
                  <img
                    src={presentationiPadComments}
                    alt="iPad comments"
                    className={classes.areaImg}
                  />
                </ScrollAnimation>
              </div>
              <div className={classes.animeInfoImg}>
                <ScrollAnimation animateIn="animate__fadeInUp">
                  <img
                    src={presentationiPadTable}
                    alt="iPad table"
                    className={classes.infoImg}
                  />
                </ScrollAnimation>
              </div>
              <img
                className={classes.ipadImg}
                src={presentationiPad}
                alt="iPad"
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
