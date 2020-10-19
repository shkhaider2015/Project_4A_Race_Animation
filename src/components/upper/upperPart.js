import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import { useTransition, animated } from 'react-spring'
import TreeOne from "../../Images/tree1.png";
import BigTree from '../../Images/tree2.png';
import { Spring } from "react-spring/renderprops";

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
            to: { transform: 'translateX(400px)' }
        }
    );

    useEffect(() => {
        setState(true)
    }, [])
    console.log(transition)
    return (
        <div className={classes.root}>

            <Spring
            from={{ transform : 'translateX(10px)' }}
            to={{ transform : 'translateX(-10px)' }}
            >
                {
                    props => (
                        <div style={props}>
                            <img src={TreeOne} alt="" className={classes.treeOne} />

                            <img src={BigTree} alt="" className={classes.bigTree} />
                            <img src={TreeOne} alt="" className={classes.treeOne} />

                            <img src={BigTree} alt="" className={classes.bigTree} />

                        </div>
                    )
                }
            </Spring>



        </div>
    )
}

export default UpperPart;