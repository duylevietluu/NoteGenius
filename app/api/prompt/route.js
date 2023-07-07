import { connectedToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
  try {
    await connectedToDB();
    const prompts = await Prompt.find({}).populate("creator");
    const response = new Response(JSON.stringify(prompts), { status: 200 });
    response.headers.set("Cache-Control", "no-store");
    return response;
  } catch (error) {
    return new Response(
      JSON.stringify(`Failed to fetch all prompts, error: ${error}`),
      { status: 500 }
    );
  }
};
