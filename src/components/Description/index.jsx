import React from "react";

import { DescriptionTitle } from "./DescriptionTitle";
import { DescriptionText } from "./DescriptionText";
import { StyledDescription } from "./Description.styled";

export const Description = () => {
    return [
        <StyledDescription>
            <DescriptionTitle text = "Je suis le Description"/>
            <DescriptionText text = "This is where the desciption of the game goes, it's amazingly exciting and you really should read all of it. This isn't some Lorem Ipsum BS, its proper writing, that I've painfully typed out, purely for the benefit of you, the user" />
        </StyledDescription>
    ];
};