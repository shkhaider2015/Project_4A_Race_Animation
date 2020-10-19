import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Grid } from "@material-ui/core";
import { useTransition, animated, useSpring } from 'react-spring'
import TreeOne from "../../Images/tree1.png";
import BigTree from '../../Images/tree2.png';
import { Spring, Keyframes, config } from "react-spring/renderprops";

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

    const springStyle = useSpring({
        from : { transform: 'translate(0, 0)' },
        to : async next => {
            // let s = 0;
            while(1)
            {
                await next({ transform: 'translate(100%, 0)' })
                await next({ transform: 'translate(-110%, 0)' })
                
                //  s++;
            }
        },
        

    })

    useEffect(() => {
    }, [])

    

    const Container = Keyframes.Spring({
        // Single props
        show: { opacity: 1 },
        // Chained animations (arrays)
        showAndHide: [{ opacity: 1 }, { opacity: 0 }],
        // Functions with side-effects with access to component props
        wiggle: async (next, cancel, ownProps) => {
            await next({ x: 100, config: config.wobbly })
            await next({ x: 0, config: config.gentle })
        }
    })


    return (
        <div className={classes.root}>

            {/* <Container state="showAndHide">
                {styles => <div style={styles}>Hello</div>}
                </Container> */}


            {/* <Spring
                from={{ transform: 'translateX(400px)' }}
                to={{ transform: 'translateX(-400px)' }}
            >
                {
                    props => (
                        <div style={springStyle}>
                            <img src={TreeOne} alt="" className={classes.treeOne} />

                            <img src={BigTree} alt="" className={classes.bigTree} />
                            <img src={TreeOne} alt="" className={classes.treeOne} />

                            <img src={BigTree} alt="" className={classes.bigTree} />

                        </div>
                    )
                }
            </Spring> */}

            <animated.div style={springStyle}>
                            <img src={TreeOne} alt="" className={classes.treeOne} />

                            <img src={BigTree} alt="" className={classes.bigTree} />
                            <img src={TreeOne} alt="" className={classes.treeOne} />

                            <img src={BigTree} alt="" className={classes.bigTree} />

                    </animated.div>



        </div>
    )
}

export default UpperPart;