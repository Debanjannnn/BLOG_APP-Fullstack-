"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlogInput = exports.createBlogInput = exports.SigninInput = exports.SignupInput = void 0;
const zod_1 = require("zod");
exports.SignupInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
    name: zod_1.z.string().min(5)
});
exports.SigninInput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8),
    name: zod_1.z.string().min(5)
});
exports.createBlogInput = zod_1.z.object({
    title: zod_1.z.string().min(5),
    content: zod_1.z.string().min(10),
});
exports.UpdateBlogInput = zod_1.z.object({
    title: zod_1.z.string().min(5),
    content: zod_1.z.string().min(10),
    id: (0, zod_1.number)()
});
