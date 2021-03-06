import styled from "styled-components";

    /*
    *LAYOUT
    MH = MAIN HEAD
    AS = ASIDE
    CT = CONTENT
    */

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 70px auto;

    grid-template-areas: 
     'AS MH'
     'AS CT';
     height:100vh;
    ;

`;