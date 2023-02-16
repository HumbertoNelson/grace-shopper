import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/products';

const ProductForm = () => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        name: '',
        price: 0,
        weight: 0,
        size: '',
        color: '',
        imageURL: '',
    });

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value});
    }

    const handleSubmit = () => {
        dispatch(addProduct(inputs));
        setInputs({
            name: '',
            price: 0,
            weight: 0,
            size: '',
            color: '',
            imageURL: '',
        });
    }

    return (
        <div id="new-product">
            <h2>Add New Product (admins only)</h2>
            <form>
                <label>Name: </label>
                <input
                    placeholder='Chair'
                    name='name'
                    value={inputs.name}
                    onChange={onChange}
                    className='input-field'
                />
                <label>Price (in USD):</label>
                <input
                    placeholder='99'
                    name='price'
                    value={inputs.price}
                    onChange={onChange}
                    className='input-field'
                />
                <label>Weight (in lbs):</label>
                <input
                    placeholder='20'
                    name='weight'
                    value={inputs.weight}
                    onChange={onChange}
                    className='input-field'
                />
                <label>Size (lxwxh in inches):</label>
                <input
                    placeholder='20x20x20'
                    name='size'
                    value={inputs.size}
                    onChange={onChange}
                    className='input-field'
                />
                <label>Color:</label>
                <input
                    placeholder='blue'
                    name='color'
                    value={inputs.color}
                    onChange={onChange}
                    className='input-field'
                />
                <label>Link to image:</label>
                <input
                    placeholder='https://google.com/example'
                    name='imageURL'
                    value={inputs.imageURL}
                    onChange={onChange}
                    className='input-field'
                />
            </form>
            <div id='create-button'>
            <button onClick={handleSubmit}>
                Create
            </button>
            </div>
        </div>
    );
};

export default ProductForm;