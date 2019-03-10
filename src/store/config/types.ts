export const SET_GLOBAL_CONFIG = 'SET_GLOBAL_CONFIG';

export type Action = {
	type: string;
	payload: any;
};

export type ApplicationStatus = {
	name: string;
	value: string;
};

type aws = {
	s3: {
		bucket: string;
	};
};

export type Day = {
	name: string;
	value: string;
};

export type Duration = {
	name: string;
	value: number;
};

type emailTemplate = {
	name: string;
	value: string;
};

type Frequency = {
	name: string;
	value: number;
};

type Level = {
	name: string;
	value: string;
	subjects: string[];
};

type Subject = {
	name: string;
	value: string;
};

type Period = {
	name: string;
	value: string;
};

type Qualification = {
	name: string;
	value: string;
};

type School = {
	name: string;
	value: string;
};

type Gender = {
	name: string;
	value: string;
};

type PlusPoint = {
	name: string;
	value: string;
};

type Rate = {
	level: string;
	qualification: string;
	name: string;
};

type JobStatus = {
	name: string;
	value: string;
};

type ActivatedStatus = {
	name: string;
	value: string;
};

type UserRole = {
	name: string;
	value: string;
};

export type Config = {
	applicationStatuses: ApplicationStatus[] | null;
	aws: aws | null;
	days: Day[] | null;
	durations: Duration[] | null;
	emailTemplates: emailTemplate[] | null;
	experiences: number[] | null;
	foundings: number[] | null;
	frequencies: Frequency[] | null;
	levels: Level[] | null;
	subjects: Subject[] | null;
	periods: Period[] | null;
	qualifications: Qualification[] | null;
	schools: School[] | null;
	genders: Gender[] | null;
	years: number[] | null;
	plusPoints: PlusPoint[] | null;
	rates: Rate[] | null;
	jobStasuses: JobStatus[] | null;
	isActivatedStatuses: ActivatedStatus[] | null;
	userRoles: UserRole[] | null;
};
