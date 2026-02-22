import type { RouterContext } from "@oak/oak";
import { Item } from "../utilities/database.ts";

export const create = async (ctx: RouterContext<"/api/create">): Promise<void> => {
  const body = await ctx.request.body.json();
  const item = new Item({ ref: body.ref, name: body.name });
  await item.save();
  ctx.response.body = item;
};
