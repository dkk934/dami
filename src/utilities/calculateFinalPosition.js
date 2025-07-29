export function calculateFinalPosition(position, move) {
  return move.reduce((finalPosition, direction) => {
    if (direction === "forward")
      return {
        rowIndex: finalPosition.rowIndex + 1,
        tileIndex: finalPosition.tileIndex,
      };
    if (direction === "backward")
      return {
        rowIndex: finalPosition.rowIndex - 1,
        tileIndex: finalPosition.tileIndex,
      };
    if (direction === "left")
      return {
        rowIndex: finalPosition.rowIndex,
        tileIndex: finalPosition.tileIndex - 1,
      };

    if (direction === "right")
      return {
        rowIndex: finalPosition.rowIndex,
        tileIndex: finalPosition.tileIndex + 1,
      };
    return finalPosition;
  }, position);
}
