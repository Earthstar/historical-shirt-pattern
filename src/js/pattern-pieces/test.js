import BodyPatternPiece from "./body-pattern-piece.js"
import BodyMeasurements from "../user-input/body-measurements.js"

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
		}
	]

	for (const testFn of tests) {
		try {
			testFn();
		} catch (e) {
		}
	}
}