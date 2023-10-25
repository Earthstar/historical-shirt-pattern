import PatternPiece from "./pattern-piece.js"
import CONSTANTS from "../constants.js"

export default class NeckGussetPatternPiece extends PatternPiece {

	name = "neck gusset"

	get width() {
		return 3;
	}

	get height() {
		return this.width;
	}
}