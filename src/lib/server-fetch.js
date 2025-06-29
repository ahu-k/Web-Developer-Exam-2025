export async function serverFetch(url) {
	try {
		const response = await fetch(url)
		return await response.json()
	} catch (error) {
		throw new Error(error)
	}
}

//Overstående kode er fra en af mine tidligere opgaver.

export async function serverFetchAPI(endpoint) {
	try {
		const response = await fetch(`${process.env.API_BASE_URL}/${endpoint}`)
		return await response.json()
	} catch (error) {
		throw new Error(error)
	}
}