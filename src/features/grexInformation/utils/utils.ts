// utils for grex information

export function determineGRexSeries(area: number): string {
    if (area < 2) return "You need more cells!";
    if (area >= 2 && area < 5) return "2";
    if (area >= 5 && area < 10) return "5";
    if (area >= 10 && area < 50) return "10";
    if (area >= 50 && area < 100) return "50";
    if (area >= 100 && area < 300) return "100";
    if (area >= 300 && area < 500) return "300";
    if (area >= 500) return "500";

    return ""; // Default return in case none of the conditions are met
};


export function calculateSeriesQuantity(series: string, theoStartArea: number): number {
    const seriesNumber = parseInt(series);
    console.log(seriesNumber);

    if (series === "" || isNaN(seriesNumber)) {
        return 0; // Return 0 if the series is not a valid number
    }

    // If the theoreticalStartingSurfaceArea is less than or equal to the startingSeries, the quantity is 1
    if (theoStartArea <= seriesNumber) {
        return 1;
    }

    // If the theoreticalStartingSurfaceArea is greater than the startingSeries,
    // divide the area by the seriesNumber and round to the nearest whole number to get the quantity
    const softQuant = theoStartArea / seriesNumber;
    return Math.round(softQuant);
};

export function isPassageNecessary(startingSeries: string, startingDevices: number, finalSeries: string, finalDevices: number): boolean {
    // Convert series to numbers for accurate comparison
    const startingSeriesNum = parseInt(startingSeries);
    const finalSeriesNum = parseInt(finalSeries);

    // Ensure parsing to numbers was successful
    if (isNaN(startingSeriesNum) || isNaN(finalSeriesNum)) {
        console.error('Error parsing series numbers.');
        return false; // Default to false to avoid indicating passage is necessary on error
    }

    // Determine if passage is necessary based on series and device counts
    const passageNecessary = !(startingSeriesNum === finalSeriesNum && startingDevices === finalDevices);

    return passageNecessary;
}
