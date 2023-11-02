// Test function
export default function handler(request, response) {
  try {
	response.status(200).json({
    		body: request.body,
    		query: request.query,
    		cookies: request.cookies,
  	});
   } catch(e) { 
	res.status(400).json({ error: 'Invalid JSON in request body' });
   }
}


