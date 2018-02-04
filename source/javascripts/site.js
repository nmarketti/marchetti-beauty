// This is where it all goes :)
import styles from '../stylesheets/site.scss';

//Javascript
import $ from 'jquery';
import TweenMax from 'TweenMax';


// Fade Logo
TweenMax.staggerTo(".marchetti-fade", 5, {opacity:1, delay:0.2, ease:Power4.easeOut}, 0.15);
TweenMax.to(".line-divide", 1, {css:{width: "25px"}, delay:1, ease:Power4.easeOut});