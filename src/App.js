import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div>
				<Routes>
					<Route path="/" exact Component={Home}>
						{/* <Home /> */}
					</Route>
					<Route path="/cart" exact Component={Cart}>
						{/* <Cart /> */}
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
