import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
/* ROUTE IMPORT */

/* CONFIGURATION */
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.get("/", (req, res) => {
	res.send("server is live!");
});

/* SERVER */
const PORT = process.env.PORT || 8009;
app.listen(PORT, () => {
	console.log(`Server running on PORT: ${PORT}`);
});
