import BodyMeasurements from "./body-measurements.js"

export default function userInputTest() {
	const tests = [
		function canConstructBodyMeasurement() {
			const bodyMeasurement = new BodyMeasurements.Builder()
			.setWristToWristSpan(1)
			.setTorsoCircumference(2)
			.setWristCircumference(3)
			.setNeckCircumference(4)
			.setShoulderCircumference(5)
			.build();
			console.assert(bodyMeasurement.wristToWristSpan === 1, "wristToWristSpan should be 1")
			console.assert(bodyMeasurement.torsoCircumference === 2, "torsoCircumference should be 2")
			console.assert(bodyMeasurement.wristCircumference === 3, "wristCircumference should be 3")
			console.assert(bodyMeasurement.neckCircumference === 4, "neckCircumference should be 4")
			console.assert(bodyMeasurement.shoulderCircumference === 5, "shoulderCircumference should be 5")
		},
		
	]

	for (const testFn of tests) {
		try {
			testFn();
		} catch (e) {
		}
	}
}