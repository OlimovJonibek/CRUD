const db = require("../config/db");

exports.getAllFlowers = (req, res) => {
  db.query("SELECT * FROM flowers", (err, results, fields) => {
    if (err) {
      console.log("ERROR flowers", err);
      return req.status(500).json({ err: "interal server error" });
    }
    res.json(results);
    // console.log(fields);
  });
};

exports.createFlower = (req, res) => {
  const { name, color, price } = req.body;
  db.query(
    "INSERT INTO flowers(name, color, price) VALUES(?,?,?)",
    [name, color, price],
    (err, results) => {
      if (err) {
        console.log("ERROR create flowers", err);
        return req.status(500).json({ err: "interal server error" });
      }
    //   console.log(results);
      res.json({
        message: "Flower created successfuly",
        flowerId: results.insertId,
      });
    }
  );
};

exports.getFlowerById = (req, res) => {
  const flowerId = req.params.id;
  db.query("SELECT * FROM flowers WHERE id =?", [flowerId], (err, results) => {
    if (err) {
      console.log("ERROR flowers", err);
      return req.status(500).json({ err: "interal server error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Flower not found" });
    }
    res.json(results[0]);
  });
};


exports.updateFlower = (req, res) => {
  const flowerId = req.params.id;
  const { name, color, price } = req.body;
  db.query(
    "UPDATE flowers SET name =?, color =?, price =? WHERE id =?",
    [name, color, price, flowerId],
    (err, results) => {
      if (err) {
        console.log("ERROR update flowers", err);
        return req.status(500).json({ err: "interal server error" });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Flower not found" });
      }
    //   console.log(results);
      res.json({
        message: "Flower updated successfuly",
        flowerId: flowerId,
      });
    }
  );
};
exports.deleteFlower = (req, res) => {
  const flowerId = req.params.id;
  db.query("DELETE FROM flowers WHERE id =?", [flowerId], (err, results) => {
    if (err) {
      console.log("ERROR delete flowers", err);
      return req.status(500).json({ err: "interal server error" });
    }
    if(results.affectedRows === 0){
        return res.status(404).json({ message: "Flower not found" });
    }
    // console.log(results);
    res.json({
      message: "Flower deleted successfuly",
      flowerId: flowerId,
    });
  });
};
