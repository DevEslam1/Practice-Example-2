# Practice Mobile App

![React Native](https://img.shields.io/badge/React%20Native-0.81.5-blue?logo=react)
![Expo](https://img.shields.io/badge/Expo-54.0-black?logo=expo)
![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?logo=axios)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript)

A mobile application built with Expo and React Native that provides a convenient platform for users to order meals from various restaurants.

## Project Overview

This is a practice example project for the **React Native Diploma Program** at **Nile University**, sponsored by **Bank Misr**.

The project implements networking functionality using Axios to communicate with external APIs. It includes a sign-up screen and API integration for fetching user data, demonstrating best practices for API consumption in React Native applications.

## Features

- Clean and intuitive mobile UI
- HTTP requests using Axios
- API integration with GitHub API (example: fetching user data)
- Loading and error handling states
- React Hooks for state management

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

3. Select your platform:
   - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Expo Go](https://expo.dev/go)

## Project Structure

- **app/** - Main application components
- **services/** - API service layer (Axios requests)
- **components/** - Reusable UI components
- **constants/** - Theme and configuration constants
- **hooks/** - Custom React hooks

## API Integration

The app uses Axios to make HTTP GET requests to external APIs. Example:

```javascript
import { getUser } from './services/api';

const userData = await getUser(1);
```

## Technologies Used

| Technology | Badge | Description |
|---|---|---|
| Expo | ![Expo](https://img.shields.io/badge/Expo-54.0-black?logo=expo) | React Native framework |
| React Native | ![React Native](https://img.shields.io/badge/React%20Native-0.81.5-blue?logo=react) | Mobile app framework |
| Axios | ![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-5A29E4?logo=axios) | HTTP client for API requests |
| TypeScript | ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript) | Type safety |
| JavaScript | ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript) | Programming language |
| React Navigation | ![React](https://img.shields.io/badge/React%20Navigation-7.4-61DAFB?logo=react) | Navigation library |

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [Axios documentation](https://axios-http.com/)
- [React Native documentation](https://reactnative.dev/)
