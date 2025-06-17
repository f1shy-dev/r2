import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  metadata: defineTable({
    authorId: v.optional(v.string()),
    key: v.string(),
    sha256: v.optional(v.string()),
    contentType: v.optional(v.string()),
    size: v.optional(v.number()),
    bucket: v.string(),
    lastModified: v.string(),
    link: v.string(),
  })
    .index("bucket", ["bucket"])
    .index("bucket_owner", ["bucket", "authorId"])
    .index("bucket_owner_key", ["bucket", "authorId", "key"])
    .index("bucket_key", ["bucket", "key"]),
});
