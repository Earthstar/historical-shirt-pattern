import PatternPiece from "./pattern-piece.js"
import CONSTANTS from "../constants.js"

export default class BodyPatternPiece extends PatternPiece {
	name = "body"

	static getBodyWidth(torsoCircumference) {
		return (torsoCircumference + 12) / 2;
	}

	constructor(bodyMeasurements, shirtOptions) {
		super(bodyMeasurements, shirtOptions);
	}

	get width() {
		return BodyPatternPiece.getBodyWidth(this.bodyMeasurements.torsoCircumference)
	}

	get height() {
		// height includes seam allowance for hem
		return (2 * this.width) + (2 * CONSTANTS.SEAM_ALLOWANCE);
	}
}