export class BodyMeasurements {
	#wristToWristSpan;
	#torsoCircumference;
	#wristCircumference;
	#neckCircumference;
	#shoulderCircumference;

	static Builder = class {
		#wristToWristSpan;
		#torsoCircumference;
		#wristCircumference;
		#neckCircumference;
		#shoulderCircumference;

		setWristToWristSpan(wristToWristSpan) {
			this.#wristToWristSpan = wristToWristSpan;
			return this;
		}

		setTorsoCircumference(torsoCircumference) {
			this.#torsoCircumference = torsoCircumference;
			return this;
		}

		setWristCircumference(wristCircumference) {
			this.#wristCircumference = wristCircumference;
			return this;
		}

		setNeckCircumference(neckCircumference) {
			this.#neckCircumference = neckCircumference;
			return this;
		}

		setShoulderCircumference(shoulderCircumference) {
			this.#shoulderCircumference = shoulderCircumference;
			return this;
		}

		build() {
			const bodyMeasurements = new BodyMeasurements(
					this.#wristToWristSpan,
					this.#torsoCircumference,
					this.#wristCircumference,
					this.#neckCircumference,
					this.#shoulderCircumference
				)
			return bodyMeasurements;
		}
	}

	constructor(wristToWristSpan, torsoCircumference, wristCircumference, neckCircumference, shoulderCircumference) {
		this.#wristToWristSpan = wristToWristSpan;
		this.#torsoCircumference = torsoCircumference;
		this.#wristCircumference = wristCircumference;
		this.#neckCircumference = neckCircumference;
		this.#shoulderCircumference = shoulderCircumference;
	}

	get wristToWristSpan() {
		return this.#wristToWristSpan;
	}

	get torsoCircumference() {
		return this.#torsoCircumference;
	}

	get wristCircumference() {
		return this.#wristCircumference;
	}

	get neckCircumference() {
		return this.#neckCircumference;
	}

	get shoulderCircumference() {
		return this.#shoulderCircumference;
	}
}