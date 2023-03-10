# Expense Management Tool 💵

Get organized with a simple expense management tool!

![Screenshot 2023-02-15 142614](https://user-images.githubusercontent.com/53013989/219028524-501cca9c-2e78-4640-993c-aa0fc42d6527.png)

## Features

Using the app, you will be able to manage your personal expenses by:

⭐ Adding a new expense by choosing a specific category and a date

⭐ Creating a detailed report of the expenses according to the categories

## Demo

https://user-images.githubusercontent.com/53013989/219031021-c621c76f-aea1-4537-9214-9bc507e12746.mp4

## How to run the app
### Pre-requisites
⭐ Make sure you have node installed on your machine

### Instructions
1. Open CMD/Terminal inside a desired folder and run the following command:
``` bash
git clone https://github.com/AnastasiaH8696/expense-management
```
2. Then go inside the expense-management folder:
```bash
cd app
```
3. To install the app, enter the following command:
```bash
npm install
```
4. To run the app, enter the following command:
```bash
npm start
```
5. Congrats! The app is running 🤩 now all you have to do is to open your browser and type:
```bash
http://localhost:3000/
```  

### Technologies
This app was built with the following technologies:

⭐ Frontend: ReactJS (JavaScript)

⭐ DB: Asynchronous Local Storage implementation

## Troubleshooting
If you have node version higher than v17, please modify the package.json file by replacing:
```
"start": "react-scripts start",
"build": "react-scripts build",
```
to this:
```
"start": "react-scripts --openssl-legacy-provider start",
"build": "react-scripts --openssl-legacy-provider build",
```

