export default class ShirtOptions {
	#sleeveFullness;

	constructor(sleeveFullness) {
		this.#sleeveFullness = sleeveFullness;
	}

	get sleeveFullness() {
		return this.#sleeveFullness;
	}
}

// Represents how poofy the sleeves should be
export const FullnessOptions = Object.freeze({
	// theoretical minimum fullness that allows for free movement
    MINIMUM: Symbol("minimum"),
    SMALL: Symbol("small"),
    MEDIUM: Symbol("medium"),
    // theoretical maximum fullness based on how much fabric can be gathered
    MAXIMUM: Symbol("maximum")
});

export {ShirtOptions as "ShirtOptions"}