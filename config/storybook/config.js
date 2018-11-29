import { configure, addDecorator } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withOptions } from "@storybook/addon-options";
import StoryRouter from "storybook-react-router";

addDecorator(checkA11y);
addDecorator(StoryRouter());
addDecorator(
    withOptions({
        addonPanelInRight: true
    })
);

const req = require.context("../../src", true, /.story.tsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
