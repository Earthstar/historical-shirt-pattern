export default class ShirtOptions {
	#fullness;

	constructor(fullness) {
		this.#fullness = fullness;
	}

	get fullness() {
		return this.#fullness;
	}
}

// Represents how poofy the shirt should be
export const FullnessOptions = Object.freeze({
	// theoretical minimum fullness that allows for free movement
    MINIMUM: Symbol("minimum"),
    SMALL: Symbol("small"),
    MEDIUM: Symbol("medium"),
    // theoretical maximum fullness based on 
    MAXIMUM: Symbol("maximum")
});