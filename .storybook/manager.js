import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
    theme: create({
        base: "dark",
        brandTitle: "AquaviaSpa Design System",
        brandUrl: "https://aquaviaspa.es",
        brandImage: "/public/logo-navbar.svg",
        brandTarget: "_self",
    })
})