import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ProductCard from './ProductCard'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function SpacingGrid({myProducts, addToCart}) {
    const classes = useStyles();
    
    return (
        <Grid container className={classes.root} spacing={4}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={4}>
                    {myProducts.map((value,index) => (
                        <Grid key={index} item>
                            <ProductCard addToCart={addToCart} produit={value} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
