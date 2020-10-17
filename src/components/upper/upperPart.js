import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import TreeOne from "../../Images/tree1.png";

const useStyle = makeStyles(
    (theme) =>
    (
        {
            root : {

            }
        }
    )
)

function UpperPart()
{
    const classes = useStyle();

    return(
        <div className={classes.root}>

            <div>
                <img src={TreeOne} />
            </div>

        </div>
    )
}

export default UpperPart;