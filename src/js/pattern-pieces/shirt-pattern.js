import BodyPatternPiece from "./body-pattern-piece.js"
import CollarPatternPiece from "./collar-pattern-piece.js"
import CuffPatternPiece from "./cuff-pattern-piece.js"
import NeckGussetPatternPiece from "./neck-gusset-pattern-piece.js"
import SleevePatternPiece from "./sleeve-pattern-piece.js"
import UnderarmGussetPatternPiece from "./underarm-gusset-pattern-piece.js"

export default class ShirtPattern {

	patternPieceCuttingInstructions = [];
	
	constructor(bodyMeasurements, shirtOptions) {
		// ShirtPattern needs to store the fact that there are "multiple" entries for certain pattern pieces
		// and render accordingly
		// I also want to guarentee the ordering of the pattern pieces
		// so maybe what I want is another data structure that holds the number of copies of the pattern piece
		// like a PatternPieceQuantity ? this data structure answers the question 
		// "how many individial pieces will you need to cut out?"
		// so maybe something more like PatternPieceCuttingInstruction

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
	}

	toString() {
		let output = ""
		for (const instruction of this.patternPieceCuttingInstructions) {
			output += `${instruction.numCopies}x ${instruction.patternPiece.toString()} \n`
		}
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