"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogSchema = exports.Blog = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Blog = class Blog extends mongoose_2.Document {};
exports.Blog = Blog;
__decorate(
  [(0, mongoose_1.Prop)({ required: true }), __metadata("design:type", String)],
  Blog.prototype,
  "title",
  void 0,
);
__decorate(
  [(0, mongoose_1.Prop)({ required: true }), __metadata("design:type", String)],
  Blog.prototype,
  "blogText1",
  void 0,
);
__decorate(
  [(0, mongoose_1.Prop)(), __metadata("design:type", String)],
  Blog.prototype,
  "blogText2",
  void 0,
);
__decorate(
  [(0, mongoose_1.Prop)(), __metadata("design:type", String)],
  Blog.prototype,
  "blogText3",
  void 0,
);
__decorate(
  [(0, mongoose_1.Prop)(), __metadata("design:type", String)],
  Blog.prototype,
  "blogUrl1",
  void 0,
);
__decorate(
  [(0, mongoose_1.Prop)(), __metadata("design:type", String)],
  Blog.prototype,
  "blogUrl2",
  void 0,
);
__decorate(
  [(0, mongoose_1.Prop)(), __metadata("design:type", String)],
  Blog.prototype,
  "blogUrl3",
  void 0,
);
__decorate(
  [(0, mongoose_1.Prop)([String]), __metadata("design:type", Array)],
  Blog.prototype,
  "cloudinaryUrls",
  void 0,
);
exports.Blog = Blog = __decorate(
  [(0, mongoose_1.Schema)({ timestamps: true })],
  Blog,
);
exports.BlogSchema = mongoose_1.SchemaFactory.createForClass(Blog);
//# sourceMappingURL=blog.schema.js.map
