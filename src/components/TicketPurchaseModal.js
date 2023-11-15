import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext'; // assuming you have an AuthContext

const TicketPurchaseModal = ({ isOpen, event, onClose }) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const [numberOfTickets, setNumberOfTickets] = useState(1);
    const [totalPrice, setTotalPrice] = useState(event.ticket_price);
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '1234567812345678', // Mock card number
        expiryDate: '12/25', // Mock expiry date
        cvv: '123', // Mock CVV
        zipCode: '12345', // Mock zip code
        cardHolderName: 'Zaza Doe' // Mock card holder's name
    });
    const [errors, setErrors] = useState({});

    const eventDate = new Date(event.date_time).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const eventTime = new Date(event.date_time).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });

    useEffect(() => {
        setTotalPrice((numberOfTickets * parseFloat(event.ticket_price)).toFixed(2));
    }, [numberOfTickets, event.ticket_price]);

    if (!isOpen) return null;

    const validateInput = () => {
        let errors = {};
        // Validate card number length (mock check for 16 digits)
        if (cardDetails.cardNumber.replace(/\s+/g, '').length !== 16) {
            errors.cardNumber = 'Must be 16 numbers.';
        }
        // Validate CVV length (mock check for 3 digits)
        if (cardDetails.cvv.length !== 3) {
            errors.cvv = 'Must be 3 digits.';
        }
        // Validate zip code length (mock check for 5 digits)
        if (cardDetails.zipCode.length !== 5) {
            errors.zipCode = 'Must be 5 digits.';
        }
        // Check for expiration date format MM/YY
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDetails.expiryDate)) {
            errors.expiryDate = 'Must be in MM/YY format.';
        }
        // Check if the cardholder's name is entered
        if (!cardDetails.cardHolderName.trim()) {
            errors.cardHolderName = 'Name is required.';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const getValidationColor = (condition) => {
        return condition ? 'text-green-500' : 'text-red-500';
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    };

    const handlePayment = () => {
        // Assuming validateInput() has been called and returned true.

        const accessToken = localStorage.getItem('access_token');
        if (!accessToken || !isAuthenticated()) {
            navigate('/login');
            return;
        }

        const orderData = {
            event_id: event.event_id,
            num_tickets: numberOfTickets,
            // Include any additional payment information needed by your backend
        };

        // Get the user details first
        fetch('http://127.0.0.1:8000/users/user/', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(userData => {
                // Now that we have user data, proceed to create the order
                // We return a Promise here that will resolve to an object containing both userData and orderResponse
                return fetch('http://127.0.0.1:8000/orders/create/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken}`
                    },
                    body: JSON.stringify(orderData)
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to create order.');
                        }
                        return response.json();
                    })
                    .then(orderResponse => {
                        // We resolve the Promise with both userData and orderResponse
                        return { userData, orderResponse };
                    });
            })
            .then(({ userData, orderResponse }) => {
                // Now we have both userData and orderResponse
                const confirmationDetails = {
                    eventDetails: {
                        name: event.name,
                        date: eventDate,
                        time: eventTime,
                        venue: event.venue,
                    },
                    ticketDetails: {
                        seat: orderResponse.seat,
                        price: totalPrice,
                    },
                    userDetails: {
                        name: userData.name, // Replace with actual property from userData
                        email: userData.email,
                        phone: userData.phone_number, // Replace with actual property from userData
                    },
                    orderDetails: {
                        order_id: orderResponse.order.order_id, // Accessing order_id from the nested order object
                        number_of_tickets: numberOfTickets,
                        total_amount: totalPrice, // Assuming this is the total amount calculated
                    }
                };

                navigate('/confirmation', { state: { details: confirmationDetails } });
                onClose();
            })
            .catch(error => {
                console.error('Failed to create order or fetch user details:', error);
                // Handle the error
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInput()) {
            // Check if the user is authenticated
            if (!isAuthenticated()) {
                // Redirect to the login page if not authenticated
                navigate('/login');
                return;
            }

            // Process payment and create the order
            handlePayment();
        }
    };



    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg relative w-1/2">
                <button onClick={onClose} className="absolute top-0 right-0 p-2 text-red-500 text-2xl font-bold">×</button>
                <h2 className="text-2xl font-bold mb-4">Purchase Tickets</h2>
                <div className="flex justify-between">
                    <div className="w-1/2 pr-4">
                        <div className="mb-4">
                            <label htmlFor="cardHolderName" className="block text-sm font-medium text-gray-700">Cardholder Name</label>
                            <input type="text" id="cardHolderName" name="cardHolderName" value={cardDetails.cardHolderName} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                            <p className={getValidationColor(cardDetails.cardHolderName.trim() !== '')}>{errors.cardHolderName || 'Name is required.'}</p>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                            <input type="text" id="cardNumber" name="cardNumber" value={cardDetails.cardNumber} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                            <p className={getValidationColor(cardDetails.cardNumber.replace(/\s+/g, '').length === 16)}>{errors.cardNumber || 'Must be 16 numbers.'}</p>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                            <input type="text" id="expiryDate" name="expiryDate" value={cardDetails.expiryDate} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                            <p className={getValidationColor(/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDetails.expiryDate))}>{errors.expiryDate || 'Must be in MM/YY format.'}</p>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                            <input type="text" id="cvv" name="cvv" value={cardDetails.cvv} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                            <p className={getValidationColor(cardDetails.cvv.length === 3)}>{errors.cvv || 'Must be 3 digits.'}</p>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                            <input type="text" id="zipCode" name="zipCode" value={cardDetails.zipCode} onChange={handleInputChange} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                            <p className={getValidationColor(cardDetails.zipCode.length === 5)}>{errors.zipCode || 'Must be 5 digits.'}</p>
                        </div>
                    </div>
                    <div className="w-1/2 pl-4 border-l-2">
                        <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full">
                            <div>
                                <div className="flex mb-4">
                                    <label htmlFor="tickets" className="block text-sm font-medium text-gray-700 pr-4">Number of tickets</label>
                                    <input type="number" id="tickets" name="tickets" min="1" max={event.available_tickets} value={numberOfTickets} onChange={(e) => setNumberOfTickets(parseInt(e.target.value))} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                                </div>
                                <div className="mb-2">
                                    <p className="text-lg font-semibold">Total: ${totalPrice}</p>
                                </div>
                            </div>
                            <div className="flex justify-center top-10 mt-8">
                                <button type="submit" className="px-8 py-4 rounded bg-green-500 text-white text-2xl">Pay</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketPurchaseModal;
