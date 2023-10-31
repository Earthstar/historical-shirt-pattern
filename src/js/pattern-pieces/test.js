import BodyPatternPiece from "./body-pattern-piece.js"
import BodyMeasurements from "../user-input/body-measurements.js"
import SleevePatternPiece from "./sleeve-pattern-piece.js"
import CuffPatternPiece from "./cuff-pattern-piece.js"
import CollarPatternPiece from "./collar-pattern-piece.js"
import PatternDimension from "./pattern-dimension.js"
import UnderarmGussetPatternPiece from "./underarm-gusset-pattern-piece.js"
import NeckGussetPatternPiece from "./neck-gusset-pattern-piece.js"
import {ShirtOptions, FullnessOptions} from "../user-input/shirt-options.js"

export default function patternPieceTest() {
	const tests = [
		function canConstructBodyPatternPiece() {
			const bodyPatternPiece = new BodyPatternPiece({}, {})
			console.assert(bodyPatternPiece.name === "body", "name should be 'body'")
		},
		function canCalculateBodyPatternPieceDimensions() {
			const bodyMeasurements = new BodyMeasurements.Builder()
			.setTorsoCircumference(40)
			.build();
			const bodyPatternPiece = new BodyPatternPiece(bodyMeasurements, {})
			console.assert(bodyPatternPiece.width === 26, "width should be 26")
			console.assert(bodyPatternPiece.height === 51, "height should be 51")
		},
		function canCalculateSleevePatternPieceDimensionsWithMinimumFullness() {
			const bodyMeasurements = new BodyMeasurements.Builder()
			.setBicepCircumference(13)
			.setWristToWristSpan(47)
			.setTorsoCircumference(40)
			.build();

			const shirtOptions = new ShirtOptions(FullnessOptions.MINIMUM)

			const sleevePatternPiece = new SleevePatternPiece(bodyMeasurements, shirtOptions)
			console.assert(sleevePatternPiece.width === 16, "width should be 16")
			console.assert(sleevePatternPiece.height === 15, "height should be 14.5")
		},
		function canCalculateCuffPatternPieceDimensions() {
			const bodyMeasurements = new BodyMeasurements.Builder()
			.setWristCircumference(6)
			.build();

			const cuffPatternPiece = new CuffPatternPiece(bodyMeasurements, {});

			console.assert(cuffPatternPiece.width === 5)
			console.assert(cuffPatternPiece.height === 9, "height should be 9")
		},
		function canCalculateCollarDimensions() {
			const bodyMeasurements = new BodyMeasurements.Builder()
			.setNeckCircumference(14)
			.build();

			const collarPatternPiece = new CollarPatternPiece(bodyMeasurements, {});
			console.assert(collarPatternPiece.width === 6);
			console.assert(collarPatternPiece.height === 19);
		},
		function canCalculateArmholeDepth() {
			const bodyMeasurements = new BodyMeasurements.Builder()
			.setShoulderCircumference(17)
			.build();

			console.assert(PatternDimension.getArmholeDepth(bodyMeasurements) === 12.5)
		},
		function canCalculateUnderarmGussetSize() {
			const bodyMeasurements = new BodyMeasurements.Builder()
			.setShoulderCircumference(17)
			.setBicepCircumference(13)
			.build();

			const shirtOptions = new ShirtOptions(FullnessOptions.MINIMUM)

			const underarmGusset = new UnderarmGussetPatternPiece(bodyMeasurements, shirtOptions)

			console.assert(underarmGusset.width === 5.5)
			console.assert(underarmGusset.height === 5.5)
		},
		function canCalculateNeckGussetSize() {
			const neckGusset = new NeckGussetPatternPiece({}, {});

			console.assert(neckGusset.width === 3)
			console.assert(neckGusset.height === 3)
		},
		function canCalculateMaximumSleeveFullness() {
			const bodyMeasurements = new BodyMeasurements.Builder()
			.setBicepCircumference(13)
			.setWristToWristSpan(47)
			.setTorsoCircumference(40)
			.setWristCircumference(6)
			.build();

			const shirtOptions = new ShirtOptions(FullnessOptions.MAXIMUM)

			const sleevePatternPiece = new SleevePatternPiece(bodyMeasurements, shirtOptions)
			console.assert(sleevePatternPiece.width === 74, "width should be 74")
			console.assert(sleevePatternPiece.height === 30.5, "height should be 30.5")
		},
		function canCalulateSmallSleeveFullness() {
			const bodyMeasurements = new BodyMeasurements.Builder()
			.setBicepCircumference(13)
			.setWristToWristSpan(47)
			.setTorsoCircumference(40)
			.setWristCircumference(6)
			.build();

			const shirtOptions = new ShirtOptions(FullnessOptions.SMALL)
			const sleevePatternPiece = new SleevePatternPiece(bodyMeasurements, shirtOptions)

			console.assert(sleevePatternPiece.width === 20, "width should be 20")
			console.assert(sleevePatternPiece.height === 17, "height should be 17")
		},
		function canCalulateMediumSleeveFullness() {
			const bodyMeasurements = new BodyMeasurements.Builder()
			.setBicepCircumference(13)
			.setWristToWristSpan(47)
			.setTorsoCircumference(40)
			.setWristCircumference(6)
			.build();

			const shirtOptions = new ShirtOptions(FullnessOptions.MEDIUM)
			const sleevePatternPiece = new SleevePatternPiece(bodyMeasurements, shirtOptions)

			console.assert(sleevePatternPiece.width === 24, "width should be 24")
			console.assert(sleevePatternPiece.height === 19, "height should be 19")
		},
	]

	for (const testFn of tests) {
		try {
			testFn();
		} catch (e) {
			console.error(e)
		}
	}
}