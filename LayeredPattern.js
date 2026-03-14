function printLayeredPattern(n) {
    const size = 2 * n - 1;

    for (let i = 0; i < size; i++) {
        let rowOutput = "";
        for (let j = 0; j < size; j++) {
            // Calculate distance to the closest of the four edges
            let top = i;
            let left = j;
            let bottom = size - 1 - i;
            let right = size - 1 - j;

            // The value is n minus the minimum distance to an edge
            let minDistance = Math.min(top, bottom, left, right);
            rowOutput += (n - minDistance) + " ";
        }
        console.log(rowOutput.trim());
    }
}

// Execute for n = 4
printLayeredPattern(4);