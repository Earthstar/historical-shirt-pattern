// how do I want to structure this?
// We need to get inputs from the user: this should be a class "body measurements"
// We also need to generate individual pattern pieces. Class "PatternPiece"
// Each pattern piece has a name, a length and a width. Do PatternPieces care about orientation?
// that's probably a property of the piece. "Grain orientation"
// Then to make the whole pattern, you need to have a whole bunch of pattern pieces
// PatternPiece is like the "abstract" class, and there will be concret classes
// like BodyPatternPiece and SleevePatternPiece
// Each PatternPiece must also have a method that converts a "Body Measurement" + some optional info into a
// dimension for the pattern
// The collection class "Pattern" will have multiple instances of Pattern Piece
// Then there will probably be some other class CuttingDiagramGenerator that's responsible for
// Taking the Pattern pieces + cloth dimension and
/* 
calculating whether and how to lay out the pieces (CuttingDiagram)
Then there may also be a CuttingDiagramRenderer which takes the laid-out CuttingDiagram and actually
renders an image on the page (using HTML Canvas?)

Hmm. Maybe I don't need a separate CuttingDiagram generator/Renderer class?
Because I could just have CuttingDiagram have an input of the Pattern + Cloth width, and a "Render" method
yeah, that seems more OO
I may also want to have a smaller class that represents a single linear dimension
Because, I always need to account for "seam allowance", "ease", and "body measurement"

So, all the classes I need are
- BodyMeasurements (builder API)
- ShirtOptions (ex more full sleeves, less full sleeves. seam allowance)
- Fabric (stores fabric width)
- PatternPieceEdge (stores seam allowance, ease, fullness, and body measurement)
- PatternPiece (abstract)
  - BodyPatternPiece
  - SleevePatternPiece
  - ShoulderGussetPatternPiece
  - CuffPatternPiece
  - CollarPatternPiece
  - UnderarmGussetPatternPiece
- Pattern
- CuttingDiagram 

As much as possible, these objects should be immutable. So generating a new pattern is the same as
creating a new Pattern object
*/

import userInputTest from "./user-input/tests.js"
userInputTest();