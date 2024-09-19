import { MiddlewareFn } from "type-graphql";
import multer from "multer";
import path from "path";

export interface MyContext {
  req: Request,
  res: Response
}

// Define multer storage
const storage = multer.diskStorage({
  destination: function(_req, _file, cb) {
    cb(null, path.join(__dirname, "../public/images/")); // Save images in public/images directory
  },
  filename: function(_req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

// Initialize multer with storage
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
}).single("image"); // Assuming you're uploading a single file with the key "image"

// Define the middleware
export const ImageUpload: MiddlewareFn<MyContext> = async ({ context }, next) => {
  const { req, res } = context;

  return new Promise((resolve, reject) => {
    // @ts-ignore
    upload(req, res, function(err) {
      if (err) {
        return reject(err); // Handle upload error
      }

      // Continue to the next middleware/resolver after the file is uploaded
      resolve(next());
    });
  });
};
