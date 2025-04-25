# Neighbourly Frontend

This directory contains the mobile frontend for the Neighbourly app, built with React Native.

## Getting Started

### 1. Initialize the React Native App

If you do not see `android/` and `ios/` folders, you need to initialize a new React Native project. Use the following command (the old `npx react-native init` is deprecated):

```bash
npx @react-native-community/cli init NeighbourlyApp
```

This will create a new folder called `NeighbourlyApp` with the correct React Native structure.

### 2. Move Into Your App Directory

```bash
cd NeighbourlyApp
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the App

- For Android:
  ```bash
  npx react-native run-android
  ```
- For iOS (on macOS):
  ```bash
  npx react-native run-ios
  ```

### 5. Project Structure

- `android/` - Android native project
- `ios/` - iOS native project
- `src/` - App source code (components, screens, etc.)
- `App.js` - Main entry point

If you have existing code in `src/`, you can move it into the new `NeighbourlyApp/src/` folder after initialization.
