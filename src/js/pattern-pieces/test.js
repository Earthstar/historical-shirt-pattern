import BodyPatternPiece from "./body-pattern-piece.js"
import BodyMeasurements from "../user-input/body-measurements.js"
import SleevePatternPiece from "./sleeve-pattern-piece.js"
import CuffPatternPiece from "./cuff-pattern-piece.js"
import CollarPatternPiece from "./collar-pattern-piece.js"
import PatternDimension from "./pattern-dimension.js"
import UnderarmGussetPatternPiece from "./underarm-gusset-pattern-piece.js"
import NeckGussetPatternPiece from "./neck-gusset-pattern-piece.js"

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
			console.assert(bodyPatternPiece.height === 53, "height should be 53")
		},
		function canCalculateSleevePatternPieceDimensions() {
			const bodyMeasurements = new BodyMeasurements.Builder()
			.setBicepCircumference(13)
			.setWristToWristSpan(47)
			.setTorsoCircumference(40)
			.build();
			const sleevePatternPiece = new SleevePatternPiece(bodyMeasurements, {})
			console.assert(sleevePatternPiece.width === 16, "width should be 16")
			console.assert(sleevePatternPiece.height === 12, "hieght should be 12")
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

			const underarmGusset = new UnderarmGussetPatternPiece(bodyMeasurements, {})

			console.assert(underarmGusset.width === 5.5)
			console.assert(underarmGusset.height === 5.5)
		},
		function canCalculateNeckGussetSize() {
			const neckGusset = new NeckGussetPatternPiece({}, {});

			console.assert(neckGusset.width === 3)
			console.assert(neckGusset.height === 3)
		}
	]

	for (const testFn of tests) {
		try {
			testFn();
		} catch (e) {
			console.error(e)
		}
	}
}