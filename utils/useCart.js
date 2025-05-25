'use client'
import { useEffect, useState } from 'react'



export function useCart() {
	const [cartItems, setCartItems] = useState([])

	useEffect(() => {
		// Load cart items from localStorage on component mount
		const savedCart = localStorage.getItem('cart')
		if (savedCart) {
			setCartItems(JSON.parse(savedCart))
		}
	}, [])

	useEffect(() => {
		// Save cart items to localStorage whenever it changes
		localStorage.setItem('cart', JSON.stringify(cartItems))
	}, [cartItems])

	const addToCart = (item) => {
		setCartItems(prevItems => {
			const existingItem = prevItems.find(i => i.id === item.id)
			if (existingItem) {
				return prevItems.map(i =>
					i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
				)
			}
			return [...prevItems, { ...item, quantity: 1 }]
		})
	}

	const removeFromCart = (id) => {
		setCartItems(prevItems => prevItems.filter(item => item.id !== id))
	}

	const updateQuantity = (id, quantity) => {
		setCartItems(prevItems =>
			prevItems.map(item =>
				item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
			)
		)
	}

	const clearCart = () => {
		setCartItems([])
	}

	const getTotalPrice = () => {
		return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
	}

	return {
		cartItems,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
		getTotalPrice,
	}
}
