import PatternPiece from "./pattern-piece.js"
import CONSTANTS from "../constants.js"

export default class CuffPatternPiece extends PatternPiece {
	name = "cuff"
	constructor(bodyMeasurements, shirtOptions) {
		super(bodyMeasurements, shirtOptions);
	}

	get width() {
		const widthOfCuff = 2;
		return 2 * widthOfCuff + 2 * CONSTANTS.SEAM_ALLOWANCE;
	}

	get height() {
		const ease = 1;
		const cuffOverlap = 1
		bodyMeasurements.wristCircumference + ease + cuffOverlap + 2 * CONSTANTS.SEAM_ALLOWANCE;
	}
}