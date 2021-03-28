
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

String.prototype.readable = function () {
    return this.replace('-', ' ').capitalize()
}

export const RUBBER_TRACKS = 'rubbertracks';
export const CLEARANCE = 'clearance';
export const UNDERCARRIAGE = 'undercarriage';
export const EXCAVATORS = 'excavators';
export const BULLDOZERS = 'bulldozers';
export const TRACK_LOADERS = 'track-loaders';
export const SKID_STEERS = 'skid-steers';
export const MINI_EXCAVATORS = 'mini-excavators';
export const TRACK_ROLLER = 'track-roller';
export const TOP_ROLLERS = 'top-rollers-2';
export const TLA = 'tla';
export const TGA = 'tga';
export const SPROCKETS = 'sprockets';
export const SEGMENT_GROUP = 'segment-group';
export const IDLERS = 'idlers';
export const TRACK_SHOES = 'track-shoes';

export const placeholder = require('../components/cards/placeholder.png').default;

export function moveViewToTop(top) {
    // for some reason, scrolling to top
    // only works 100% the times when using a timeout
    setTimeout(function () {
        window.scrollTo(0, (typeof(top) === 'number') ?  top : 100);
    }, 50);
}
