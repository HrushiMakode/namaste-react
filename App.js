import React from "react";

const Heading = () => <h1>Namaste React Functional Component</h1>

export const App = () => {
	return (
		<div>
			<h1 className="heading">Hi All !</h1>
            <Heading/>
		</div>
	);
};
