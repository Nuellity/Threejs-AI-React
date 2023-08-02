import express from "express";
import axios from "axios";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { Leap } from "@leap-ai/sdk";

dotenv.config();

const router = express.Router();

const leap = new Leap(process.env.LEAP_API_KEY);

const negativePrompt =
  "(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck";

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.post("/", async (req, res) => {
  const { prompt } = req.body;
  try {
    const { data } = await leap.generate.generateImage({
      prompt,
      negativePrompt,
      numberOfImages: 1,
      width: 1024,
      height: 1024,
      steps: 50,
      modelId: "37d42ae9-5f5f-4399-b60b-014d35e762a5",
      strenght: 1,
      seed: 957231946,
    });
    const image = data.images[0]?.uri;
    const imageResponse = await axios.get(image, {
      responseType: "arraybuffer",
    });
    const base64Image = Buffer.from(imageResponse.data).toString("base64");
    const base64JSON = { b64json: base64Image };

    res.status(200).json(base64JSON);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
