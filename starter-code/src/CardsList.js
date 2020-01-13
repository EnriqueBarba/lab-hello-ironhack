import React from "react";
import Card from "./Card.js";

const CardsList = () => (
    <div className="container">
        <div className="row CardList card-deck">
            <Card img="/images/icon1.png" 
                title="Declarative" 
                text="React makes it painless to create interactive UI's."/>
            <Card img="/images/icon2.png" 
                title="Components" 
                text="Build encapsulated components that manage their state."/>
            <Card img="/images/icon3.png" 
                title="Single-Way" 
                text="A set of immutable values are passed to the component's."/>
            <Card img="/images/icon4.png" 
                title="JSX" 
                text="Statically-typed, designed to run on modern browsers."/>
        </div>
    </div>
)

export default CardsList
