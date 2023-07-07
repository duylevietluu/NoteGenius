import { connectedToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, {params}) => {
  try {
    await connectedToDB();
    const prompts = await Prompt.findById(params.id).populate("creator");
    if (!prompts) return new Response(JSON.stringify(`prompt with id ${params.id} not found`), { status: 404 });
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(`fail to fetch prompt, error: ${error}`), { status: 500 });
  }
}

// PATCH
export const PATCH = async (req, {params}) => {
  const {prompt, tag} = await req.json();
  try {
    await connectedToDB();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt) return new Response(JSON.stringify(`prompt with id ${params.id} not found`), { status: 404 });
    if (prompt) existingPrompt.prompt = prompt;
    if (tag) existingPrompt.tag = tag;
    await existingPrompt.save();
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(`fail to update prompt, error: ${error}`), { status: 500 });
  }
}

// DELETE
export const DELETE = async (req, {params}) => {
  try {
    await connectedToDB();
    await Prompt.findByIdAndRemove(params.id);
    return new Response(JSON.stringify(`prompt with id ${params.id} deleted`), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(`fail to delete prompt, error: ${error}`), { status: 500 });
  }
}