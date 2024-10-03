import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';

const services = [
    "stereo installation (1-2 hour)",
    "speaker installation (1-2 hours)",
    "amp/sub installation (2-3 hours)",
    "car alarm installation (2-3 hours)",
    "remote start installation (3-4 hours)",
];

const Booking = () => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [name, setName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');

    // handle checkbox selection for services
    const handleServiceSelection = (service) => {
        setSelectedServices(prevSelected =>
            prevSelected.includes(service)
                ? prevSelected.filter(s => s !== service)  // remove if already selected
                : [...prevSelected, service]  // add if not selected
        );
    };

    // form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            customerName: name,
            customerEmail,
            customerPhone,
            services: selectedServices
        });
        // reset form
        setName('');
        setCustomerEmail('');
        setCustomerPhone('');
        setSelectedServices([]);
    };

    return (
        <>
            <h1>This is the Booking page.</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='customerName'>Name:</label>&nbsp;
                <input type='text' id='customerName' name='customerName' value={name} onChange={(e) => setName(e.target.value)} required />
                <br />

                <label htmlFor='customerEmail'>Email:</label>&nbsp;
                <input type='email' id='customerEmail' name='customerEmail' value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required />
                <br />

                <label htmlFor='customerPhone'>Phone:</label>&nbsp;
                <input type='tel' id='customerPhone' name='customerPhone' value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} required />
                <br />

                <fieldset>
                    <legend>Select Services:</legend>
                    {services.map((service, index) => (
                        <div key={index}>
                            <input
                                type='checkbox'
                                id={`service-${index}`}
                                name='services'
                                value={service}
                                checked={selectedServices.includes(service)}
                                onChange={() => handleServiceSelection(service)}
                            />
                            <label htmlFor={`service-${index}`}>{service}</label>
                        </div>
                    ))}
                </fieldset>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

export default Booking;