async function getProducts () {
    try {
        const res = await window.fetch("https://ecommercebackend.fundamentos-29.repl.co/")
        const data = [
    {"id":'001', "name":'hoodie', "price":25.00, "image":'https://img.represent.com/uploads/97cc04c33fb623827703747d01496782.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {"id":'003', "name":'camisa', "price":20.00, "image":'https://img.represent.com/uploads/a76857819caae151f62fb58e05621acd.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {"id":'004', "name":'camisa', "price":30.00, "image":'https://img.represent.com/uploads/e33ba02f02bf3f18ba5e0db1a424ba56.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {"id":'005', "name":'hoodie', "price":10.00, "image":'https://img.represent.com/uploads/535666bf499a0c508ace882bb0420436.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {"id":'006', "name":'sudadera', "price":25.00, "image":'https://img.represent.com/uploads/ee4a165cfdce4d17714bf8a39211746b.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {"id":'007', "name":'hoodie', "price":5.00, "image":'https://img.represent.com/uploads/46ac9d39acbd33cee2aadd5b6c230dc0.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {"id":'008', "name":'sudadera', "price":8.00, "image":'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {"id":'009', "name":'camisa', "price":22.00, "image":'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {"id":'0010', "name":'hoodie', "price":30.00, "image":'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {"id":'0011', "name":'sudadera', "price":'25.00', "image":'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {"id":'0012', "name":'hoodie', "price":19.00, "image":'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {"id":'0013', "name":'camisa', "price":8.00, "image":'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null},
    {"id":'0014', "name":'sudadera', "price":10.00, "image":'https://img.represent.com/uploads/39eecc78c3a4e8bcf0542f9088d0df61.jpeg?w=750&q=95&auto=format', color: null, talle: null}
] //await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export default getProducts
