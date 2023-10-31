/**
 * What is PatternPiece responsible for?
 * storing dimensions of pattern piece 
 * calculating the pattern piece size?
 * 
*/
export default class PatternPiece {
	name;

	bodyMeasurements;
	shirtOptions;
	constructor(bodyMeasurements, shirtOptions) {
		this.bodyMeasurements = bodyMeasurements;
		this.shirtOptions = shirtOptions;
	}

	get name() {
		return this.name;
	}

	get width() {
		throw new Error("must implement");
	}

	get height() {
		throw new Error("must implement");
	}

	toString() {
		return `${this.name} piece with dimensions: width = ${this.width}"; height = ${this.height}"`
	}
}