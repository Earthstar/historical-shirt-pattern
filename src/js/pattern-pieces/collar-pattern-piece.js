import PatternPiece from "./pattern-piece.js"
import CONSTANTS from "../constants.js"

export default class CollarPatternPiece extends PatternPiece {
	name = "collar"

	get width() {
		const collarWidth = 2.5;
		return 2 * collarWidth + 2 * CONSTANTS.SEAM_ALLOWANCE;
	}

	get height() {
		const ease = 3;
		const buttonOverlap = 1;
		return this.bodyMeasurements.neckCircumference + ease + buttonOverlap + 2 * CONSTANTS.SEAM_ALLOWANCE;
	}
}