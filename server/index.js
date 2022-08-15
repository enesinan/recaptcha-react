import axios from "axios";

app.use("/", router);

router.post("/post", async (req,res) => {

    const { token } = req.body;

    await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
    )

    if(res.status(200)){
        res.send("Human");
    }else{
        res.send("Robot")
    }
});

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})