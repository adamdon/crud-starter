import type { RouterContext } from "@oak/oak";
import { Item } from "../utilities/database.ts";

export const deleteOne = async (ctx: RouterContext<"/api/delete">): Promise<void> => {
  const body = await ctx.request.body.json();
  const deletedItems = await Item.deleteMany({ ref: body.ref });
  ctx.response.body = deletedItems;
};
