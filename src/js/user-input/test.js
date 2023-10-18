import BodyMeasurements from "./body-measurements.js"

export function userInputTest() {
	const tests = [
		function canConstructBodyMeasurement() {
			const bodyMeasurement = new BodyMeasurements.Builder()
			.setWristToWristSpan(1)
			.setTorsoCircumference(2)
			.setWristCircumference(3)
			.setNeckCircumference(4)
			.setShoulderCircumference(5)
			.build();
		}

		console.assert(bodyMeasurement.wristToWristSpan === 1, "wristToWristSpan should be 1")
	]

	for (testFn in tests) {
		try {
			testFn();
		} catch (e) {
		}
	}
}