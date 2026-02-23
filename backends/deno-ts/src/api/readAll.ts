import type { RouterContext } from "@oak/oak";
import { Item } from "../utilities/database.ts";

export const readAll = async (ctx: RouterContext<"/api/readAll">): Promise<void> => {
  const items = await Item.find();
  ctx.response.body = items;
};
