import express from "express"
import { prisma } from "@repo/db/prisma"

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hey there");
})

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await prisma.user.create({
        data: {
            username: username,
            password: password
        }
    })
    res.json({
        message: "signup successfull",
        id: user.id
    })
})

app.listen(3002);
