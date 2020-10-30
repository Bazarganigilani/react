//https://stackoverflow.com/questions/40589302/how-to-enable-file-upload-on-reacts-material-ui-simple-input
//uploading files in the backend
//https://stackoverflow.com/questions/4083702/posting-a-file-and-associated-data-to-a-restful-webservice-preferably-as-json
import React,{ useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import Assessment from "@material-ui/icons/Assessment";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Accessibility from "@material-ui/icons/Accessibility";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import BreastCancerDiagnoserBadge from "assets/img/Breast_Cancer_Diagnoser_Badge.png";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { borders } from '@material-ui/system';
import FormData from 'form-data';
import axios from 'axios';
import List from "@material-ui/core/List";
import Grid from '@material-ui/core/Grid';
import ListItem from "@material-ui/core/ListItem";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from "@material-ui/core/Box";
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionBreastTop(props) {

  const classes = useStyles();
  const[prompt1,set_prompt1]=useState('');
  const[prompt2,set_prompt2]=useState('');
  const[prompt3,set_prompt3]=useState('');
  const[prompt4,set_prompt4]=useState('');
  const[prompt5,set_prompt5]=useState('');
  const[analysis,set_analysis]=useState({});
  const[first_image,set_first_image]=useState('');
  const[progress,set_progress]=useState('false');

  function click1(e)
  {

    if(document.getElementById('button3').files[0]==undefined)
    {
      set_prompt3('File is not chosen!');
    }
    else {
      set_prompt3('');
    }
    if(document.getElementById('button2').files[0]==undefined)
    {
      set_prompt2('File is not choosen!');
    }
    else {
      set_prompt2('');
    }
    if(document.getElementById('button1').files[0]==undefined)
    {
      set_prompt1('File is not choosen!');
    }
    else {
      set_prompt1('');
    }

    if(document.getElementById('button4').files[0]==undefined)
    {
      set_prompt4('File is not choosen!');
    }
    else {
      set_prompt4('');
    }

    if(document.getElementById('button5').files[0]==undefined)
    {
      set_prompt5('File is not choosen!');
    }
    else {
      set_prompt5('');
    }

    if(document.getElementById('button1').files[0]==undefined || document.getElementById('button2').files[0]==undefined
  || document.getElementById('button3').files[0]==undefined || document.getElementById('button4').files[0]==undefined || document.getElementById('button5').files[0]==undefined)
    {return;
    }

    set_progress('true');

    var file1=document.getElementById('button1').files[0];
    var file2=document.getElementById('button2').files[0];
    var file3=document.getElementById('button3').files[0];
    var file4=document.getElementById('button4').files[0];
    var file5=document.getElementById('button5').files[0];

    var data={}
    data['email']=props.email
    var reader1 = new FileReader();
    reader1.onload = function(){
      var dataURL = reader1.result;
      data['file1_base64']=dataURL
    };
    reader1.readAsDataURL(file1);

    var reader2 = new FileReader();
    reader2.onload = function(){
      var dataURL = reader2.result;
      data['file2_base64']=dataURL
    };
    reader2.readAsDataURL(file2);

    var reader3 = new FileReader();
    reader3.onload = function(){
      var dataURL = reader3.result;
      data['file3_base64']=dataURL
    };
    reader3.readAsDataURL(file3);

    var reader4 = new FileReader();
    reader4.onload = function(){
      var dataURL = reader4.result;
      data['file4_base64']=dataURL
    };
    reader4.readAsDataURL(file4);

    var reader5 = new FileReader();
    reader5.onload = function(){
      var dataURL = reader5.result;
      data['file5_base64']=dataURL

      let headers={
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
          }};

      console.log('data is:');

      console.log(data);

      axios.post('http://'+process.env.REACT_APP_BCD_API_HOST+':'+process.env.REACT_APP_BCD_API_PORT+'/api/evaluate/',data,headers)
            .then(res =>{
              if (res.status!=200) {
                throw new Error('Network response was not ok');
      }
      return res;}).
      then(res=>
      {
        set_progress('false');
        set_analysis(res.data)
        set_first_image('data:image/jpeg;base64,'+res.data['first_image'])
        console.log(res.data);
      })

    };
    reader5.readAsDataURL(file5);


  }

  function onFileUpload(e) {

// var input = e.target;
//
// var reader = new FileReader();
//
//
// reader.onload = function(){
//   var dataURL = reader.result;
//   //var arrayBuffer = reader.result;
//
//   let data={
//     'base64_img':dataURL,
//     'email':props.email
//   };
//
//   let headers={
//       headers: {
//           'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//       }};
//
//   axios.post('http://127.0.0.1:9000/api/get_file/',data,headers)
//         .then(res =>{
//           if (res.status!=200) {
//             if(id=='button1') set_prompt1('Image was not uploaded successfully: '+res.data.message);
//             if(id=='button2') set_prompt2('Image was not uploaded successfully: '+res.data.message);
//             if(id=='button3') set_prompt3('Image was not uploaded successfully: '+res.data.message);
//   }
//     else {
//       if(id=='button1') set_prompt1('Image was uploaded successfully!');
//       if(id=='button2') set_prompt2('Image was uploaded successfully!');
//       if(id=='button3') set_prompt3('Image was uploaded successfully!');
//     }
//
//   return res;})
// };
// reader.readAsDataURL(input.files[0]);

  }
  return (
    <div className={classes.section}>


      <GridContainer justify="center">
      <GridItem xs={12} sm={8} md={8}>


      </GridItem>


        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}><img src={BreastCancerDiagnoserBadge}/> Breast Cancer Diagnoser</h2>
          <h5 className={classes.description}>
          For evaluation, we ask you to upload three images of your breast after following the protcol taken by your thermal camera.
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
        <GridItem justify="left" xs={100} sm={100} md={100}>
        <label className={classes.description}>1-     </label><input
            accept="image/*"
            className={classes.input}
            id="button1"
            onChange={e=> onFileUpload(e)}
            type="file"
            caption="File1"
        />
        <label htmlFor="icon-button-photo1">
            <IconButton color="primary" component="span">
                <PhotoCamera />
            </IconButton>
            {prompt1.length!=0
            ?<div  style={{"color": "red", 'fontWeight': 'bold','fontSize':'small'}}>{prompt1}</div>
            :<div></div>
          }
        </label>

          </GridItem>
          <GridItem justify="left" xs={100} sm={100} md={100}>
          <label className={classes.description}>2-     </label><input
              accept="image/*"
              className={classes.input}
              id="button2"
              onChange={e=> onFileUpload(e)}
              type="file"
              caption="File2"
          />
          <label htmlFor="icon-button-photo2">
              <IconButton color="primary" component="span">
                  <PhotoCamera />
              </IconButton>
              {prompt2.length!=0
              ?<div  style={{"color": "red", 'fontWeight': 'bold','font-size':'small'}}>{prompt2}</div>
              :<div></div>
            }
          </label>
            </GridItem>
            <GridItem justify="left" xs={100} sm={100} md={100}>
            <label className={classes.description}>3-     </label><input
                accept="image/*"
                className={classes.input}
                id="button3"
                onChange={e=> onFileUpload(e)}
                type="file"
            />
            <label htmlFor="icon-button-photo3">
                <IconButton color="primary" component="span">
                    <PhotoCamera />
                </IconButton>
                {prompt3.length!=0
                ?<div  style={{"color": "red", 'fontWeight': 'bold','fontSize':'small'}}>{prompt3}</div>
                :<div></div>
              }
            </label>
              </GridItem>

              <GridItem justify="left" xs={100} sm={100} md={100}>
              <label className={classes.description}>4-     </label><input
                  accept="image/*"
                  className={classes.input}
                  id="button4"
                  onChange={e=> onFileUpload(e)}
                  type="file"
              />
              <label htmlFor="icon-button-photo4">
                  <IconButton color="primary" component="span">
                      <PhotoCamera />
                  </IconButton>
                  {prompt4.length!=0
                  ?<div  style={{"color": "red", 'fontWeight': 'bold','fontSize':'small'}}>{prompt4}</div>
                  :<div></div>
                }
              </label>
                </GridItem>

                <GridItem justify="left" xs={100} sm={100} md={100}>
                <label className={classes.description}>5-     </label><input
                    accept="image/*"
                    className={classes.input}
                    id="button5"
                    onChange={e=> onFileUpload(e)}
                    type="file"
                />
                <label htmlFor="icon-button-photo5">
                    <IconButton color="primary" component="span">
                        <PhotoCamera />
                    </IconButton>
                    {prompt5.length!=0
                    ?<div  style={{"color": "red", 'fontWeight': 'bold','fontSize':'small'}}>{prompt5}</div>
                    :<div></div>
                  }
                </label>
                  </GridItem>
      </GridContainer>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={4} md={4}>
          <br/>
            <Button onClick={e=>click1(e)} color="primary" style={{"backgroundColor": "darkorange"}}>Evaluate</Button>
      {progress=='true' && <div><br/><CircularProgress color="transparent" style={{"color": "#ff9800"}} /></div>}
          </GridItem>
          </GridContainer>
      </div>

//('response' in analysis && analysis['response']==true) border-style: dotted;
  {('response' in analysis && analysis['response']==true) && <Grid  style={{'borderStyle': 'dotted'}} container justify = "center">

      <List className={classes.list} style={{'borderStyle': 'dotted'}}>
      <ListItem border={1} className={classes.inlineBlock} alignItems='center'>
      <Grid border={1} container justify = "center">
        <h2 className={classes.title}>Analysis Report</h2>
        </Grid>
      </ListItem>
      <ListItem style={{'borderStyle': 'dotted'}} className={classes.inlineBlock} alignItems='center'>
      <Grid style={{'borderStyle': 'dotted'}} container justify = "center">
        <img className={classes.block} src={'data:image/jpeg;base64,'+analysis['result']['first_image']}/>
        </Grid>
      </ListItem>
        <ListItem style={{'borderStyle': 'dotted'}} className={classes.inlineBlock}>
        <Grid style={{'borderStyle': 'dotted'}} container justify = "center">
          <img className={classes.block} style={{'marginRight': '30px' }} src={'data:image/jpeg;base64,'+analysis['result']['left_breast']['image']}/>
          { analysis['result']['left_breast']['cancer']=='yes' && <div className={classes.block} style={{"color": "red", 'fontWeight': 'bold','fontSize':'small'}}>You have cancer symptoms in your left hand-side breast!</div>}{ analysis['result']['left_breast']['cancer']=='yes' && <img style={{'marginLeft': '30px' }} className={classes.block} src={'data:image/jpeg;base64,'+analysis['result']['left_breast']['image_analyser']}/>}
          { analysis['result']['left_breast']['cancer']=='no' && <div className={classes.block}  style={{"color": "green", 'fontWeight': 'bold','fontSize':'small'}}>You do not have any cancer symptoms in your left hand-side breast!</div>}
            </Grid>
        </ListItem>
         <ListItem className={classes.inlineBlock}>
         <Grid container justify = "center">
         <img style={{'marginRight': '30px' }} className={classes.block} src={'data:image/jpeg;base64,'+analysis['result']['right_breast']['image']}/>
         { analysis['result']['left_breast']['cancer']=='yes' && <div className={classes.block} style={{"color": "red", 'fontWeight': 'bold','fontSize':'small'}}>You have cancer symptoms in your right hand-side breast!</div>}
         { analysis['result']['left_breast']['cancer']=='yes' && <img style={{'marginLeft': '30px' }} className={classes.block} src={'data:image/jpeg;base64,'+analysis['result']['right_breast']['image_analyser']}/>}
         { analysis['result']['left_breast']['cancer']=='no' && <div className={classes.block}  style={{"color": "green", 'fontWeight': 'bold','fontSize':'small'}}>You do not have any cancer symptoms in your right hand-side breast!</div>}
           </Grid>
        </ListItem>}
      </List>
  </Grid>
}


{('response' in analysis && analysis['response']==false) && <Grid container justify = "center">

    <List className={classes.list}>
    <ListItem className={classes.inlineBlock} alignItems='center'>
    <Grid container justify = "center">
      <div className={classes.block} style={{"color": "red", 'fontWeight': 'bold','fontSize':'small'}}>{analysis['message']}</div>
      </Grid>
    </ListItem>
    </List>
</Grid>
}

      {
//         <GridContainer justify="center" spacing={5}>
//         <GridItem xs={12} sm={8} md={8}>
//
//           <h3 className={classes.title}>
//           Analysis
//           </h3>
//
//
//
//           {/*
//           <Button
//             color="danger"
//             size="lg"
//             href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
//             target="_blank"
//           >
//             <i className="fas fa-play" />
//             Watch video
//           </Button>
//           */}
//         </GridItem>
//
//         <GridItem justify="left" xs={100} sm={100} md={100}>
//         <img src={'data:image/jpeg;base64,'+analysis['result']['first_image']}/>
//
//           </GridItem>
//
//
// <GridItem justify="left" xs={33} sm={100} md={100} border={0}><img src={'data:image/jpeg;base64,'+analysis['result']['left_breast']['image']}/></GridItem>
//
// { analysis['result']['left_breast']['cancer']=='yes' &&
// <GridItem justify="left" xs={25}  border={0}><div  style={{"color": "red", 'fontWeight': 'bold','fontSize':'small'}}>  You have cancer symptoms in your left hand-side breast!</div></GridItem>
//   }
// { analysis['result']['left_breast']['cancer']=='yes' &&
//    <GridItem justify="left" xs={25} border={0}> <img src={'data:image/jpeg;base64,'+analysis['result']['left_breast']['image_analyser']}/></GridItem>
//  }
//     { analysis['result']['left_breast']['cancer']=='no' &&
//           <GridItem justify="left" xs={25} border={0}><div  style={{"color": "green", 'fontWeight': 'bold','fontSize':'small'}}>You do not have any cancer symptoms in your left hand-side breast!</div></GridItem>
//         }
//
//
//
//           <GridItem justify="left" xs={100} sm={100} md={100} border={0}>
//
//               {analysis['result']['right_breast']['cancer']=='yes'
//               ?< div><div  style={{"color": "red", 'fontWeight': 'bold','fontSize':'small'}}><img src={'data:image/jpeg;base64,'+analysis['result']['right_breast']['image']}/>   You have cancer symptoms in your right hand-side breast!</div>   <img src={'data:image/jpeg;base64,'+analysis['result']['right_breast']['image_analyser']}/></div>
//               :<div  style={{"color": "green", 'fontWeight': 'bold','fontSize':'small'}}><img src={'data:image/jpeg;base64,'+analysis['result']['right_breast']['image']}/>   You do not have any cancer symptoms in your right hand-side breast!</div>
//             }
//
//             </GridItem>
//           </GridContainer>
        }



    </div>
  );
}
