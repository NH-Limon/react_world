// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<h1>Hello there</h1>);

const root = ReactDOM.createRoot(document.getElementById('root'));
// function tick() {
//     const time = new Date().toLocaleTimeString();
//     const element = (
// 			<div>
// 				<h1>Ticking Example</h1>
// 				<h2>It's now {time}</h2>
// 			</div>
// 		);
//     root.render(element);
// }

// setInterval(tick, 1000);


// Functional components:
const Fcom = (props) => {
	return (
		<div>
			<h1>{props.name}</h1>
		</div>
	)
}

class Ccom extends React.Component{
	constructor(props){
		super(props)
	}
	render () {
		return <h1>{this.props.address}</h1>
	}
}

root.render(
	<>
		<Fcom name="NH Limon" />
		<Fcom name={'Nahid Hasan Limon'} />
		<Ccom address={'Barishal, Bangladesh'} />
	</>
);