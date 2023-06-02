const db = require("../config/db");

exports.getAllCustomers  = (req, res)=>{
    db.query("SELECT * FROM customers", (err, result) => {
      if (err) {
        console.log("ERROR customers", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json(result);
    });
}

exports.getCustomerById  = (req, res)=>{
    const id = req.params.id;
    db.query("SELECT * FROM customers WHERE id =?", [id], (err, result) => {
      if (err) {
        console.log("ERROR customers", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json(result);
    });
}

exports.createCustomers = (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO customers(name, email) VALUES(?,?)",
    [name, email],
    (err, results) => {
      if (err) {
        console.log("ERROR create customers", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json({
        message: "customers created successfuly",
        customersId: results.insertId,
      });
    }
  );
};

exports.updateCustomers = (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    db.query(
      "UPDATE customers SET name =?, email =? WHERE id =?",
      [name, email, id],
      (err, results) => {
        if (err) {
          console.log("ERROR update customers", err);
          return req.status(500).json({ err: "interal server error" });
        }
        res.json({
          message: "customers updated successfuly",
          customersId: id,
        });
      }
    );
};

exports.deleteCustomers = (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM customers WHERE id =?", [id], (err, results) => {
      if (err) {
        console.log("ERROR delete customers", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json({
        message: "customers deleted successfuly",
        customersId: id,
      });
    });
};

