export interface User {
	_id: string;
	name: string;
	surname: string;
	email: string;
	username: string;
	title: string;
	bio: string;
	area: string;
	image: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface Experience {
	_id: string;
	role: string;
	company: string;
	startDate: string;
	endDate: string | null;
	description: string;
	area: string;
	username: string;
	image: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface Post {
	text: string;
	username: string;
	user: {
		_id: string;
	};
	image?: string | undefined;
	createdAt: string;
	updatedAt: string;
	__v: number;
	_id: string;
}

export interface Comment {
	_id: string;
	comment: string;
	rate: string;
	elementId: string;
	author: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface CommentDef {
	comment: string;
	rate: string;

	author: string;
}
