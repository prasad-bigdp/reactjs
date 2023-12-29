export const Incr = () =>
{
    return {type:"INCR"}
}
export const Decr = () => {
	return { type: "DECR" }
}
export const Login = () => {
	return { type: "LOG_IN" }
}
export const Logout = () => {
	return { type: "Log_out" }
}
export const fetchData = async (dispatch) =>
{
	try
	{
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await res.json();
		console.log(data)
		 dispatch({ type: "Fetch_Success", payload: data })
	}
	catch (err)
	{
		dispatch({type:"Fetch_Fail",payload:err})
	}
}