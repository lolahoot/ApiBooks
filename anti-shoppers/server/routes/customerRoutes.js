const express = require("express");
const customerRoutes = express.Router();
const Customer = require("../models/customer");

customerRoutes.get("/", (req, res) => {
  Customer.find((err, customers) => {
    if (err) return res.status(500).send(err);
  });
});

customerRoutes.post("/", (req, res) => {
  const newCustomer = new Customer(req.body);
  newCustomer.save(err => {
    if (err) return res.status(500).send(err);
    res.send(newCustomer);
  });
});

customerRoutes.get("/:id", (req, res) => {
  Customer.findById(req.params.id, (err, customer) => {
    if (err) return res.status(500).send(err);
    res.send(customer);
  });
});

customerRoutes.put("/:id", (req, res) => {
  Customer.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, customer) => {
      if (err) return res.status(500).send(err);
      res.send(customer);
  });
});
