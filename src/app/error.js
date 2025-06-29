"use client"

import { useEffect } from "react"
import SplashImage from "@/components/SplashScreen/SplashImage"

import "@/styles/error-page-style.scss"
import "@/components/Buttons/PrimaryButton/primarybtn-style.scss"

export default function Error({ error, reset }) {

	// useEffect(function () {
	// 	console.error(error)
	// }, [error])

	return (
		<main className="error-container">
			<div className="error-heading">
				<h1>Something went wrong!</h1>
			</div>
			<div className='error-button-container'>
				<button className="primary-btn" onClick={() => reset()}>Try Again</button>
			</div>
			<SplashImage />
		</main>
	)
}

//Overstående kode er kopiret fra en af mine tidligere opgaver.