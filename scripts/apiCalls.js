// const url = "https://encontreja-ai.vercel.app/api"
const url = "localhost:3000/api"

async function getPets(form) {
   let fullUrl = `${url}/pet?${queryString(form)}`;
   var res = await fetch(fullUrl)
   if (!res.ok) throw new Error("Failed to fetch pets")
   return await res.json()
}

async function getCategoryValues(category) {
   var fullUrl = `${url}/categoria?q=${category}`
   var res = await fetch(fullUrl)
   if (!res.ok) throw new Error("Failed to fetch category values")
   return await res.json()
}

async function extractImageInfos(imgUrl){
   var fullUrl = `${url}/ai?img=${imgUrl}`
   var res = await fetch(fullUrl)
   if (!res.ok) throw new Error("Failed to fetch image infos")
   return await res.json()
}

// async function 