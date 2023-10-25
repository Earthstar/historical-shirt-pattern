export default class PatternDimension {
	static getArmholeDepth(bodyMeasurements) {
		return (bodyMeasurements.shoulderCircumference / 2) + 4;
	}
}