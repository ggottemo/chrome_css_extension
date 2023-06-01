# Chrome CSS Element Outliner 

This Chrome Extension allows users to apply custom CSS to every webpage. By clicking on the extension's icon in the Chrome toolbar, users can toggle a custom style that outlines every element, and ensures every element is visible and not transparent.

## Features

- Toggles the application of custom CSS to every webpage with a single click.
- Custom CSS outlines every element, and ensures every element is visible and not transparent.

## How to Install

1. Download or clone this repository to your local machine.
2. Open the Google Chrome browser and navigate to `chrome://extensions`.
3. Toggle the "Developer mode" switch in the top right to the on position.
4. Click on the "Load unpacked" button and select the directory containing the cloned repository.

You should now see the extension's icon in the Chrome toolbar. Clicking on it will toggle the custom CSS style on the current webpage.

## Code Overview

The extension contains the following files:

- `manifest.json`: This is the manifest file that the Chrome browser reads to load the extension.
- `background.js`: This is the background script that listens for clicks on the extension's icon and injects or removes the custom CSS from the current tab.
- `styles.css`: This file contains the custom CSS that gets applied to webpages.

## Contribution

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/your-repo/my-custom-styles/issues).

## License

Distributed under the MIT License. See `LICENSE` for more information.
 