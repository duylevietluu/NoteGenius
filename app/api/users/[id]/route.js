import { connectedToDB } from "@utils/database";
import User from "@models/user";

export const GET = async (req, {params}) => {
  try {
    await connectedToDB();
    // find user with [id]
    const user = await User.findById(params.id);
    if (user) {
      return new Response(JSON.stringify(user), { status: 200 });
    } else {
      return new Response(JSON.stringify(`fail to fetch user with id: ${params.id}`), { status: 404 });
    }
  } catch (error) {
    return new Response(JSON.stringify(`fail to fetch users, error: ${error}`), { status: 500 });
  }
}