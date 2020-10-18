import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import TreeOne from "../../Images/tree1.png";

const useStyle = makeStyles(
    (theme) =>
        (
            {
                root: {

                },
                treeOne: {
                    width: '2%',
                    height: '2%',
                },
                Grid : {
                    border : '1px solid black'
                }
            }
        )
)

function UpperPart() {
    const classes = useStyle();

    return (
        <div className={classes.root}>


            <Grid container >

                <Grid item className={classes.Grid}>
                    <div>
                        <img src={TreeOne} alt="" className={classes.treeOne} />
                    </div>
                </Grid>

            </Grid>

        </div>
    )
}

export default UpperPart;