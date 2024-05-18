### Challenge Project.

Challenge project created to show the knowledge acquired as Mobile Developer
with technologies to create universal native apps (ios and android) with
`react-native` and `typescript`.

### Demo Videos

[IOS APP](https://drive.google.com/file/d/1pwfNIvayQfpcrYo4WB6PdB3OX6hctLqg/view?usp=sharing)

[ANDROID APP](https://drive.google.com/file/d/1JEuxO6dbeywDl45y51BIB7zjmrecw6U_/view?usp=sharing)

### Started Kit

The initial structure is created by [expo](https://docs.expo.dev/), the complete
framework for `react-native` to agilize the developement.

### Installation

Execute the follow commands.

```
git clone https://github.com/moguelor/rn-google-maps-challenge.git
cd rn-google-maps-challenge
npm install
npm start
```

You'll see an QR code, download the `Expo Go` application for
[ios](https://apps.apple.com/mx/app/expo-go/id982107779) and
[android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_PY&pli=1)

> You'll see the application running directly on your device.

### Structure Folder

```
|-- .expo                      # Expo related config files.
|-- .husky                     # Automatizing the linter and format pre-commits.
|-- .vscode                    # vscode settings file.
|-- assets                     # Assets for the application.
|-- src
    |-- __tests__              # Unit tests with jest.
    |-- shared                 # Shared items along the application.
        |-- components         # Reusable components
        |-- hooks              # Encapsulated logic in hooks.
        types.ts               # Reusable types for typescript.
        utils.ts               # Helpful utilities.
    |-- views                  # Views of the app.
.eslintignore                  # Ignored items for eslint.
.eslintrc                      # Configuration for eslint.
.gitignore                     # Ignored files,
.prettierrc                    # Prettier configuration,
app.json                       # Main app configuration.
App.tsx                        # Point of entry of the application.
babel.config.js                # Babel configuration.
packages.json                  # Packages.
tsconfig.json                  # Typescript rules configuration.
```

### Libraries

Here are the main libraries used in the project.

-   [react-native](https://reactnative.dev/) - Create multiplatform applications
    using react.
-   [typescript](https://www.typescriptlang.org/) - Types for javascript.
-   [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) -
    Animations for react-native.
-   [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) -
    Safe area

### Code support

-   [eslint](https://eslint.org/)
-   [prettier](https://prettier.io/)
-   [lint-staged](https://github.com/lint-staged/lint-staged)
-   [husky](https://github.com/typicode/husky)

### Testing

-   [jest](https://jestjs.io/)

### Deploy - Development

-   [Expo Go](https://expo.dev/go)

### Google APIs

-   [Geocoding](https://developers.google.com/maps/documentation/javascript/geocoding?hl=es)
-   [Places](https://developers.google.com/maps/documentation/places/web-service/overview)

### Required features.

-   [x] 1. Implement search text with autocomplete from google maps.
-   [x] 2. As minimum three letters to start calling the api.
-   [x] 3. Add debounced function to wait 500 miliseconds of inactivity to start
       the search.
-   [x] 4. If the user select an item from the suggestions this would be
       interpreted as a custom marker in the map.
-   [x] 5. Add a clear button to remove the query and start a new search.
-   [x] 6. Request for the localization of the user, set it up as default if is
       no selected any marker.

## BONUS

-   [x] Added a smooth look and feel with animations.
-   [x] Added extra validations when the user is calling the api.
-   [x] Customized the application with the splash and icons.
-   [x] Added unit testing for some util functions.
-   [x] Added clean and reusable components.

### [TODO]

-   Deploy the apps directly with
    [EAS BUILD](https://docs.expo.dev/build/introduction/)

### IMAGES

![Alt text](https://drive.google.com/uc?id=1Lt7IfkO1yUOePLC1GKRvn0q5At1SQlea)
