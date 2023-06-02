const db = require("../config/db");

exports.getAllOredrs = (req, res) => {
  db.query("SELECT * FROM orders", (err, results, fields) => {
    if (err) {
      console.log("ERROR orders", err);
      return req.status(500).json({ err: "interal server error" });
    }
    res.json(results);
    // console.log(fields);
  });
};
exports.getOrderById = (req, res) => {
    db.query("SELECT * FROM orders WHERE id =?", [req.params.id], (err, results, fields) => {
      if (err) {
        console.log("ERROR orders", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json(results);
      // console.log(fields);
    });
};

exports.createOrder = (req, res) => {
  const { customer_id, flower_id, quantity } = req.body;
  db.query(
    "INSERT INTO orders(customer_id, flower_id, quantity) VALUES(?,?,?)",
    [customer_id, flower_id, quantity],
    (err, results) => {
      if (err) {
        console.log("ERROR create orders", err);
        return req.status(500).json({ err: "interal server error" });
      }
      //   console.log(results);
      res.json({
        message: "order created successfuly",
        orderId: results.insertId,
      });
    }
  );
};
exports.updateOrder = (req, res) => {
    const { id, customer_id, flower_id, quantity } = req.body;
    db.query(
      "UPDATE orders SET customer_id =?, flower_id =?, customer_id, flower_id, quantity =? WHERE id =?",
      [customer_id, flower_id, quantity, id],
      (err, results) => {
        if (err) {
          console.log("ERROR update orders", err);
          return req.status(500).json({ err: "interal server error" });
        }
        //   console.log(results);
        res.json({
          message: "order updated successfuly",
          orderId: id,
        });
      }
    );
};
exports.deleteOrder = (req, res) => {
    const { id } = req.body;
    db.query(
      "DELETE FROM orders WHERE id =?",
      [id],
      (err, results) => {
        if (err) {
          console.log("ERROR delete orders", err);
          return req.status(500).json({ err: "interal server error" });
        }
        //   console.log(results);
        res.json({
          message: "order deleted successfuly",
          orderId: id,
        });
      }
    );
};

