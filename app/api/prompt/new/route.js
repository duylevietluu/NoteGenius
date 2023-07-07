import { connectedToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectedToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    })
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(`fail to create prompt, error: ${error}`), { status: 500 });
  }
}