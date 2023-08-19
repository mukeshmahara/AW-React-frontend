import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userLogout } from "../../_redux/slices/user";
import sidebarData from "./sidebarData";

function SideBar() {
	const [active, setActive] = useState("Dashboard");
	const navigate = useNavigate();

	const handleClick = (item) => {
		setActive(item.name);
	};

	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(userLogout(navigate));
	};

	return (
		<div className="shadow-lg h-full">
			<div className="flex items-center">
				<div className="p-4 text-right">
					<img
						src="logo_transparent.png"
						alt="Image"
						className="border animate-bounce object-fill h-16 shadow-lg rounded-full"
					/>
				</div>
				<div className="flex-1 p-4">
					<b className="text-lg text-indigo-500">Admin Panel</b>
				</div>
			</div>
			<hr />
			<div className="max-h-screen item-center overflow-auto ">
				{sidebarData.map((item) => {
					return (
						<NavLink
							key={item.id}
							to={item.link}
							className={
								active === item.name
									? "font-bold text-indigo-900 scale-x-150 decoration-sky-500"
									: ""
							}
							onClick={() => handleClick(item)}
						>
							<div className="grid grid-cols-4 m-4 mt-4 ">
								{item.icon}
								<p className="object-none">{item.name}</p>
							</div>
						</NavLink>
					);
				})}
			</div>
				<div className="flex flex-col items-end absolute bottom-0">
					<button
						className="rounded button "
						onClick={handleLogout}
					>
						logout
					</button>
				</div>
		</div>
	);
}

export default SideBar;
