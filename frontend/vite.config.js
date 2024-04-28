import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		hmr: {
			overlay: false,
		},
	},
	define: {
		// Pass the Cloudinary URL as a global variable
		"process.env.CLOUDINARY_URL": JSON.stringify(process.env.CLOUDINARY_URL),
	},
});
