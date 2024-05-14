const url = "https://encontreja-ai.vercel.app/api"

async function searchPets(form) {
   let fullUrl = `${url}/pet?${queryString(form)}`;
   var res = await fetch(fullUrl)
   if(!res.ok) throw new Error("Failed to fetch pets")
   return res.json()
}