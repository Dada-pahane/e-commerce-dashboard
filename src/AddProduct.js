import Header from './Header'
import React,{useState} from 'react';
import { Form, Button } from 'react-bootstrap';




 function AddProduct() {

    const [name,SetName]=useState("");
    const [file,SetFile]=useState("");
    const [price,SetPrice]=useState("");
    const [description,SetDescription]=useState("");

    function AddProduct()
    {
        console.log(name,file,price,description)
    }


    return (
        <div>
            <Header/>
            <h1>Add Product In Page</h1>
            <br></br>
     <div>

     <Form style={{ maxWidth: '400px', margin: '0 auto' }}>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter name" 
                    value={name} 
                    onChange={(e)=> SetName(e.target.value)} 
                />
            </Form.Group>

            <Form.Group controlId="formFile">
                <Form.Label>File</Form.Label>
                <Form.Control 
                    type="file" 
                    onChange={(e)=> SetFile(e.target.files[0])} 
                />
            </Form.Group>

            <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter price" 
                    value={price} 
                    onChange={(e)=> SetPrice(e.target.value)} 
                />
            </Form.Group>

            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Enter description" 
                    value={description} 
                    onChange={(e)=> SetDescription(e.target.value)} 
                />
            </Form.Group>

            <Button variant="primary" onClick={AddProduct}>
                Add Product
            </Button>
        </Form>
     </div>
        </div>

    )
}
export default AddProduct;