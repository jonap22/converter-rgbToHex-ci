const expect = require('chai').expect;
const converter = require('../app/converter');

describe("Color Code Converter", () => {
    describe("RGB to Hex conversion", () => {
        it("converts the basic colors", () => {
            let redHex = converter.rgbToHex(255, 0, 0);
            let greenHex = converter.rgbToHex(0, 255, 0);
            let blueHex = converter.rgbToHex(0, 0, 255);

            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");
        });
    });

    describe("Hex to RGB conversion", () => {
        it("converts the basic colors", () => {
            let red = converter.hexToRgb("ff0000");
            let green = converter.hexToRgb("00ff00");
            let blue = converter.hexToRgb("0000ff");

            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
        });
    });
});