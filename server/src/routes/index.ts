import express from "express";
import user from "./user.routes";
import auth from "./auth.routes";
import partRequestForm from "./partRequestForm.routes";

const router = express.Router();

router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.use(user);
router.use(auth);
router.use(partRequestForm);

export default router;
