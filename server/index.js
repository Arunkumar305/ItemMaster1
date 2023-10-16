const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Arunkumar@2001",
  database: "firstproject",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to the database as ID " + db.threadId);
});

app.post("/CREATE", (req, res) => {
  const {
    ItemCode,
    Description,
    StandardQty, 
    ContainerQty,
    Rate,
    QtyOnHand,
    RefNO,
    BatchCode,
    BatchSrNO, 
    UnitCost,
    Active,
    UOM,
    HsnCode,
    PrimeCust,
    ItemPic,
  } = req.body;


  const query =
    "INSERT INTO item_master(ItemCode, Description, StandardQty, ContainerQty, Rate, QtyOnHand, RefNO, BatchCode, BatchSrNO, UnitCost, Active, UOM, HsnCode, PrimeCust, ItemPic) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    query,
    [
      ItemCode,
      Description,
      StandardQty,
      ContainerQty,
      Rate,
      QtyOnHand,
      RefNO,
      BatchCode,
      BatchSrNO,
      UnitCost,
      Active, // Use the limited Active value
      UOM,
      HsnCode,
      PrimeCust,
      ItemPic,
    ],
    (err, result) => {
      if (err) {
        console.error("Error inserting data into the database: " + err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        console.log("Data inserted successfully");
        res.status(200).json({ message: "Data inserted successfully" });
      }
    }
  );
});

app.listen(3004, () => {
  console.log("Backend server running on port 3004");
});
