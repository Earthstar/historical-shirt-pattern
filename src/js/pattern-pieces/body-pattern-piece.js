import PatternPiece from "./pattern-piece.js"
import CONSTANTS from "../constants.js"

export default class BodyPatternPiece extends PatternPiece {
	name = "body"

	static getBodyWidth(torsoCircumference) {
		return (torsoCircumference + 12) / 2 - 2 * CONSTANTS.SEAM_ALLOWANCE;
	}

	constructor(bodyMeasurements, shirtOptions) {
		super(bodyMeasurements, shirtOptions);
	}

	get width() {
		return BodyPatternPiece.getBodyWidth(this.bodyMeasurements.torsoCircumference) + 2 * CONSTANTS.SEAM_ALLOWANCE;
	}

	get height() {
		// height includes seam allowance for hem
		return (2 * BodyPatternPiece.getBodyWidth(this.bodyMeasurements.torsoCircumference)) + (2 * CONSTANTS.SEAM_ALLOWANCE);
	}
}