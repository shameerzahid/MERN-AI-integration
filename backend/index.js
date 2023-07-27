// const express = require("express");
// const app = express();
// const port = 5000;
// const { PythonShell } = require("python-shell");

// app.use(express.json());

// // Allow both GET and POST requests for the "/api/predict" endpoint
// app
//   .route("/api/predict")
//   .get((req, res) => {
//     res.status(200).json({ message: "GET request to /api/predict" });
//   })
//   .post((req, res) => {
//     const videoFrame = req.body.videoFrame;

//     const options = {
//       mode: "text",
//       pythonPath: "python",
//       scriptPath: "F:/",
//       args: [videoFrame],
//     };

//     PythonShell.run("Recognition_1.py", options, (err, results) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ error: "An error occurred" });
//       }

//       const predictedSymbol = results[0];

//       return res.json({ symbol: predictedSymbol });
//     });
//   });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require("express");
const app = express();
const port = 5000; // choose a port number
const { PythonShell } = require("python-shell");

app.use(express.json());

app.get("/api/predict", (req, res) => {
  // Call your Python function to predict the symbol
  const options = {
    mode: "text",
    pythonPath: "python", // Replace with the path to your Python executable if necessary
    scriptPath: "F:/",  //path of the .py file where it lies
  };

  PythonShell.run("Recognition_1.py", options, (err, results) => {  //complete name of .py file 
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "An error occurred" });
    }

    const predictedSymbol = results[0]; // Assuming your Python script returns the predicted symbol
    console.log(predictedSymbol);

    return res.json({ symbol: predictedSymbol });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
