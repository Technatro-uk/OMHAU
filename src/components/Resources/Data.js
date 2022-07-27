import React from 'react';
import { MdOndemandVideo } from 'react-icons/md';
import { FaRegFileAudio,FaPodcast } from 'react-icons/fa';
const iconStyle = (Icon) => <Icon size="1.7rem" color="dodgerblue" />;

export const featuresData = [
	{
		name: 'Video',
		description: 'Health & Fitness videos',
		icon: iconStyle(MdOndemandVideo),
		imgClass: 'one',
		featureLink: '/video'
	},
	{
		name: 'Audio',
		description: 'Audiobooks you can listen to anytime',
		icon: iconStyle(FaRegFileAudio),
		imgClass: 'two',
		featureLink: '/audio'
	},
	{
		name: 'Podcasts',
		description: 'Podcasts with a focus on mental health',
		icon: iconStyle(FaPodcast),
		imgClass: 'three',
		featureLink: '/podcasts'
	},
	// {
	// 	name: 'Support Groups',
	// 	description: 'Find local support groups near you',
	// 	icon: iconStyle(MdGroups),
	// 	imgClass: 'four',
	// 	featureLink: '/support'
	// },
	// {
	// 	name: 'Exercise',
	// 	description: 'Keep fit with these regurarly updated exercises',
	// 	icon: iconStyle(MdFitnessCenter),
	// 	imgClass: 'five',
	// 	featureLink: '/exercise'
	// },
	// {
	// 	name: 'Journal',
	// 	description: 'Keep tabs on what you are doing & what you want to achieve!',
	// 	icon: iconStyle(BsJournalText),
	// 	imgClass: 'six',
	// 	featureLink: '/journal'
	// },
	// {
	// 	name: 'Self Help',
	// 	description: 'Self help guides that you can use anytime',
	// 	icon: iconStyle(FaHandsHelping),
	// 	imgClass: 'seven',
	// 	featureLink: '/selfhelp'
	// },
	// {
	// 	name: 'Community',
	// 	description: 'Get involved with events, chat with & meet people in your own community',
	// 	icon: iconStyle(RiCommunityLine),
	// 	imgClass: 'eight',
	// 	featureLink: '/journal'
	// },
];