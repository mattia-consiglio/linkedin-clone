import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../redux/actions";

export const Profileinfo = () => {
	const dispatch = useAppDispatch();
	const profileInfo = useAppSelector((state: RootState) => state.profile.me);
	useEffect(() => {
		dispatch(getUserAction("me"));
	}, []);

	return <div>Profileinfo</div>;
};
