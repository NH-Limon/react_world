const root = ReactDOM.createRoot(document.getElementById('root'));

// function tick() {
// const element = (
// 	<>
// 		<h2>It's now {new Date().toLocaleTimeString()}</h2>
// 	</>
// )
//     root.render(element)
// }

const Clock = (props) => {
    return (
        <>
            <h1>Hello {props.name}</h1>
            <h2>It's now {props.date.toLocaleTimeString()}</h2>
        </>
    )
}

const tick = () => {
    root.render(<Clock name = {"NH Limon"} date = {new Date()}/>)
}

setInterval(tick, 1000);