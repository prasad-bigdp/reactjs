const express = require("express")
const mongoose = require("mongoose")
const Product = require("./models/productModel")
const cors = require("cors");

const app = express()
app.use(cors({
    "origin": "*"
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes

const { MongoClient, ServerApiVersion } = require("mongodb")
const uri =
	"mongodb+srv://bigdp585:Admin123456789@cluster0.zx39lfb.mongodb.net/NodeAPI?retryWrites=true&w=majority"



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
})

async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
		await client.connect()
		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 })
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!",
		)
		app.listen(3000, () => {
			console.log(`Node API app is running on port 5252`)
		})
	}
	catch (err)
	{
		console.log("error" + err);
	res.status(500).json({ message: err.message })}
	finally
	{
		// Ensures that the client will close when you finish/error
		await client.close()
	}
}
run().catch(console.dir)


app.get("/prasad", (req, res) => {
	res.send("Hello NODE API")
})


app.get("/students", async (req, res) => {
	try {
		const students = await Product.find({})
		res.status(200).json(students)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

app.get("/students/:id", async (req, res) => {
	try {
		const { id } = req.params
		const product = await Product.findById(id)
		res.status(200).json(product)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

app.post("/students", async (req, res) => {
	try {
		const product = await Product.create(req.body)
		res.status(200).json(product)
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ message: error.message })
	}
})

// update a product
app.put("/students/:id", async (req, res) => {
	try {
		const { id } = req.params
		const product = await Product.findByIdAndUpdate(id, req.body)
		// we cannot find any product in database
		if (!product) {
			return res
				.status(404)
				.json({ message: `cannot find any product with ID ${id}` })
		}
		const updatedProduct = await Product.findById(id)
		res.status(200).json(updatedProduct)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

// delete a product

app.delete("/students/:id", async (req, res) => {
	try {
		const { id } = req.params
		const product = await Product.findByIdAndDelete(id)
		if (!product) {
			return res
				.status(404)
				.json({ message: `cannot find any product with ID ${id}` })
		}
		res.status(200).json(product)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

mongoose.set("strictQuery", false)
