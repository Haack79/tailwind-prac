const dummyAPIResponse = {
    showLightAndDarkMode: true,
    showTicTacToe: false,
    showRandomColorGenerator: true,
    showQRCodeGenerator: true,
    showTreeView: true,
    showAccordion: false
}

const featureFlagDataServiceCall = () => {
    return new Promise((resolve, reject) => {
        if (dummyAPIResponse) {
            setTimeout(() => resolve(dummyAPIResponse), 500); // Correct usage of setTimeout
        } else {
            reject('Error fetching feature flag data');
        }
    });
}

export default featureFlagDataServiceCall;
