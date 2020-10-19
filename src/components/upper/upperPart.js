import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { useTransition, animated } from 'react-spring'
import TreeOne from "../../Images/tree1.png";
import BigTree from '../../Images/tree2.png';

const useStyle = makeStyles(
    (theme) =>
        (
            {
                root: {
                    backgroundColor: 'green'
                },
                treeOne: {
                    width: '3%',
                    marginBottom: '5%',
                    marginLeft: '10%',
                    animationName: 'sam',
                },
                bigTree: {
                    width: '10%',
                    marginLeft: '10%',
                },
                Grid: {
                    border: '1px solid black',
                    display: 'inline-block',
                    marginTop: '5%'
                }
            }
        )
)

function UpperPart() {
    const classes = useStyle();
    const [state, setState] = useState(false);
    const transition = useTransition(
        {
            from: { transform: 'translateX(0px)' },
            enter: { transform: 'translate(400px ,0)' },
            leave: { transform: 'translate(00)' },
        }
    );

    useEffect(()=>{
        setState(true)
    }, [])
    console.log(transition)
    return (
        <div className={classes.root}>


            <Grid container >

                <Grid item className={classes.Grid} lg={12} sm={12}>
                    <div>
                        {
                            transition.map(
                                (obj, ind) => {
                                    return (
                                        <animated.div style={obj} key={ind}>
                                            <img src={BigTree} alt="" className={classes.bigTree} />
                                        </animated.div>
                                    )
                                }
                            )
                        }


                        <img src={TreeOne} alt="" className={classes.treeOne} />

                        <img src={BigTree} alt="" className={classes.bigTree} />
                        <img src={TreeOne} alt="" className={classes.treeOne} />

                        <img src={BigTree} alt="" className={classes.bigTree} />

                    </div>
                </Grid>

            </Grid>

        </div>
    )
}

export default UpperPart;