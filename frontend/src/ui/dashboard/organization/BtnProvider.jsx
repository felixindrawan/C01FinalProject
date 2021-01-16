import React from "react"
import { navigate } from "gatsby"
import { Grid, Button, ButtonGroup } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import home from "../../../ui-resources/dashboard/Bars/home.svg";
import homeSelected from "../../../ui-resources/dashboard/Bars/homeSelected.svg";
import opportunitieslogo from "../../../ui-resources/dashboard/Bars/opportunities.svg";
import opportunitiesSelected from "../../../ui-resources/dashboard/Bars/opportunitiesSelected.svg";
import classeslogo from "../../../ui-resources/dashboard/Bars/classes.svg";
import classesSelected from "../../../ui-resources/dashboard/Bars/classesSelected.svg";
import settinglogo from "../../../ui-resources/dashboard/Bars/setting.svg";
import settingSelected from "../../../ui-resources/dashboard/Bars/settingSelected.svg";

const BtnProvider = ({ pageTag, setpageTag, message }) => {
  
    const useStyles = makeStyles({
      contained_btn: {
        color: "#FFFFFF",
        minWidth: "28vh",
        maxHeight: "3rem",
        backgroundColor: "#A78EC3",
        "&:hover": {
          backgroundColor: "#A78EC3",
        },
        marginRight: "0.5rem",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        boxShadow: "0rem 0.5rem 1.5rem rgba(120, 98, 188, 0.16)",
        borderRadius: "0rem 0.5rem 0.5rem 0rem",
        variant: "contained",
        textTransform: "capitalize",
        justify: "flex-start",
      },
      text_btn: {
        color: "#7A7A7A",
        minWidth: "28vh",
        maxHeight: "3rem",
        backgroundColor: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#FFFFFF",
        },
        marginRight: "0.5rem",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        boxShadow: "0rem 0.5rem 1.5rem rgba(120, 98, 188, 0.16)",
        borderRadius: "0rem 0.5rem 0.5rem 0rem",
        variant: "text",
        textTransform: "capitalize",
        justify: "flex-start",
      },
      outergrid: {
        minHeight: "20vh",
      },
      contained_logo: {
        marginTop: "1.4rem",
        marginRight: "0.9rem",
      },
      text_logo: {
        marginTop: "1.2rem",
        marginRight: "1rem",
        marginLeft: "0.4rem",
      },
    });
  
    const classes = useStyles();
    

    const NavToPageS = ({message}) => {
        if(message == "dashboard"){
            navigate("/dashboard")
        }else if(message == "social Initiatives"){
            navigate("/dashboard/socialInitiatives")
        }else{
            navigate("/dashboard/"+message)
        }
        
    }
    
    switch(message){
        case "dashboard":
            if(pageTag==message){
                return(
                    <Grid item>
                        <Button className={classes.contained_btn} onClick={() => { NavToPageS({message}) }} disableElevation>
                        <Grid container alignItems="center">
                            <img src= {homeSelected} className={classes.contained_logo}/> 
                            {message}
                        </Grid>
                        </Button>
                    </Grid>
                )
                break;
            }
            return(
                <Grid item>
                    <Button className={classes.text_btn} onClick={() => { NavToPageS({message}) }}>
                    <Grid container alignItems="center">
                        <img src= {home} className={classes.text_logo}/> 
                        {message}
                    </Grid>
                    </Button>
                </Grid>
            )
            break;
        case "opportunities":
            if(pageTag==message){
                return(
                    <Grid item>
                        <Button className={classes.contained_btn} onClick={() => { NavToPageS({message}) }}  disableElevation>
                            <Grid container alignItems="center">
                                <img src= {opportunitiesSelected} className={classes.contained_logo}/> 
                                {message}
                            </Grid>
                        </Button>
                    </Grid>
                )
                break;
            }
            return(
                <Grid item>
                    <Button className={classes.text_btn} onClick={() => { NavToPageS({message}) }} >
                        <Grid container alignItems="center">
                            <img src= {opportunitieslogo} className={classes.text_logo}/> 
                            {message}
                        </Grid>
                    </Button>
                </Grid>
            )
            break;
            case "classes":
                if(pageTag==message){
                    return(
                        <Grid item>
                            <Button className={classes.contained_btn} onClick={() => { NavToPageS({message}) }}  disableElevation>
                            <Grid container alignItems="center">
                                <img src= {classesSelected} className={classes.contained_logo}/> 
                                {message}
                            </Grid>
                            </Button>
                        </Grid>
                    )
                    break;
                }
                return(
                    <Grid item>
                        <Button className={classes.text_btn} onClick={() => { NavToPageS({message}) }}>
                        <Grid container alignItems="center">
                            <img src= {classeslogo} className={classes.text_logo}/> 
                            {message}
                        </Grid>
                        </Button>
                    </Grid>
                )
                break;
        case "setting":
            if(pageTag==message){
                return(
                    <Grid item>
                        <Button className={classes.contained_btn} onClick={() => { NavToPageS({message}) }}  disableElevation>
                            <Grid container alignItems="center">
                                <img src= {settingSelected} className={classes.contained_logo}/> 
                                {message}
                            </Grid>
                        </Button>
                    </Grid>
                )
                break;
            }
            return(
                <Grid item>
                    <Button className={classes.text_btn} onClick={() => { NavToPageS({message}) }} >
                        <Grid container alignItems="center">
                            <img src= {settinglogo} className={classes.text_logo}/> 
                            {message}
                        </Grid>
                    </Button>
                </Grid>
            )
            break;
        default:
            break;
    }

    if(pageTag==message){
        return(
            <Grid item>
                <Button className={classes.contained_btn} onClick={() => { setpageTag(message)}}  disableElevation>
                    <Grid container alignItems="center">
                        <img src= {homeSelected} className={classes.contained_logo}/> 
                        dashboard   
                    </Grid>
                </Button>
            </Grid>
        )
    }
    return(
        <Grid item>
            <Button className={classes.text_btn} onClick={() => { setpageTag(message)}}>
                <Grid container alignItems="center">
                    <img src= {home} className={classes.text_logo}/> 
                    dashboard
                </Grid>
                
            </Button>
        </Grid>
    )

  }
  
  export default BtnProvider