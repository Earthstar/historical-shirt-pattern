import PatternPiece from "./pattern-piece.js"
import CONSTANTS from "../constants.js"

export default class BodyPatternPiece extends PatternPiece {
	name = "body"

	constructor(bodyMeasurements, shirtOptions) {
		super(bodyMeasurements, shirtOptions);
	}

	get width() {
		return (this.bodyMeasurements.torsoCircumference + 12) / 2
	}

	get height() {
		// height includes seam allowance for hem
		return (2 * this.width) + (2 * CONSTANTS.EASE);
	}
}