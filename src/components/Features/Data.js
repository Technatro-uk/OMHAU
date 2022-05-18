import React from 'react';
import { BsJournalText } from 'react-icons/bs';
import { MdOndemandVideo, MdGroups, MdFitnessCenter } from 'react-icons/md';
import { FaRegFileAudio,FaPodcast, FaHandsHelping } from 'react-icons/fa';
import { RiCommunityLine } from 'react-icons/ri';
const iconStyle = (Icon) => <Icon size="1.5rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Videos',
		description: 'A variety of mental health videos',
		icon: iconStyle(MdOndemandVideo),
		imgClass: 'one',
		featureLink: '/videos'
	},
	{
		name: 'Audiobooks',
		description: 'Audiobooks & guides you can listen to anytime',
		icon: iconStyle(FaRegFileAudio),
		imgClass: 'two',
		featureLink: '/audiobooks'
	},
	{
		name: 'Podcasts',
		description: 'Podcasts specifically for mental health discussions',
		icon: iconStyle(FaPodcast),
		imgClass: 'three',
		featureLink: '/podcasts'
	},
	{
		name: 'Support Groups',
		description: 'Find local support groups near you',
		icon: iconStyle(MdGroups),
		imgClass: 'four',
		featureLink: '/support'
	},
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