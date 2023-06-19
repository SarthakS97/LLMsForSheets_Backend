const express = require('express');
const bodyParser = require('body-parser');
const Replicate = require("replicate");

const app = express();
app.use(bodyParser.json());

// Replace 'YOUR_API_TOKEN' with the actual authentication token


app.post('/open', async (req, res) => {
  try {
    const input = req.body.input;
    const text = req.body.text;
    console.log(input, text);

    const replicate = new Replicate({
      auth: text,
    });

    // Run the replication
    const output = await replicate.run(
      "replicate/oasst-sft-1-pythia-12b:28d1875590308642710f46489b97632c0df55adb5078d43064e1dc0bf68117c3",
      {
        input: {
          prompt: input
        }
      }
    );

    // Process the received data as needed
    // ...

    // Prepare the response
    const response = {
      message: output.join(' ')
      // Add any additional fields to the response as needed
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing data' });
  }
});

app.post('/vicuna', async (req, res) => {
  try {
    const input = req.body.input;
    const text = req.body.text;
    console.log(input, text);

    const replicate = new Replicate({
      auth: text,
    });

    // Run the replication
    const output = await replicate.run(
      "replicate/vicuna-13b:6282abe6a492de4145d7bb601023762212f9ddbbe78278bd6771c8b3b2f2a13b",
      {
        input: {
          prompt: input
        }
      }
    );

    // Process the received data as needed
    // ...

    // Prepare the response
    const response = {
      message: output.join(' ')
      // Add any additional fields to the response as needed
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing data' });
  }
});

app.post('/dolly', async (req, res) => {
  try {
    const input = req.body.input;
    const text = req.body.text;
    console.log(input, text);

    const replicate = new Replicate({
      auth: text,
    });

    // Run the replication
    const output = await replicate.run(
      "replicate/dolly-v2-12b:ef0e1aefc61f8e096ebe4db6b2bacc297daf2ef6899f0f7e001ec445893500e5",
      {
        input: {
          prompt: input
        }
      }
    );

    // Process the received data as needed
    // ...

    // Prepare the response
    const response = {
      message: output.join(' ')
      // Add any additional fields to the response as needed
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing data' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
