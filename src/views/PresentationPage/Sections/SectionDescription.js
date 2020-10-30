import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// @material-ui icons
import Apps from "@material-ui/icons/Apps";
import ViewDay from "@material-ui/icons/ViewDay";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import LocalHospital from "@material-ui/icons/LocalHospital";
import Healing from "@material-ui/icons/Healing";
import Accessible from "@material-ui/icons/Accessible";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={8} sm={8}>
            <h4 className={classes.description}>
              Online Diagnoser Inc is a healthcare company aiming to deliver high quality
              products for diagnosis of severe diseases such as different kinds of cancers based on thermographic analysis.
            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Addressing Crucial Diseases"
                description="Online Diagnoser Inc products aiming to solve severe problems whihc have real and crucial implications on human lives."
                icon={Accessible}
                iconColor="danger"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4} >
              <InfoArea
                title="Novel and Reliable Approaches"
                description="Online Diagnoser Inc employs novel and sophisticated apporches to effectively diagnose major diseases in reliable and acurate way."
                icon={LocalHospital}
                iconColor="warning"
                vertical={true}
                style={{ "fill": "green","background-color": "green" }}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Effective and Accurate Results"
                description="Our products are scientifically proven softwares which have been developed by proficient experts in the field. They have achived an accuracy of at least %98 in our test use-cases."
                icon={Healing}
                iconColor="success"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
