import homeBgDesktop from './home/bg-desktop.jpg';
import homeBgMobile from './home/bg-mobile.jpg';
import homeBgTablet from './home/bg-tablet.jpg';
import crewBgDesktop from './crew/bg-desktop.jpg';
import crewBgMobile from './crew/bg-mobile.jpg';
import crewBgTablet from './crew/bg-tablet.jpg';
import destinationBgDesktop from './destination/bg-desktop.jpg';
import destinationBgMobile from './destination/bg-mobile.jpg';
import destinationBgTablet from './destination/bg-tablet.jpg';
import technologyBgDesktop from './technology/bg-desktop.jpg';
import technologyBgMobile from './technology/bg-mobile.jpg';
import technologyBgTablet from './technology/bg-tablet.jpg';

import anoushehAnsari from './crew/anousheh-ansari.webp';
import douglasHurley from './crew/douglas-hurley.webp';
import markShuttleworth from './crew/mark-shuttleworth.webp';
import victorGlover from './crew/victor-glover.webp';

import europa from './destination/europa.webp';
import mars from './destination/mars.webp';
import moon from './destination/moon.webp';
import titan from './destination/titan.webp';

import vehicleLandscape from './technology/launch-vehicle-landscape.jpg';
import vehiclePortrait from './technology/launch-vehicle-portrait.jpg';
import capsuleLandscape from './technology/space-capsule-landscape.jpg';
import capsulePortrait from './technology/space-capsule-portrait.jpg';
import spaceportLandscape from './technology/spaceport-landscape.jpg';
import spaceportPortrait from './technology/spaceport-portrait.jpg';

export { ReactComponent as Logo } from './shared/logo.svg';

export const backgrounds = {
	home: {
		desktop: homeBgDesktop,
		tablet: homeBgTablet,
		mobile: homeBgMobile
	},
	destination: {
		desktop: destinationBgDesktop,
		tablet: destinationBgTablet,
		mobile: destinationBgMobile
	},
	crew: {
		desktop: crewBgDesktop,
		tablet: crewBgTablet,
		mobile: crewBgMobile
	},
	technology: {
		desktop: technologyBgDesktop,
		tablet: technologyBgTablet,
		mobile: technologyBgMobile
	}
};

export const crew = [
	anoushehAnsari,
	douglasHurley,
	markShuttleworth,
	victorGlover
];

export const destinations = [europa, mars, moon, titan];

export const technologies = [
	{
		landscape: vehicleLandscape,
		portrait: vehiclePortrait
	},
	{
		landscape: capsuleLandscape,
		portrait: capsulePortrait
	},
	{
		landscape: spaceportLandscape,
		portrait: spaceportPortrait
	}
];
