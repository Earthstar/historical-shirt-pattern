import BodyPatternPiece from "./body-pattern-piece.js"
import CollarPatternPiece from "./collar-pattern-piece.js"
import CuffPatternPiece from "./cuff-pattern-piece.js"
import NeckGussetPatternPiece from "./neck-gusset-pattern-piece.js"
import SleevePatternPiece from "./sleeve-pattern-piece.js"
import UnderarmGussetPatternPiece from "./underarm-gusset-pattern-piece.js"
import PatternDimension from "./pattern-dimension.js"

export default class ShirtPattern {
	#bodyMeasurements
	#shirtOptions

	patternPieceCuttingInstructions = [];
	
	constructor(bodyMeasurements, shirtOptions) {
		const bodyPatternPiece = new BodyPatternPiece(bodyMeasurements, shirtOptions)
		this.patternPieceCuttingInstructions.push(new PatternPieceCuttingInstruction(bodyPatternPiece, 1))
		const sleevePatternPiece = new SleevePatternPiece(bodyMeasurements, shirtOptions)
		this.patternPieceCuttingInstructions.push(new PatternPieceCuttingInstruction(sleevePatternPiece, 2))
		const collarPatternPiece = new CollarPatternPiece(bodyMeasurements, shirtOptions)
		this.patternPieceCuttingInstructions.push(new PatternPieceCuttingInstruction(collarPatternPiece, 1))
		const cuffPatternPiece = new CuffPatternPiece(bodyMeasurements, shirtOptions)
		this.patternPieceCuttingInstructions.push(new PatternPieceCuttingInstruction(cuffPatternPiece, 2))
		const underarmGussetPatternPiece = new UnderarmGussetPatternPiece(bodyMeasurements, shirtOptions)
		this.patternPieceCuttingInstructions.push(new PatternPieceCuttingInstruction(underarmGussetPatternPiece, 2))
		const neckGussetPatternPiece = new NeckGussetPatternPiece(bodyMeasurements, shirtOptions)
		this.patternPieceCuttingInstructions.push(new PatternPieceCuttingInstruction(neckGussetPatternPiece, 2))

		this.#bodyMeasurements = bodyMeasurements;
		this.#shirtOptions = shirtOptions;
	}

	toString() {
		let output = "All measurements are in inches.\n"
		for (const instruction of this.patternPieceCuttingInstructions) {
			output += `${instruction.numCopies}x ${instruction.patternPiece.toString()} \n`
		}

		output += `Armhole depth: ${PatternDimension.getArmholeDepth(this.#bodyMeasurements)}"\n`
		return output
	}
}

export class PatternPieceCuttingInstruction {
	patternPiece;
	numCopies;

	constructor(patternPiece, numCopies) {
		this.patternPiece = patternPiece;
		this.numCopies = numCopies;
	}
}