let nextId = 0;
export const Add = (message) =>
{
    console.log("action started")
    return {
        type: "ADD",
        payload: {
            id: nextId++,
            text:message
        }
    }
}
export const deleteTodo=(i) =>
{
    console.log("delte action started")
    return {
        type:"DELETE",
        payload: {
            id: i,
        }
     }
}
export const ToggleTodo = (id) => {
	return {
		type: "TOGGLE",
		payload: {
			id: id,
		},
	}
}