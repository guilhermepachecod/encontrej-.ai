const url = "https://encontreja-ai.vercel.app/api"

async function getPets(form) {
   let fullUrl = `${url}/pet?${queryString(form)}`;
   var res = await fetch(fullUrl)
   if (!res.ok) throw new Error("Failed to fetch pets")
   return res.json()
}

async function getCategoryValues(category) {
   var fullUrl = `${url}/categoria?q=${category}`
   var res = await fetch(fullUrl)
   if (!res.ok) throw new Error("Failed to fetch category values")
   return res.json()
}