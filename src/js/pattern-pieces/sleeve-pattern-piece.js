import PatternPiece from "./pattern-piece.js"
import BodyPatternPiece from "./body-pattern-piece.js"
import CONSTANTS from "../constants.js"
import {FullnessOptions} from "../user-input/shirt-options.js"

export default class SleevePatternPiece extends PatternPiece {
	name = "sleeve"
	foo = FullnessOptions.MINIMUM

	// maximum excess length is 2 x (cuff + length of hand)

	// Map of fullness enum to function returning actual fullness
	static fullnessToHeightEase = {
		[FullnessOptions.MINIMUM]: () => 2.5,
		[FullnessOptions.SMALL]: () => 4.5,
		[FullnessOptions.MEDIUM]: () => 6.5,
		[FullnessOptions.MAXIMUM]: () => 18
	}

	// // for a thin linen, can gather ~10 inches into 1
	static fullnessToWidthEase = {
		[FullnessOptions.MINIMUM]: () => 2,
		[FullnessOptions.SMALL]: () => 6,
		[FullnessOptions.MEDIUM]: (bodyMeasurements) => 10,
		[FullnessOptions.MAXIMUM]: (bodyMeasurements) => bodyMeasurements.wristCircumference * 10
	}

	static getSleeveWidth(bodyMeasurements, shirtOptions) {
		return bodyMeasurements.bicepCircumference + SleevePatternPiece.fullnessToWidthEase[shirtOptions.sleeveFullness](bodyMeasurements) + (2 * CONSTANTS.SEAM_ALLOWANCE);
	}

	constructor(bodyMeasurements, shirtOptions) {
		super(bodyMeasurements, shirtOptions);
	}

	get width() {
		return SleevePatternPiece.getSleeveWidth(this.bodyMeasurements, this.shirtOptions);
	}

	get height() {
		const bodyWidth = BodyPatternPiece.getBodyWidth(this.bodyMeasurements.torsoCircumference) - 2 * CONSTANTS.SEAM_ALLOWANCE;
		return (this.bodyMeasurements.wristToWristSpan - bodyWidth) / 2 + SleevePatternPiece.fullnessToHeightEase[this.shirtOptions.sleeveFullness]() + (2 * CONSTANTS.SEAM_ALLOWANCE);
	}

	toString() {
		return `${this.name} piece with dimensions: arm circumference = ${this.width}"; arm length = ${this.height}"`
	}
}