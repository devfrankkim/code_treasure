/**
 * Write a script to determine the brightness of the 
 * background colour and set the text colour as 
 * either white or black.
 * 3 6 1
 */
let log = console.log;

let textColor = (bg) => {
    bg = bg.replace('#', '');
    //check length of string
    let red = parseInt(bg, 16) >>> 16; // parseInt(bg.substring(0,2), 16);
    let green = (parseInt(bg, 16) >>> 8) & 255; // parseInt(bg.substring(2,4), 16)
    let blue = parseInt(bg, 16) & 255; // parseInt(bg.slice(4,6), 16);
    let intensity = (red * 0.299) + (green * 0.587) + (blue * 0.114);
    if (intensity > 186) {
        return '#000000'; //black
    } else {
        return '#ffffff'; //white
    }
}

log(textColor('#BADA55')); //a bright green
log(textColor('#F0E68C')); //khaki
log(textColor('#990000')); //rebeccapurple
log(textColor('#6495ED')); //cornflowerblue