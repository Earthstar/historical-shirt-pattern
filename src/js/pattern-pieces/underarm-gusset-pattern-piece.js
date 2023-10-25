import PatternPiece from "./pattern-piece.js"
import CONSTANTS from "../constants.js"
import PatternDimension from "./pattern-dimension.js"
import SleevePatternPiece from "./sleeve-pattern-piece.js"

export default class UnderarmGussetPatternPiece extends PatternPiece {
	name = "underarm gusset"

	get width() {
		const armholeDepth = PatternDimension.getArmholeDepth(this.bodyMeasurements);
		const sleeveWidth = SleevePatternPiece.getSleeveWidth(this.bodyMeasurements);

		const diff = armholeDepth - (sleeveWidth / 2)
		if (diff < 2) {
			return 2 + 2 * CONSTANTS.SEAM_ALLOWANCE;
		} else {
			return diff + 2 * CONSTANTS.SEAM_ALLOWANCE;
		}

		return 0;
	}

	get height() {
		return this.width;
	}
}