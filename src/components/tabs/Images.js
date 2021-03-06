/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import * as helper from "../helper/commands";

/**
 * 
 * @param {*} props 
 * Render Images of the user has
 */
const Images = (props) => {

	const [repo, setRepo] = useState('');

	const handleClick = (e) => {
		e.preventDefault();
		helper.pullImage(repo)
	}

	const renderImagesList = props.imagesList.map((ele, i) => {

		return (
			<div className="box" key={`imageBox${i}`}>
				<div className="images-header">
					<span>ID: {ele['imgid']}</span>
				</div>
				<div className="stopped-info">
					<li>Repository : {ele['reps']}</li>
					<li>Size : {ele['size']}</li>
					<li>Tag : {ele['tag']}</li>
				</div>
				<div className="stopped-button">
					<button className="run-btn" onClick={() => props.runIm(ele['imgid'], props.runningList, helper.addRunning, props.addRunningContainers)}>RUN</button>
					<button className="stop-btn" onClick={() => props.removeIm(ele['imgid'], props.imagesList, helper.refreshImages, props.refreshImagesList)}>REMOVE</button>
				</div>
			</div>
		)
	});

	return (
		<div className="renderContainers">
			<div className="header">
				<span className="tabTitle">Images</span>
				<div className="runByButton">
					<label>Enter Image Repo</label>
					<span><input type="text" value={repo} onChange={(e) => { setRepo(e.target.value) }}></input></span>
					<button className="run-btn" onClick={(e) => handleClick(e)}>Pull</button>
				</div>
			</div>
			<div className="containers">
				{renderImagesList}
			</div>
		</div>
	)
}

export default Images;