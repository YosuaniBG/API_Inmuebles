const router = require("express").Router();

const Inmueble = require("../../models/inmueble.model");

router.get("/", async (req, res) => {
    try{
        const result = await Inmueble.find();
        res.json(result);
    }catch(error){
        res.json({ Error: error.messsage});
    }
});

router.post("/", async (req, res) => {
    try{
        const result = await Inmueble.create(req.body);
        res.json(result);
    }catch(error){
        res.json({ Error: error.messsage});
    }
});

router.put("/:idInmueble", async (req, res) => {
    try{
        const result = await Inmueble.findByIdAndUpdate(req.params.idInmueble, req.body, {new: true});
        res.json(result);
    }catch(error){
        res.json({ Error: error.messsage});
    }
});

router.delete("/:idInmueble", async (req, res) => {
    try{
        const result = await Inmueble.findByIdAndDelete(req.params.idInmueble);
        res.json(result);
    }catch(error){
        res.json({ Error: error.messsage});
    }
});

module.exports = router;
