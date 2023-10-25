import PatternPiece from "./pattern-piece.js"
import BodyPatternPiece from "./body-pattern-piece.js"
import CONSTANTS from "../constants.js"

export default class SleevePatternPiece extends PatternPiece {
	name = "sleeve"

	static getSleeveWidth(bodyMeasurements) {
		return bodyMeasurements.bicepCircumference + 2 + (2 * CONSTANTS.SEAM_ALLOWANCE);
	}

	constructor(bodyMeasurements, shirtOptions) {
		super(bodyMeasurements, shirtOptions);
	}

	get width() {
		return SleevePatternPiece.getSleeveWidth(this.bodyMeasurements);
	}

	get height() {
		const bodyWidth = BodyPatternPiece.getBodyWidth(this.bodyMeasurements.torsoCircumference) - 2 * CONSTANTS.SEAM_ALLOWANCE;
		return (this.bodyMeasurements.wristToWristSpan - bodyWidth) / 2 + (2 * CONSTANTS.SEAM_ALLOWANCE);
	}
}