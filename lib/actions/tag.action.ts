// "use server";

// import Tag from "@/database/tag.model";
// import { connectToDatabase } from "../mongoose";

// export async function getTags(params: any) {
//   try {
//     connectToDatabase();

//     const { tags } = params;

//     const res = [];

//     for (const id of tags) {
//       const tag = await Tag.findById(id);
//       res.push(tag);
//     }

//     return res;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }
